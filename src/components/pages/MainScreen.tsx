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
  return (
    <div className="feed_block">
      <Header/>
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
