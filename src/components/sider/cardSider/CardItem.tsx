import { useState } from "react";
import Tooltip from "../../../utils/Tooltip";
import { BsDot } from "react-icons/bs";
import { motion } from "framer-motion";
import { itemCard } from "../../../animation/animationMoution";
import { DEMO_IMAGE } from "../../../constant/constant";

interface CardItemProps {
  open: boolean;
}

const CardItem = ({ open }: CardItemProps) => {
  const [hoveredElement, setHoveredElement] = useState("");

  const handleToggleTooltip = (element: string) => {
    setHoveredElement(element);
  };
  return (
    <motion.li
      variants={itemCard}
      onMouseEnter={() => handleToggleTooltip("playLists")}
      onMouseLeave={() => handleToggleTooltip("")}
      className=" relative flex items-center gap-3 p-2.5 rounded-md hover:bg-[#1a1a1a] cursor-pointer"
    >
      <img className=" w-[50px] h-[50px] rounded" src={DEMO_IMAGE} alt="" />
      {open && (
        <div className="flex flex-col">
          <p className=" text-accent font-semibold">Solid</p>
          <p className=" text-neutral text-sm font-semibold">
            Playlist . Eliyahumeir
          </p>
        </div>
      )}
      {/* {!open && (
        <Tooltip
          show={hoveredElement === "playLists"}
          position={" top-2 p-2 left-[4.9rem]"}
        >
          <div className=" flex flex-col items-start">
            <h6>solid</h6>{" "}
            <p className=" flex items-center text-neutral">
              PlayList <BsDot className=" text-xl" /> Eliyahumeir
            </p>
          </div>
        </Tooltip>
      )} */}
    </motion.li>
  );
};

export default CardItem;
