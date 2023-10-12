import React, { FC, useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import Layout from "../../layout/Layout";
import { ICards } from "../../types";
import { CardsList, CardPopup } from "../../components";
import { IButton } from "../../ui-kit";
import Constants from "../../constants/Constants";
import { initialSpData } from "../../data/initialSpData";
import styles from "../index.module.scss";

interface ISitPanelProps {
	cardsSp: ICards[];
}

const SitPanel: FC<ISitPanelProps> = ({ cardsSp }) => {
  const [countCards, setCountCards] = useState(0);
  const [initialCards, setInitialCards] = useState<ICards[]>(cardsSp);
  const [selectedCard, setSelectedCard] = useState<ICards>({});
  const [openPopupCard, setOpenPopupCard] = useState<boolean>(false);
  const { initialCount } = Constants;

  useEffect(() => {
	  cardsSp?.length >= initialCount 
	    ? setCountCards(initialCount) 
	    : setCountCards(cardsSp?.length)
	}, [cardsSp, initialCount]);

  const handleClickOpenPopupCard = (param: object): void => {
		setOpenPopupCard((pre) => !pre);
		setSelectedCard(param);
	};

	const handleClosePopupCard = (): void => {
		setOpenPopupCard((pre) => !pre);
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
        title='Ситуационное управление &nbsp;— РС ИЭК'
        desc='Государственная информационная система Санкт-Петербурга 
        «Инженерно-энергетический комплекс Санкт-Петербурга»'
        ogTitle='Ситуационное управление &nbsp;— РС ИЭК'
      >
        <div className={styles.cards__content}>
          {
            cardsSp && cardsSp.length > 0 
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
        open={openPopupCard}
        handleClose={handleClosePopupCard}
        image={selectedCard?.url}
      />
    </>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const cardsSp: ICards[] = initialSpData
	return {
		props: {
			cardsSp,
		},
	}
}

export default SitPanel;