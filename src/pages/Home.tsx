import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import useAlboms from "../hooks/useAlboms";
import LastArtist from "../components/lastArtist/LastArtist";
import { useDate } from "../hooks/useDate";
import { motion } from "framer-motion";
import { containerCard, itemCard } from "../animation/animationMoution";

const Home = () => {
  const { albums } = useAlboms();
  const { wish } = useDate();
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };
  return (
    <div className=" relative p-5 pt-[4rem]">
      <div className="bg-gradient-to-b from-[#37393c] to-secondary h-64 w-full absolute top-0 right-0 z-30"></div>
      <LastArtist title={wish} />
      <div className=" z-40 relative pt-5">
        <h3 className=" capitalize text-accent text-2xl font-bold">
          popular artists
        </h3>
        {/* if open sider bar is true calc grid col to size correct for screen */}
        <motion.ul
          variants={containerCard}
          initial="hidden"
          animate="visible"
          className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 py-4"
        >
          {albums?.map((item, i) => (
            <motion.li
            variants={itemCard}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
              className="bg-[#1a1a1a] hover:bg-[#272727] flex flex-col gap-5 p-3 rounded-lg py-5"
            >
              <div className="items-center flex flex-col relative">
                <img
                  className=" shadow-xl shadow-[#00000092] rounded-full md:w-[17vw] md:h-[17vw] lg:w-[13vw] lg:h-[13vw] xl:max-w-[8.854vw] xl:max-h-[8.854vw]"
                  src={item.coverArt}
                  alt=""
                />
                {hoveredIndex === i && (
                  <div className=" p-2 absolute bottom-0 right-0">
                    <button className=" bg-btns_color p-2.5 shadow-lg shadow-[#000000] rounded-full text-3xl transition-transform duration-100 transform hover:scale-105">
                      <BsFillPlayFill />
                    </button>
                  </div>
                )}
              </div>
              <div className=" flex flex-col items-start gap-1">
                <h5 className=" text-accent font-semibold">
                  {item?.name?.substring(0, 15)}
                  {item?.name?.length > 15 && "..."}
                </h5>
                <p className=" capitalize text-neutral text-sm">
                  {item?.artist?.substring(0, 20)}
                  {item?.artist?.length > 20 && "..."}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Home;
