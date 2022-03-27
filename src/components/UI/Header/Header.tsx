import React, {useState, useEffect} from "react";
import s from "./Header.module.css";
import { useLocation } from 'react-router-dom';
import { allRouteTitles, getTitleByLocation } from "../../../routes/routes";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Header: React.FC<HeaderProps> = ({ children }) => {
  const navigate = useNavigate();
  const loc = useLocation().pathname;
  const [title, setTitle] = useState("Home");
  const [isBtnBack, setBtn] = useState(false);

  useEffect(() => {
    const title = getTitleByLocation(loc, allRouteTitles);
    setTitle(title);
    setBtn(title === "Tweet");
  }, [loc]);

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
}

export default Header;
