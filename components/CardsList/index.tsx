import React from "react";
import { ICards } from "../../types";
import Card from "../Card";
import styles from "./CardsList.module.scss";

interface ICardsListProps {
	initialCards?: ICards[];
	countCards?: number;
	handleClickOpen: (param: any) => void;
}

const CardsList: React.FC<ICardsListProps> = ({ 
	initialCards,
	countCards,
	handleClickOpen,
}) => {
	return (
		<ul className={styles.cardsList}>
			{initialCards?.length &&
				initialCards.slice(0, countCards).map((card) => {
					return (
						<Card
							key={card.id}
							card={card}
              width={"100%"}
							handleClickOpen={handleClickOpen}
						/>
					)
				})
			}
		</ul>
	)
}

export default CardsList;