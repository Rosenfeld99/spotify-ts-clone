import { useState } from "react";
import { TbArrowsShuffle } from "react-icons/tb";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { TbArrowCapsule } from "react-icons/tb";
import { DEMO_IMAGE } from "../../constant/constant";
import "../../App.css"

const SongControler = () => {
  const [toggelPlayPause, seTtoggelPlayPause] = useState<Boolean>(false);
  const [range, setRange] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const handleRangeChange = (value: number) => {
    setRange(value);
  };

  return (
    <div className=" h-[4.5rem] p-4 bg-primary w-full self-end flex items-center justify-between">
      <div className=" flex items-center gap-3">
        <div className=" rounded-md">
          <img
            className=" w-[50px] h-[50px] cursor-pointer rounded"
            src={DEMO_IMAGE}
            alt=""
          />
        </div>
        <div className=" flex flex-col text-sm">
          <div className="cursor-pointer text-accent font-semibold">
            ON & ON
          </div>
          <div className=" cursor-pointer text-neutral text-xs hover:text-accent hover:underline">
            Armin Van Beurren
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-2">
        <div className=" flex justify-center gap-3 text-2xl">
          <button className=" text-neutral hover:text-accent">
            <TbArrowsShuffle />
          </button>
          <button className=" text-neutral hover:text-accent">
            <MdSkipPrevious />
          </button>
          <button
            onClick={() => seTtoggelPlayPause(!toggelPlayPause)}
            className="bg-white p-1.5 rounded-full transition-transform duration-300 transform hover:scale-110"
          >
            {toggelPlayPause ? <BsFillPlayFill /> : <BsFillPauseFill />}
          </button>
          <button className=" text-neutral hover:text-accent">
            <MdSkipNext />
          </button>
          <button className="rotate-90  text-neutral hover:text-accent">
            <TbArrowCapsule />
          </button>
        </div>
        <div className=" flex items-center text-xs gap-1 text-neutral">
          <p>0:00</p>
          {/* <div className=" border-[2px] w-56 rounded" /> */}
          <div
            className="relative w-56 h-1 group"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {/* Progress bar */}
            <div
              className={`pointer-events-none ${
                isHover ? "bg-green-500" : "bg-white"
              } z-40 absolute inset-y-0 left-0 rounded-full transition-all duration-0`}
              style={{
                width: `${range}%`,
              }}
            ></div>

            {/* Background track */}
            <div className="absolute z-[-0] inset-y-0 left-0 w-full bg-gray-500 rounded-full"></div>

            {/* Range input */}
            <input
              type="range"
              min="0"
              max="100"
              value={range}
              onChange={(e) => handleRangeChange(Number(e.target.value))}
              className={`rangeInputStyle appearance-none relative z-40 ${
                isHover ? "flex" : "hidden"
              } flex items-center justify-center w-56 h-1 rounded focus:outline-none bg-transparent`}
            />
          </div>

          <p>3:03</p>
        </div>
      </div>
      <div className=" text-accent">Web controllers</div>
    </div>
  );
};

export default SongControler;
