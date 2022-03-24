import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <NavLink to="/">
        <div className={s.logo}><img src="/logo.svg" alt="Logo" /></div>
      </NavLink>
      <nav className={s.main_nav}>
        <ul>
          <li><NavLink to="/home"><span>Home</span></NavLink></li>
          <li><NavLink to="/explore"><span>Explore</span></NavLink></li>
          <li><NavLink to="/notifications"><span>Notifications</span></NavLink></li>
          <li><NavLink to="/messages"><span>Messages</span></NavLink></li>
          <li><NavLink to="/bookmarks"><span>Bookmarks</span></NavLink></li>
          <li><NavLink to="/lists"><span>Lists</span></NavLink></li>
          <li><NavLink to="/profile"><span>Profile</span></NavLink></li>
          <li><NavLink to="/more"><span>More</span></NavLink></li>
        </ul>
        <button>Tweet</button>
      </nav>
      profile info
    </div>
  );
};

export default Navbar;
