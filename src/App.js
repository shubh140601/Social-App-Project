import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
