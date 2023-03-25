import React from "react";
import { useState } from "react";
import {FeedBlock, Navbar, Sidebar} from "components";

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
