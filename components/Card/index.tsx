import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./Card.module.scss";
import { ICards } from "../../types";
import { ICard } from "../../ui-kit";

interface ICardProps {
  card: any;
  width: string;
  handleClickOpen: (param: any) => void;
}

type ICard = ICards & ICardProps;

const Card: React.FC<ICard> = ({
	card,
  width,
  handleClickOpen,
}) => {
	return (
    <Fade top>
      <li onClick={() => handleClickOpen(card)}>
        {card && (
          <ICard 
            image={card.url}
            title={card.title} 
            width={width}
          />
        )}
      </li>
    </Fade>
	)
}

export default Card;