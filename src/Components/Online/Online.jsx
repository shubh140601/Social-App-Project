import React from 'react'

const Online = (data) => {
    console.log(data);
  return (
    <div>
        <li className="righbarFriend">
            <div className="rightbarProfile">
              <img src={data.data.profilePicture} alt="" className="rightbarProfileImg" />
              <span className="righbarOnline"></span>
            </div>
            <span className="rightbarUsername">{data.data.username}</span>
          </li>
    </div>
  )
}

export default Online