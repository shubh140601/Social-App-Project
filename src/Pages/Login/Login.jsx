import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <div className="loginWrapper">
        <div className="Loginleft">
          <h3 className="LoginLogo">ShubhSocial</h3>
          <span className="LoginDesc">
            Connect With friends and the world around you on ShubhSocial
          </span>
        </div>
        <div className="LoginRight">
            <div className="loginbox">
                <input type="text" className="loginInput" placeholder="Email address or Phone Number" />
                <input type="text" className="loginInput" placeholder="Password" />
                <button className="LoginBtn">Log in</button>
                <span className="ForgottenPass">Forgotten password?</span>
                <hr/>
                <button className="LoginRegisterBtn">Create New Account</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
