import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";

function App() {
  return (
    <Router>
    <Topbar />
    <div className="container">
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/user" element={<UserList />}/>
        <Route path="/user/:userid" element={<User />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
