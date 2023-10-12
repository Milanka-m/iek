import React from "react";
import classnames from "classnames";
import styles from "./IButton.module.scss";

export type ButtonVariant = "outlined" | "text" | "icon";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isDisabled?: boolean;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}
export const IButton: React.FC<IButtonProps> = ({
  className,
  isDisabled = false,
  type,
  children = "Button",
  onClick,
  isActive = false,
  ...rest
}) => {
 
  return (
    <button
      className={classnames(
        styles.button,
        className,
        {
          [styles.active]: isActive,
        },
      )}
      disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
