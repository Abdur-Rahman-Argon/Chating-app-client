import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import pic from "./../../../Images/149071.png";

const MyBlog = ({ blog }) => {
  const [user, loading] = useAuthState(auth);
  return (
    <div className=" my-5 px-3 py-1 rounded-md border-[1px] shadow  flex justify-between items-center gap-3  ">
      <div className="flex justify-start items-center gap-3 ">
        <div className=" w-8">
          <img
            src={user?.photoURL || pic}
            alt=""
            className=" w-full rounded-full"
          />
        </div>
        <h1 className=" flex justify-between items-center gap-1">
          <span className=" text-sm font-bold">Md. Abdur Rahman</span>
        </h1>
        <p className=" flex items-center justify-start gap-1 text-xs font-">
          <span>{blog.date}</span>
        </p>
      </div>
      <button className=" font-semibold m-[1px]">View Post</button>
    </div>
  );
};

export default MyBlog;
