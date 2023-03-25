import React from "react";
import { useState } from "react";
import Navbar from "../UI/Navbar/Navbar";
import Sidebar from "../UI/Sidebar/Sidebar";
import FeedBlock from '../UI/FeedBlock/FeedBlock';


const MainPage = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
      <div className="home_content content_wrapper">
        <Navbar />
        <div className="home_group">
          <FeedBlock />
          <Sidebar />
        </div>
      </div>);

};

export default MainPage;
