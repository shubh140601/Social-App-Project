import React from 'react'
import Online from '../Online/Online'
import {Users} from '../../dummyData'
import './Rightbar.css'

const HomeRightbar=()=>{
  return(
    <>
    <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImage" />
          <span className="birthdayText">
            <b>John Doe</b> and <b>3 Other friends</b> have birthday today
           </span>
        </div>
        <img src="assets/addShubhDev.jpg" alt="" className="righbarAdd" />
        <h4 className='RightBarFriendList'>Online Friends</h4>
        <ul className="friendList">
          {
            Users.map((p)=>
              <Online key={p.id} data={p}/>
            )
          }
        </ul>
    </>
  )
}

const ProfileRightBar=()=>{
  return(
    <>
    <h4 className="RightbarTitle">User Information</h4>
      <div className="RightbarInfo">
        <div className="rightbarInfoItem">
          <span className="userInfoKey">City: </span>
          <span className="userValue">Surat</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="userInfoKey">State: </span>
          <span className="userValue">Gujarat</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="userInfoKey">In relatioship: </span>
          <span className="userValue">No</span>
        </div>
      </div>
      <h4 className="RightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpeg" alt="" className="friendImg" />
          <span className="friendName">Abcd Efgh</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.jpeg" alt="" className="friendImg" />
          <span className="friendName">Abcd Efgh</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="friendImg" />
          <span className="friendName">Abcd Efgh</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/4.jpeg" alt="" className="friendImg" />
          <span className="friendName">Abcd Efgh</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/5.jpeg" alt="" className="friendImg" />
          <span className="friendName">Abcd Efgh</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/6.jpeg" alt="" className="friendImg" />
          <span className="friendName">Abcd Efgh</span>
        </div>
      </div>
    </>
  )
}
const Rightbar = ({profile}) => {
  return (
    <div className='Rightbar'>
      <div className="RightbarWrapper">
        {profile ? <ProfileRightBar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}

export default Rightbar