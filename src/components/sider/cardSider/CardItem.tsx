import { motion } from "framer-motion";
import { itemCard } from "../../../animation/animationMoution";
import { Public_playlists } from "../../../types/userType";
import { BsFillPlayFill } from "react-icons/bs";

interface CardItemProps {
  open: boolean;
  card: Public_playlists;
}

const CardItem = ({ open, card }: CardItemProps) => {
  // console.log(card);

  return (
    <motion.li
      variants={itemCard}
      className="relative group flex items-center gap-3 p-2.5 rounded-md hover:bg-[#1a1a1a] cursor-pointer"
    >
      <div className=" relative">
        <div className=" hidden group-hover:block absolute h-full w-full inset-0 bg-[#00000063]">
          <BsFillPlayFill className=" text-accent m-2.5 h-8 w-8 " />
        </div>
        <img
          className=" w-[50px] h-[50px] rounded"
          src={`https://i.scdn.co/image/${card?.image_url?.split(":")[2]}`}
          alt=""
        />
      </div>
      {open && (
        <div className="flex flex-col">
          <p className=" text-accent font-semibold">{card.name}</p>
          <p className=" text-neutral text-sm font-semibold">
            Playlist . {card.owner_name}
          </p>
        </div>
      )}
    </motion.li>
  );
};

export default CardItem;

// --- template card --- //
{
  /* <div className="flex flex-col">
    <p className=" text-accent font-semibold">Solid</p>
    <p className=" text-neutral text-sm font-semibold">
      Playlist . Eliyahumeir
    </p>
  </div> */
}

// --- option to show tooltip --- //
{
  /* {!open && (
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
)} */
}
