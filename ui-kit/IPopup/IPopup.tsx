import * as React from "react";
import classNames from "classnames";
import { CloseSvg } from "../../assets/customIcons";

import styles from "./IPopup.module.scss";

interface IPopupProps {
  title?: string;
  open?: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const IPopup: React.FC<IPopupProps> = ({
  title,
  open,
  onClose,
  children,
}) => {
  return (
    <div 
      className={classNames(
        styles.popup, 
        {[styles.popup_opened]: open }
      )}
    >
      <div className={styles.popup__container}>
        <div className={styles.popup__header}>
          <h2 className={styles.popup__title}>
            {title}
          </h2>
          <button 
            className={styles.popup__close} 
            type="button" 
            aria-label="Закрыть модальное окно" 
            onClick={onClose}>
              <CloseSvg />
          </button>
        </div>
        <div className={styles.popup__content}>
          {children}
        </div>
      </div>
    </div>
  );
};
