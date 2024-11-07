import { containerCard } from "../../../animation/animationMoution";
import useUser from "../../../hooks/useUser";
import CardItem from "./CardItem";
import {motion} from 'framer-motion'

interface CardListProps {
  open: boolean;
}

const CardList = ({ open }: CardListProps) => {
  const {user} = useUser()
  return (
    <motion.ul
    variants={containerCard}
    initial="hidden"
    animate="visible"
      className={`
        ${
        open ? "px-3" : " w-fit"
      }`}
    >
      {user?.public_playlists?.map((card, index) => (
        <CardItem open={open} card={card} key={card.uri}/>
      ))}
    </motion.ul>
  );
};

export default CardList;
