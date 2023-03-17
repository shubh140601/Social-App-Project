import React from "react";
import "./Friends.css";

const Friends = (data) => {
  return (
    <div>
      <li className="sidebarFriend">
        <img src={data.data.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{data.data.username}</span>
      </li>
    </div>
  );
};

export default Friends;
