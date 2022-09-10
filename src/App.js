import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/Login/SignUp";
import Footer from "./components/Pages/Shared/Footer";
import NavBar from "./components/Pages/Shared/NavBar";
import Users from "./components/Pages/Users/Users";

function App() {
  return (
    <div>
      {/* <Footer /> */}

      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />}></Route>
          <Route path="users" element={<Users />}></Route>
        </Route>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
