import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Topbar.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="TopbarContainer">
      <div className="TopbarLeft">
        <Link to="/" style={{textDecoration:'none'}}>
          <span className="toplogo">ShubhSocial</span>
        </Link>
      </div>
      <div className="TopbarCenter">
        <div className="SearchBar">
          <SearchIcon className="Searchicon" />
          <input
            type="text"
            placeholder="Search for Friend, Post or Video"
            className="SearchBarInput"
          ></input>
        </div>
      </div>
      <div className="TopbarRight">
        <div className="TopBarLinks">
          <span className="topbarlink">HomePage</span>
          <span className="topbarlink">TimeLine</span>
        </div>
        <div className="TopbarIcons">
          <div className="TopbarIconItem">
            <PersonIcon />
            <span className="topiconbadge">2</span>
          </div>
          <div className="TopbarIconItem">
            <ChatIcon />
            <span className="topiconbadge">5</span>
          </div>
          <div className="TopbarIconItem">
            <NotificationsIcon />
            <span className="topiconbadge">6</span>
          </div>
        </div>
        <Link to="/Profile">
          <img src="/assets/person/Itsme1.jpeg" alt="" className="topbarimg" />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
