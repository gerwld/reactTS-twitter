import React, { useEffect, useState } from "react";
import Header from "../UI/Header/Header";
import Navbar from "../UI/Navbar/Navbar";
import Sidebar from "../UI/Sidebar/Sidebar";
import Tweet from "../UI/Tweet/Tweet";
import MainPostTextarea from "../UI/MainPostTextarea/MainPostTextarea";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../redux/actions/post";
import { useSelector } from "react-redux";
import { selectTweetsPost, selectTweetsLoadingStatus } from "../../redux/selectors";
import Loader from "../UI/Loader/Loader";
import { fetchTopics } from "../../redux/actions/sidebar";
import { Routes, useLocation, useMatch } from "react-router-dom";
import { Route } from "react-router-dom";
import { allRouteTitles, getTitleByLocation } from "../../routes/routes";

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPosts);
    dispatch(fetchTopics);
  }, []);

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
  const loc = useLocation().pathname;
  const [title, setTitle] = useState("Home");

  useEffect(() => {
    setTitle(getTitleByLocation(loc, allRouteTitles));
  }, [loc]);

  return (
    <div className="feed_block">
      <Header>{title}</Header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainPostTextarea />
              <TweetsMap />
            </>
          }
        />
      </Routes>
    </div>
  );
};

const TweetsMap = () => {
  const tweets = useSelector(selectTweetsPost);
  const isLoading = useSelector(selectTweetsLoadingStatus);
  if (isLoading) return <Loader />;
  if (tweets) return tweets.map((tweet: any) => <Tweet key={tweet._id} {...tweet} />);
  return "";
};

export default Home;
