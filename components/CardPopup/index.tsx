import React, { FC } from "react";
import Image from "next/image";
import { IPopup } from "../../ui-kit";
import styles from "./CardPopup.module.scss";

interface ICardPopupProps {
  title?: string;
  open?: boolean;
  handleClose: () => void;
  image?: string;
}

const CardPopup: FC<ICardPopupProps> = ({
	title,
  open,
  handleClose,
  image,
}) => {
	return (
    <IPopup
      title={title}
      open={open}
      onClose={handleClose}
    >
      <Image
        src={image}
        alt={title}
        width={1350}
        height={823}
        priority
      />
    </IPopup>
	)
}

export default CardPopup;