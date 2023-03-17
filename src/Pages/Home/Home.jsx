import React from 'react'
import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Rightbar from '../../Components/Rightbar/Rightbar'
import './Home.css'

const Home = () => {
  return (
    <>
        <Topbar/>
        <div className="HomeContainer">
          <Sidebar/>
          <Feed/>
          <Rightbar/>
        </div>
    </>
  )
}

export default Home