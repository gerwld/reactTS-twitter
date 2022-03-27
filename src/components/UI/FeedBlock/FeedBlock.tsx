import React from "react";

import Header from "../Header/Header";
import Tweet from "../Tweet/Tweet";
import Loader from "../Loader/Loader";
import Home from "./contents/Home";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectTweetsPost, selectTweetsLoadingStatus } from "../../../redux/selectors";
import { fetchTopics } from "../../../redux/actions/sidebar";

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Navigate } from 'react-router';

const FeedBlock = () => {
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

export const TweetsMap = () => {
  const tweets = useSelector(selectTweetsPost);
  const isLoading = useSelector(selectTweetsLoadingStatus);
  if (isLoading) return <Loader />;
  if (tweets) return tweets.map((tweet: any) => <Tweet key={tweet._id} {...tweet} />);
  return "Error";
};

export default FeedBlock;
