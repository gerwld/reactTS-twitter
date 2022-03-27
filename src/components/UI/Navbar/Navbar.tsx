import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import CreatePostPopup from "../CreatePostPopup/CreatePostPopup";

const navbarLinks = [
  {
    path: "/home",
    name: "home",
    icon: "/img/assets/nav/1.svg",
    actIcon: "/img/assets/nav/active/1.svg",
  },
  {
    path: "/explore",
    name: "explore",
    icon: "/img/assets/nav/2.svg",
    actIcon: "/img/assets/nav/active/2.svg",
  },
  {
    path: "/notifications",
    name: "notifications",
    icon: "/img/assets/nav/3.svg",
    actIcon: "/img/assets/nav/active/3.svg",
  },
  {
    path: "/messages",
    name: "messages",
    icon: "/img/assets/nav/4.svg",
    actIcon: "/img/assets/nav/active/4.svg",
  },
  {
    path: "/bookmarks",
    name: "bookmarks",
    icon: "/img/assets/nav/5.svg",
    actIcon: "/img/assets/nav/active/5.svg",
  },
  {
    path: "/lists",
    name: "lists",
    icon: "/img/assets/nav/6.svg",
    actIcon: "/img/assets/nav/active/6.svg",
  },
  {
    path: "/profile",
    name: "profile",
    icon: "/img/assets/nav/7.svg",
    actIcon: "/img/assets/nav/active/7.svg",
  },
];

const Navbar = () => {
  const [isPopupShow, setPopup] = useState(false);

  const onTweetPopup = () => {
    setPopup(true);
  };
  return (
    <div className={s.navbar_wrapper}>
      <div className={s.navbar}>
        <div className={s.navbar_sect}>
          <NavLink to="/home" className={s.logo}>
            <img src="/img/logo.svg" alt="Logo" draggable={false} />
          </NavLink>

          <nav className={s.main_nav}>
            <NavbarLinks links={navbarLinks} />
            <button onClick={onTweetPopup} className={s.btn_tweet}>
              Tweet
            </button>
          </nav>
        </div>
        <div>profile info</div>
      </div>
      {isPopupShow && <CreatePostPopup setCreatePost={setPopup} />}
    </div>
  );
};

const NavbarLinks = ({ links }) => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.path}>
          <NavLink to={link.path}>
            {({ isActive }) => (
              <span className={s.link_content}>
                <div className={s.icon}>
                  <img src={isActive ? link.actIcon : link.icon} />
                </div>
                <span className={isActive ? s.active : ""}>{link.name}</span>
              </span>
            )}
          </NavLink>
        </li>
      ))}
      <li key={"more_button"}>
        <span className={s.link_content}>
          <div className={s.icon}>
            <img src="/img/assets/nav/8.svg" alt="more" />
          </div>
          <span>More</span>
        </span>
      </li>
    </ul>
  );
};

export default Navbar;
