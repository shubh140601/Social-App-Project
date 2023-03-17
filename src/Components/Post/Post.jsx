import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Post.css'
import { Users } from '../../dummyData';


const Post = (data) => {
  const[like,SetLike]=useState(data.data.like)
  const[islike,setIsLike]=useState(false)
  
  const handleLike=()=>{
    SetLike(islike?like-1:like+1)
    setIsLike(!islike)
  }
  return (
    <div className='PostContainer'>
        <div className="postWrapper">
              <div className="postTop">
                <div className="postTopLeft">
                  <img src={Users.filter((p)=>p.id===data.data.userId)[0].profilePicture} alt="" className="posttopimg" />
                  <div className="postTopName">{Users.filter((p)=>p.id===data.data.userId)[0].username}</div>
                  <div className="postTopTime">{data.data.date}</div>
                </div>
                <div className="postTopRight">
                  <MoreVertIcon/> 
                </div>
              </div>
              <div className="postCenter">
                <span className="posttext">{data.data?.desc}</span>
                <img src={data.data.photo} alt="" className="postImage" />
              </div>
              <div className="postBottom">
                <div className="postBottomLeft">
                  <img src="/assets/like.png" alt="" className="likeIcons" onClick={handleLike} />
                  <img src="/assets/heart.png" alt="" className="likeIcons"  onClick={handleLike} />
                  <span className="likeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                  <span className="postcomment">{data.data.comment} comments</span>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Post