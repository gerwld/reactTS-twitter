import React, { useState, useEffect } from "react";

import Header from "../Header/Header";
import Tweet from "../Tweet/Tweet";
import Loader from "../Loader/Loader";
import Home from "./components/Home";
import TweetPage from "./components/TweetPage";

import { selectTweetsPost, selectTweetsLoadingStatus } from "../../../redux/selectors";
import { fetchTopics } from "../../../redux/actions/sidebar";
import { allRouteTitles, getTitleByLocation } from "../../../routes/routeTitle";

import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { changeTitle } from "../../../services/title";

const FeedBlock = () => {
 const dispatch = useDispatch();
 const [title, setTitle] = useState("Twitter");

 useEffect(() => {
  dispatch(fetchTopics);
 }, []);

 return (
  <div className="feed_block">
   <Header title={title} />

   <Routes>
    <Route path="/home/" element={<Home />} />
    <Route path="/home/tweet/:id" element={<TweetPage />} />
    <Route path="/sign" element={<Navigate to="/home" />} />
   </Routes>
   <ChangeTitle setTitle={setTitle} />
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

//For prevent whole re-render (useLocation causing it)
export const ChangeTitle = ({ setTitle }) => {
 const loc = useLocation().pathname;

 useEffect(() => {
  const title = getTitleByLocation(loc, allRouteTitles);
  changeTitle(title + " / Twitter");
  setTitle(title);
 }, [loc]);

 return <></>;
};

export default FeedBlock;
