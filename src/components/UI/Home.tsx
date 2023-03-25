import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../store/actions/posts";

import MainPostTextarea from "./postInput/PostInput";
import { TweetsMap } from "./FeedBlock";

const Home = () => {
 const d = useDispatch();
 useEffect(() => {
  d(fetchPosts);
 }, []);

 return (
  <>
   <MainPostTextarea />
   <TweetsMap />
  </>
 );
};

export default Home;
