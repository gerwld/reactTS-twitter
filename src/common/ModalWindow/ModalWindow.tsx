import React, { FC, useEffect } from "react";
import s from "./ModalWindow.module.css";
import PropTypes from "prop-types";

export const ModalWindow: FC<Props> = ({ children, setVisible }) => {

  useEffect(() => {
    document.querySelector("body")?.classList.add("no-scroll");

    return () => {
      document.querySelector("body")?.classList.remove("no-scroll");
    };
  });
  
  return (
    <div className={s.modal}>
      <div className={s.modal_block}>
        <button onClick={() => setVisible(false)}>close</button>
        <div>Modal</div>
        {children}
      </div>
    </div>
  );
};

interface Props {
  children: React.ReactNode;
  setVisible(arg0: boolean): any;
}
