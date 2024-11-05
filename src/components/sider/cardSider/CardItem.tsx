import { useState } from "react";
import Tooltip from "../../../utils/Tooltip";
import { BsDot } from "react-icons/bs";
import { motion } from "framer-motion";
import { itemCard } from "../../../animation/animationMoution";

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
      <img
        className=" w-[50px] h-[50px] rounded"
        src="data:image/jpeg;base64,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"
        alt=""
      />
      {open && (
        <div className="flex flex-col">
          <p className=" text-accent font-semibold">Solid</p>
          <p className=" text-neutral text-sm font-semibold">
            Playlist . Eliyahumeir
          </p>
        </div>
      )}
      {!open && (
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
      )}
    </motion.li>
  );
};

export default CardItem;
