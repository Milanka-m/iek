import React, { FC, useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import Layout from "../../layout/Layout";
import { ICards } from "../../types";
import { CardsList, CardPopup } from "../../components";
import { IButton } from "../../ui-kit";
import Constants from "../../constants/Constants";
import { initialEeData } from "../../data/initialEeData";
import styles from "../index.module.scss";

interface IEfficiencyProps {
	cardsEe: ICards[];
}

const Efficiency: FC<IEfficiencyProps> = ({ cardsEe }) => {
  const [countCards, setCountCards] = useState(0);
  const [initialCards, setInitialCards] = useState<ICards[]>(cardsEe);
  const [selectedCard, setSelectedCard] = useState<ICards>({});
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const { initialCount } = Constants;

  useEffect(() => {
	  cardsEe?.length >= initialCount 
	    ? setCountCards(initialCount) 
	    : setCountCards(cardsEe?.length)
	}, [cardsEe, initialCount]);

  const handleClickOpenPopupCard = (param: object): void => {
		setOpenPopup((pre) => !pre);
		setSelectedCard(param);
	};

	const handleClosePopupCard = (): void => {
		setOpenPopup((pre) => !pre);
    setSelectedCard({});
	};

  const addMoreCards = () => {
    countCards > initialCount 
      ? setCountCards(initialCount)
      : setCountCards(initialCards.length);
  };

	return (
    <>
      <Layout
        title='Энергоэффективность &nbsp;— РС ИЭК'
        desc='Государственная информационная система Санкт-Петербурга 
        «Инженерно-энергетический комплекс Санкт-Петербурга»'
        ogTitle='Энергоэффективность &nbsp;— РС ИЭК'
      >
        <div className={styles.cards__content}>
          {
            cardsEe && cardsEe.length > 0 
            ? <CardsList 
                initialCards={initialCards}
                countCards={countCards} 
                handleClickOpen={handleClickOpenPopupCard}
              /> 
            : <></>
          }
          <IButton 
            className={styles.cards__cardLink}
            onClick={addMoreCards}
          >
            {countCards > initialCount 
              ? "Свернуть" 
              : "Посмотреть все"
            }
          </IButton>
        </div>
      </Layout>
      <CardPopup 
        title={selectedCard?.title}
        open={openPopup}
        handleClose={handleClosePopupCard}
        image={selectedCard?.url}
      />
    </>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const cardsEe: ICards[] = initialEeData
	return {
		props: {
			cardsEe,
		},
	}
}

export default Efficiency;