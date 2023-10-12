import * as React from "react";
import { Card } from 'antd';

import styles from "./ICard.module.scss";
const { Meta } = Card;

interface ICardProps {
  className?: string;
  title?: string;
  image?: string;
  width?: string;
}

export const ICard: React.FC<ICardProps> = ({
  className,
  title,
  image,
  width,
}) => {
  return (
    <Card
      hoverable
      style={{ width: width }}
      className={`${styles.card} ${className}`}
      cover={
        <img 
          alt={title}
          src={image} 
          className={styles.card__image}
        />
      }
    >
      <Meta title={title} />
    </Card>
  );
};
