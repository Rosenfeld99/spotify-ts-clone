import { useState } from "react";
import { TrackItem } from "../../types/TracksType";
import { BsFillPlayFill } from "react-icons/bs";
import { formatMilliseconds } from "../../utils/logic/logic";
import useTrack from "../../hooks/useTrack";
import { MdGraphicEq } from "react-icons/md";

interface TrackProps {
  topTracks: TrackItem[];
}

const TrackViewItem = ({ topTracks }: TrackProps) => {
  // console.log(topTracks);
  const { fetchSingleSong, singleSong, isPlaying } = useTrack();

  const [hoveredIndex, setHoveredIndex] = useState<string>(
    singleSong?.id || ""
  );
  const handleMouseEnter = (id: string) => {
    setHoveredIndex(id);
  };

  const handleMouseLeave = () => {
    setHoveredIndex("");
  };

  return (
    <div>
      {topTracks?.map((item, i) => (
        <div
          onMouseEnter={() => handleMouseEnter(item?.track?.id)}
          onMouseLeave={handleMouseLeave}
          className=" felx group items-center justify-around hover:bg-btn_sidebar_hover p-2 rounded px-4"
        >
          <div className=" flex  items-center justify-between ">
            <div className="flex items-center gap-2 w-full">
              <p
                onClick={() => {
                  fetchSingleSong(item?.track?.id);
                }}
                className={` w-10 ${
                  item?.track?.id == singleSong?.id
                    ? " text-btns_color"
                    : "text-neutral"
                }`}
              >
                {hoveredIndex == item?.track?.id ? (
                  <BsFillPlayFill className=" text-accent" />
                ) : // <MdGraphicEq /> //--> if i splayong
                isPlaying && item?.track?.id == singleSong?.id ? (
                  <MdGraphicEq className="text-btns_color text-xl mr-2"/>
                ) : (
                  i + 1
                )}
              </p>
              <img
                className=" w-10 h-10 rounded"
                src={
                  item?.track?.album?.coverArt?.sources[0] &&
                  item?.track?.album?.coverArt?.sources[0].url
                }
                alt=""
              />
              <p
                className={`capitalize hover:underline ${
                  item?.track?.id == singleSong?.id
                    ? " text-btns_color"
                    : "text-neutral"
                }`}
              >
                {item?.track.name}
              </p>
            </div>
            <div className="text-neutral group-hover:text-accent">
              {Number(item?.track?.playcount)?.toLocaleString()}
            </div>
            <div className="w-full text-end text-neutral hover:text-neutral">
              {formatMilliseconds(item?.track?.duration?.totalMilliseconds)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackViewItem;
