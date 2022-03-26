import React, {useEffect} from "react";
import Header from "../UI/Header/Header";
import Navbar from "../UI/Navbar/Navbar";
import Sidebar from "../UI/Sidebar/Sidebar";
import Tweet from "../UI/Tweet/Tweet";
import MainPostTextarea from '../UI/MainPostTextarea/MainPostTextarea';
import { useDispatch } from 'react-redux';
import { fetchPosts } from "../../redux/actions/post";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [])
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
