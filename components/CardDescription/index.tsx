import React from "react";
import { useRouter } from "next/router";
import { ICardsDescription } from "../../types";
import { IButton } from "../../ui-kit";
import styles from "./CardDescription.module.scss";

interface ICardDescriptionProps {
  card: any;
}

type ICard = ICardsDescription & ICardDescriptionProps;

const CardDescription: React.FC<ICard> = ({ card }) => {
  const router = useRouter();

	return (
      <li className={styles.listItem}>
        <h3>{card.id}</h3>
          <p>{card.title}</p>
          <IButton 
            onClick={() => router.push(card.link)}
          >
            Подробнее
          </IButton>
      </li>
	)
}

export default CardDescription;