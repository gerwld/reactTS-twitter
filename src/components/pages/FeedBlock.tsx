import React from "react";

import Header from "../UI/Header/Header";
import Navbar from "../UI/Navbar/Navbar";
import Sidebar from "../UI/Sidebar/Sidebar";
import Tweet from "../UI/Tweet/Tweet";
import MainPostTextarea from "../UI/MainPostTextarea/MainPostTextarea";
import Loader from "../UI/Loader/Loader";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/post";
import { selectTweetsPost, selectTweetsLoadingStatus } from "../../redux/selectors";
import { fetchTopics } from "../../redux/actions/sidebar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Navigate } from 'react-router';

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPosts);
  }, []);

  return (
    <>
      <MainPostTextarea />
      <TweetsMap />
    </>
  );
};

export const FeedBlock = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTopics);
  }, []);
  return (
    <div className="feed_block">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
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

// export default Home;
