import Topbar from "../../Components/Topbar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import Rightbar from "../../Components/Rightbar/Rightbar";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="Profile">
        <Sidebar />
        <div className="ProfileRight">
          <div className="ProfileRightTop">
            <div className="ProfileCover">
                <img src="assets/post/3.jpeg" alt="" className="ProfileCoverImg" />
                <img src="assets/person/Itsme1.jpeg" alt="" className="ProfileUserImg" />
            </div>
            <div className="ProfileInfo">
                <h4 className="ProfileUsername">Shubham Chaudhari</h4>
                <span className="ProfileDesc">Hello Its me Shubham</span>
            </div>
          </div>
          <div className="ProfileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
