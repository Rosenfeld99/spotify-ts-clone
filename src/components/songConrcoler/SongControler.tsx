import { useEffect, useState } from "react";
import { TbArrowsShuffle } from "react-icons/tb";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { TbArrowCapsule } from "react-icons/tb";
import "../../App.css";
import useTrack from "../../hooks/useTrack";
import { formatMilliseconds } from "../../utils/logic/logic";

const SongControler = () => {
  const { singleSong, isPlaying, setIsPlaying } = useTrack();

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [range, setRange] = useState(0);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    // Clean up previous audio instance if it exists
    if (audio) {
      audio.pause();
      setAudio(null);
      setRange(0);
      setIsPlaying(true);
    }

    // Set new audio instance if preview URL exists
    if (singleSong?.preview_url) {
      const newAudio = new Audio(singleSong.preview_url);
      setAudio(newAudio);

      // Automatically play the audio if isPlaying is true
      if (isPlaying) newAudio.play();

      // Update the range as the song progresses
      newAudio.ontimeupdate = () => {
        setRange((newAudio.currentTime / newAudio.duration) * 100);
      };

      // Reset range when the song ends
      newAudio.onended = () => {
        setIsPlaying(false);
        setRange(0);
      };
    }
  }, [singleSong]);

  const togglePlaying = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRangeChange = (value: number) => {
    setRange(value);
    if (audio) {
      // Update audio playback position
      audio.currentTime = (value / 100) * audio.duration;
    }
  };

  return (
    <div className="h-[4.5rem] p-4 bg-primary w-full self-end flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="rounded-md">
          <img
            className="w-[50px] h-[50px] cursor-pointer rounded"
            src={singleSong?.album?.images[0]?.url}
            alt=""
          />
        </div>
        <div className="flex flex-col text-sm">
          <div className="cursor-pointer text-accent font-semibold">
            {singleSong?.name}
          </div>
          <div className="cursor-pointer flex items-center gap-2 text-neutral text-xs">
            {singleSong?.album?.artists?.map((ar) => (
              <span className="hover:text-accent hover:underline" key={ar?.id}>
                {ar?.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-center gap-3 text-2xl">
          <button className="text-neutral hover:text-accent">
            <TbArrowsShuffle />
          </button>
          <button className="text-neutral hover:text-accent">
            <MdSkipPrevious />
          </button>
          <button
            onClick={togglePlaying}
            className="bg-white p-1.5 rounded-full transition-transform duration-300 transform hover:scale-110"
          >
            {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
          </button>
          <button className="text-neutral hover:text-accent">
            <MdSkipNext />
          </button>
          <button className="rotate-90 text-neutral hover:text-accent">
            <TbArrowCapsule />
          </button>
        </div>
        <div className="flex items-center text-xs gap-1 text-neutral">
          <p>{audio ? formatMilliseconds(audio.currentTime * 1000) : "0:00"}</p>
          <div
            className="relative w-56 h-1 group"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <div
              className={`pointer-events-none ${
                isHover ? "bg-green-500" : "bg-white"
              } z-40 absolute inset-y-0 left-0 rounded-full transition-all duration-0`}
              style={{ width: `${range}%` }}
            ></div>
            <div className="absolute z-[-0] inset-y-0 left-0 w-full bg-gray-500 rounded-full"></div>
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
          <p>
            {singleSong?.duration_ms &&
              formatMilliseconds(singleSong.duration_ms)}
          </p>
        </div>
      </div>
      <div className="text-accent">Web controllers</div>
    </div>
  );
};

export default SongControler;
