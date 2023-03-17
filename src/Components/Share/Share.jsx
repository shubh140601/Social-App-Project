import React from 'react'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import PlaceIcon from '@mui/icons-material/Place';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import './Share.css'

const Share = () => {
  return (
    <div className='ShareContainer'>
        <div className="shareWrapper">
          <div className="shareTop">
            <img src="/assets/person/Itsme1.jpeg" alt="sharetopimg" className='sharetopImg' />
            <input type="text" placeholder="What's in your mind Shubham" className="sharetopSearch" />
          </div>
          <hr className='shareHr'/>
          <div className="sharebottom">
              <div className="shareOptions">
                <div className="shareOption">
                  <PermMediaIcon htmlColor='red' className='shareIcons'/>
                  <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                  <LabelIcon htmlColor='blue' className='shareIcons'/>
                  <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                  <PlaceIcon htmlColor='green' className='shareIcons'/>
                  <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                  <EmojiEmotionsIcon htmlColor='yellow' className='shareIcons'/>
                  <span className="shareOptionText">Feelings</span>
                </div>
              </div>
              <button className="ShareBtn">Share</button>
          </div>
        </div>
    </div>
  )
}

export default Share