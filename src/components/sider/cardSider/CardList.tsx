import { containerCard } from "../../../animation/animationMoution";
import CardItem from "./CardItem";
import {motion} from 'framer-motion'

interface CardListProps {
  open: boolean;
}

const CardList = ({ open }: CardListProps) => {
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
      {Array.from({ length: 70 }).map((card, index) => (
        <CardItem open={open} />
      ))}
    </motion.ul>
  );
};

export default CardList;
