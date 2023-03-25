import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CreatePostPopup } from "components";
import { NavbarLinks } from "./NavbarLinks";

const Navbar = () => {
 const [isPopupShow, setPopup] = useState(false);

 const onTweetPopup = () => {
  setPopup(true);
 };
 return (
  <div className="navbar_wrapper">
   <div className="navbar">
    <div className="navbar_sect">
     <NavLink to="/home" className="logo">
      <img src="/img/logo.svg" alt="Logo" draggable={false} />
     </NavLink>
     <nav className="main_nav">
      <NavbarLinks />
      <button onClick={onTweetPopup} className="btn_tweet">
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

export default Navbar;
