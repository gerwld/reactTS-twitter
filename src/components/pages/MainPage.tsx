import React from "react";
import { useState } from "react";
import Navbar from "../UI/Navbar/Navbar";
import Sidebar from "../UI/Sidebar/Sidebar";
import FeedBlock from '../UI/FeedBlock/FeedBlock';
import AuthRouter from '../AuthRouter';


const MainPage = () => {
  const [isAuth, setIsAuth] = useState(true);

  if(isAuth) return (
      <div className="home_content content_wrapper">
        <Navbar />
        <div className="home_group">
          <FeedBlock />
          <Sidebar />
        </div>
      </div>);
  return (
    <AuthRouter/>
  )
};

export default MainPage;
