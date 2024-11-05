import { BsFillPlayFill } from "react-icons/bs";
import { RxDotsHorizontal } from "react-icons/rx";
import TrackViewList from "../tracks/TrackViewList";
import { TrackItem } from "../../types/TracksType";

interface ContentProps {
  color: string;
  isFollowing: boolean;
  topTracks: TrackItem[];
}

const Content = ({ color, isFollowing, topTracks }: ContentProps) => {
  console.log(topTracks);

  return (
    <div className=" relative">
      <div
        style={{
          background: `linear-gradient(to bottom, ${
            color !== "" ? color : "#817f7f96"
          }, #121212)`,
        }}
        className={`${color} h-52 w-full absolute top-0 right-0 z-30`}
      />
      <div className=" z-40 relative p-5 flex flex-col gap-5 ">
        <div className="flex items-center gap-4">
          <button className=" bg-btns_color p-2.5 rounded-full text-3xl transition-transform duration-100 transform hover:scale-105">
            <BsFillPlayFill />
          </button>
          <button className=" text-accent font-semibold capitalize text-sm border py-1.5 px-4 border-neutral hover:border-accent transition-transform duration-100 transform hover:scale-105 rounded-3xl">
            {isFollowing ? "Following" : "follow"}
          </button>
          <button className=" text-3xl text-neutral hover:text-accent">
            <RxDotsHorizontal />
          </button>
        </div>
        <div className="">
          {/* title */}
          <h3 className=" capitalize text-accent text-xl font-bold">popular</h3>
          {/* list songs plus detailes */}
          <TrackViewList topTracks={topTracks} />
        </div>
      </div>
    </div>
  );
};

export default Content;
