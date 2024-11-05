import { BsFillPlayFill } from "react-icons/bs";
import useAlboms from "../../hooks/useAlboms";
import { useState } from "react";
import { containerCard, itemCard } from "../../animation/animationMoution";
import { motion } from "framer-motion";

interface LastArtistProps {
  title: string;
}

const LastArtist = ({ title }: LastArtistProps) => {
  const { albums } = useAlboms();
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className=" z-40 relative">
      <h3 className=" capitalize text-accent text-3xl font-bold">{title}</h3>
      <motion.ul
        variants={containerCard}
        initial="hidden"
        animate="visible"
        className=" grid gap-2 grid-cols-3 py-4"
      >
        {/* {Array.from({ length: 6 }).map((item, i) => ( */}
        {albums.slice(0, 6)?.map((item, i) => (
          <motion.li
            variants={itemCard}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            className="flex shadow-lg items-center rounded relative justify-between gap-3 bg-[#66656545] hover:bg-[#4b4b4b] overflow-hidden"
          >
            <div className=" flex items-center gap-2">
              <img
                className=" shadow-md shadow-black w-[50px] h-[50px] 2xl:w-[70px] 2xl:h-[70px]"
                src={item?.coverArt}
                alt=""
              />
              <div className=" capitalize text-accent text-sm font-semibold">
                {item?.name}
              </div>
            </div>
            {hoveredIndex === i && (
              <div className=" p-2 absolute top-0 right-0">
                <button className=" bg-btns_color shadow-md shadow-black p-1.5 rounded-full text-xl transition-transform duration-100 transform hover:scale-105">
                  <BsFillPlayFill />
                </button>
              </div>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default LastArtist;
