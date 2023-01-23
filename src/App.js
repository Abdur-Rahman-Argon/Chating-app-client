import { Route, Routes } from "react-router-dom";
import "./App.css";

import GroupMessageContainer from "./components/Pages/GroupMessage/GroupMessageContainer";
import GroupMessages from "./components/Pages/GroupMessage/GroupMessages";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/Login/SignUp";
import LoveBlogs from "./components/Pages/LoveBlog.js/LoveBlogs";
import MessageBox from "./components/Pages/Message/MessageBox";
import MessageHistory from "./components/Pages/Message/MessageHistory";
import Messages from "./components/Pages/Message/Messages";
import OpenConversion from "./components/Pages/Message/OpenConversion";
import MyProfile from "./components/Pages/Profile/MyProfile";
import Users from "./components/Pages/Users/Users";
import ViewProfile from "./components/Pages/ViewProfile/ViewProfile";
import NavBar from "./components/Shared/NavBar";
import RequireAuth from "./components/Shared/RequireAuth";

function App() {
  return (
    <div>
      {/* <Footer /> */}

      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <NavBar />
            </RequireAuth>
          }
        >
          <Route index element={<Home />}></Route>
          <Route
            path="all-users"
            element={
              <RequireAuth>
                <Users />
              </RequireAuth>
            }
          ></Route>
          <Route path="my-profile" element={<MyProfile />}></Route>
          <Route path="view-profile/:userId" element={<ViewProfile />}></Route>

          <Route path="lovePost" element={<LoveBlogs />}></Route>
          <Route path=" profileMessage" element={<MessageHistory />}></Route>
          <Route path="messageHistory" element={<MessageHistory />}></Route>

          <Route path="messages" element={<Messages />}>
            <Route index element={<OpenConversion />}></Route>
            <Route
              path="messageBox/:conversationId"
              element={<MessageBox />}
            ></Route>
          </Route>
          <Route path="groupMessages" element={<GroupMessages />}>
            <Route index element={<OpenConversion />}></Route>
            <Route
              path="group-messageBox/:groupConversationId"
              element={<GroupMessageContainer />}
            ></Route>
          </Route>
        </Route>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
