import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/Login/SignUp";

function App() {
  return (
    <div className="App">
      {/* <SignUp /> */}

      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
