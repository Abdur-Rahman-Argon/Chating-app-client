import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import pic from "./../../../Images/149071.png";
import NewPost from "./NewPost";

const Post = () => {
  const [user, loading] = useAuthState(auth);

  const [open, setOpen] = useState(false);

  return (
    <div className=" flex items-center w-full gap-3 px-5 my-5">
      <div className=" w-16">
        <Link to="/my-profile">
          <img
            src={user?.photoURL || pic}
            alt=""
            className=" w-full rounded-full"
          />
        </Link>
      </div>
      <div className=" w-full">
        <label onClick={() => setOpen(true)} for="newPost">
          <h1 className=" border-[1px] py-4 w-full rounded-3xl bg-gray-200 text-sm font-medium text-slate-400 text-left px-10">
            Create A New Post
          </h1>
        </label>
      </div>
      {open && <NewPost setOpen={setOpen} />}
    </div>
  );
};

export default Post;
