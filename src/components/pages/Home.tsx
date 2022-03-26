import React from "react";
import Header from "../UI/Header/Header";
import Navbar from "../UI/Navbar/Navbar";
import Sidebar from "../UI/Sidebar/Sidebar";
import Tweet from "../UI/Tweet/Tweet";
import MainPostTextarea from '../UI/MainPostTextarea/MainPostTextarea';
import { useDispatch } from 'react-redux';
import { fetchPosts } from "../../redux/actions/post";
import { useSelector } from 'react-redux';
import { selectTweets } from '../../redux/selectors';

const Home = () => {
  const dispatch = useDispatch();
  
  // React.useEffect(() => {
  //   dispatch(fetchPosts());
  //   console.log(tweets);
  // }, [])

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
  const tweets = useSelector(selectTweets);
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
