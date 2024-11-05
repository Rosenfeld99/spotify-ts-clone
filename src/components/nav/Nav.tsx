import { useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { GoBell } from "react-icons/go";
import Tooltip from "../../utils/Tooltip";

const Nav = () => {
  const [hoveredElement, setHoveredElement] = useState("");

  const handleToggleTooltip = (element: string) => {
    setHoveredElement(element);
  };

  return (
    <div className=" absolute z-40 top-0 left-0 w-full flex items-center justify-between gap-3 py-3 px-5">
      <button className="hover:text-accent cursor-not-allowed p-1.5 w-8 h-8 pr-2 bg-[#000000a0] rounded-full text-neutral flex items-center justify-center">
        <SlArrowLeft />
      </button>
      <div className="flex items-center gap-4">
        <button
          onMouseEnter={() => handleToggleTooltip("bell")}
          onMouseLeave={() => handleToggleTooltip("")}
          className="relative p-1.5 text-lg bg-[#000000a0] rounded-full text-neutral duration-100 hover:scale-110 flex items-center justify-center hover:text-accent"
        >
          <GoBell />
          <Tooltip
            show={hoveredElement === "bell"}
            position={"top-10 p-1 left-1/2 transform -translate-x-1/2"}
          >
            What's New
          </Tooltip>
        </button>
        <button
          onMouseEnter={() => handleToggleTooltip("letter")}
          onMouseLeave={() => handleToggleTooltip("")}
          className="bg-red-500 flex items-center justify-center capitalize rounded-full w-6 h-6 ring-[3px] ring-[#000000a0] font-semibold text-sm duration-100 hover:scale-110"
        >
          E
          <Tooltip
            show={hoveredElement === "letter"}
            position={"top-10 p-1 -left-3 transform -translate-x-1/2"}
          >
            Eliyahumeir
          </Tooltip>
        </button>
      </div>
    </div>
  );
};

export default Nav;
