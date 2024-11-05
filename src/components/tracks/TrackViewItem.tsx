import { useState } from "react";
import { TrackItem } from "../../types/TracksType";
import { BsFillPlayFill } from "react-icons/bs";

interface TrackProps {
  topTracks: TrackItem[];
}

const TrackViewItem = ({ topTracks }: TrackProps) => {
    console.log(topTracks);
    
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };
  return (
    <div>
      {topTracks?.map((item, i) => (
        <div
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          className=" felx items-center justify-around hover:bg-btn_sidebar_hover p-2 rounded px-4"
        >
          <div className="flex items-center gap-2">
            <p
              className={` w-10 ${
                i === 0 ? " text-btns_color" : "text-neutral"
              }`}
            >
              {hoveredIndex === i ? (
                <BsFillPlayFill className=" text-accent" />
              ) : (
                i + 1
              )}
            </p>
            <img className=" w-10 h-10 rounded" src={item?.track?.album?.coverArt?.sources[0] && item?.track?.album?.coverArt?.sources[0].url} alt="" />
            <p
              className={`capitalize hover:underline ${
                i === 0 ? " text-btns_color" : "text-neutral"
              }`}
            >
              {item?.track.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackViewItem;
