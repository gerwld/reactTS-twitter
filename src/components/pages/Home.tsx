import React from "react";
import Header from "../UI/Header/Header";
import Navbar from "../UI/Navbar/Navbar";
import Sidebar from "../UI/Sidebar/Sidebar";
import Tweet from "../UI/Tweet/Tweet";
import MainPostTextarea from '../UI/MainPostTextarea/MainPostTextarea';

const Home = () => {
  return (
    <div className="home_content content_wrapper">
      <Navbar />
      <div className="home_group">
        <Feed />
        <Sidebar />
      </div>
    </div>
  );
};

const Feed = () => {
  return (
    <div className="feed_block">
      <Header>Home</Header>
      <MainPostTextarea/>
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
};

export default Home;
