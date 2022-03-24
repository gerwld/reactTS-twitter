import React from 'react'
import Header from '../UI/Header/Header'
import Navbar from '../UI/Navbar/Navbar'

const Home = () => {
  return (
    <div className="home_content content_wrapper">
      <Navbar/>
      <Feed/>
    </div>
  )
}

const Feed = () => {
  return (
    <div className="feed_block">
      <Header>123123</Header>
    </div>
  )
}

export default Home