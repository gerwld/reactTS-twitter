import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Header, Tweet, Loader, Home, TweetPage } from "components";

import { selectTweetsPost, selectTweetsLoadingStatus } from "../../store/selectors";
import { fetchTopics } from "../../store/actions/sidebar";
import { allRouteTitles, getTitleByLocation } from "../../routes/routeTitle";
import { changeTitle } from "../../services/title";

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
