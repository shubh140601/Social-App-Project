import React from 'react'
import Friends from '../Friends/Friends';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import './Sidebar.css'
import {Users} from '../../dummyData'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className="sidebarwrapper">
          <ul className="sidebarlist">
            <li className="sidebarlistItem">
              <RssFeedIcon/>
              <span className="sidebarlistItemtext">Feed</span>
            </li>
            <li className="sidebarlistItem">
              <ChatIcon/>
              <span className="sidebarlistItemtext">Chats</span>
            </li>
            <li className="sidebarlistItem">
              <ChatIcon/>
              <span className="sidebarlistItemtext">Chats</span>
            </li>
            <li className="sidebarlistItem">
              <PlayCircleIcon/>
              <span className="sidebarlistItemtext">Video</span>
            </li>
            <li className="sidebarlistItem">
              <GroupIcon/>
              <span className="sidebarlistItemtext">Groups</span>
            </li>
            <li className="sidebarlistItem">
              <BookmarkIcon/>
              <span className="sidebarlistItemtext">Bookmarks</span>
            </li>
            <li className="sidebarlistItem">
              <HelpOutlineIcon/>
              <span className="sidebarlistItemtext">Questions</span>
            </li>
            <li className="sidebarlistItem">
              <WorkOutlineIcon/>
              <span className="sidebarlistItemtext">Jobs</span>
            </li>
            <li className="sidebarlistItem">
              <EventIcon/>
              <span className="sidebarlistItemtext">Events</span>
            </li>
            <li className="sidebarlistItem">
              <SchoolIcon/>
              <span className="sidebarlistItemtext">Courses</span>
            </li>
          </ul>
          <button className='SidebarBtn'>Show More</button>
          <hr className='sidebarHr' />
          <ul className="sidebarFriendList">
            {
              Users.map((u)=>(
                <Friends data={u}/>
              ))
            }
          </ul>
      </div>
    </div>
  )
}

export default Sidebar