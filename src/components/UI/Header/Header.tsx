import React from "react";
import s from "./Header.module.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const Header: React.FC<HeaderProps> = ({ children, title }) => {
  const navigate = useNavigate();
  const isBtnBack = (title === "Tweet");

  const onGoBack = () => {
    navigate(-1);
  }

  return (
    <div className={s.header}>
      {isBtnBack && 
      <button onClick={onGoBack} className={s.back_btn}><BsArrowLeftShort/></button>}
      {children ? {children} : <span>{title}</span>}
      <div className={s.bg}></div>
    </div>
  );
};

interface HeaderProps {
  children?: React.ReactNode;
  title: string
}

export default Header;
