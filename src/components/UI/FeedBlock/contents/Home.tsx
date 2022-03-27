import React from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../../../redux/actions/post";

import MainPostTextarea from "../../MainPostTextarea/MainPostTextarea";
import { TweetsMap } from "../FeedBlock";

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

export default Home;
