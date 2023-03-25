import React, { FC, useEffect } from "react";

const ModalWindow: FC<Props> = ({ children, setVisible, title, className }) => {
 useEffect(() => {
  document.querySelector("body")?.classList.add("no-scroll");
  return () => {
   document.querySelector("body")?.classList.remove("no-scroll");
  };
 });

 return (
  <div className={`modal ${className}`}>
   <div className="modal_block">
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
 className?: string;
}

export default ModalWindow;