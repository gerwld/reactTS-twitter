import React from 'react'
import Header from '../UI/Header/Header'
import Navbar from '../UI/Navbar/Navbar'
import Sidebar from '../UI/Sidebar/Sidebar';
import Tweet from '../UI/Tweet/Tweet';

const Home = () => {
  return (
    <div className="home_content content_wrapper">
      <Navbar/>
      <Feed/>
      <Sidebar />
    </div>
  )
}

const Feed = () => {
  return (
    <div className="feed_block">
      <Header>Home</Header>
      <Tweet/>
    </div>
  )
}

export default Home