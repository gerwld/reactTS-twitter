import React, { FC, useEffect } from "react";
import s from "./ModalWindow.module.css";

export const ModalWindow: FC<Props> = ({ children, setVisible, title, className }) => {
  useEffect(() => {
    document.querySelector("body")?.classList.add("no-scroll");
    return () => {
      document.querySelector("body")?.classList.remove("no-scroll");
    };
  });

  return (
    <div className={`${s.modal} ${className}`}>
      <div className={s.modal_block}>
        <button onClick={() => setVisible(false)}>close</button>
        <div>{title}</div>
        {children}
      </div>
    </div>
  );
};

interface Props {
  children: React.ReactNode;
  setVisible(arg0: boolean): any;
  title: string;
  className?: string
}
