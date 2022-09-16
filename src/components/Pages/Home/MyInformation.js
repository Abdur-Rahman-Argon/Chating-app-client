import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useMyBlog from "../../Utilites/useMyBlog";
import useMyInformation from "../../Utilites/useMyInformation";

import pic from "./../../../Images/149071.png";
import MyBlog from "./MyBlog";
import NewPost from "./NewPost";

const MyInformation = () => {
  const [myData] = useMyInformation();
  const [myBlog] = useMyBlog();

  const [open, setOpen] = useState(false);

  const user = myData?.user;

  return (
    <div className=" my-1 px-1 w-full ">
      <div className=" relative border-[1px] px-3 py-3 grid grid-cols-1 rounded-xl shadow-2xl  gap-2 items-center">
        {/* profile img */}
        <div className=" w-32 lg:w-36 mx-auto ">
          <Link to="/my-profile">
            <img
              src={user?.photoURL || pic}
              alt=""
              className="rounded-full border-[1px] "
            />
          </Link>
        </div>

        {/* my info */}
        <div className=" text-center ">
          <h1 className=" text-xl font-bold  text-center">
            {user?.displayName}
          </h1>
          <h1 className=" text-[16px] font-semibold  text-center">
            {user?.profileHeading || "Heading None"}
          </h1>
          <div>
            <p
              className=" my-2 mx-8 text-sm font-[400] text-center
              "
            >
              {user?.profileBio || "Bio None"}
            </p>
          </div>
        </div>
        {/* update Button */}
        <div className=" top-2 right-2">
          <Link to="/my-profile">
            <button className=" w-full rounded-md bg-slate-200 border-[1px] px-2 py-1 font-medium">
              Update Information
            </button>
          </Link>
        </div>

        {/* Contact info  */}
        <div className="my-2">
          <div className="  rounded-md flex justify-between items-center px-5 border-[1px] bg-slate-200">
            <h1 className=" text-lg font-semibold">Contact Information:</h1>
            <div className="  ">
              <button className=" font-semibold m-[1px]">Add New</button>
            </div>
          </div>
          <div className=" px-4  py-2">
            <div className="  text-[15px]  my-[2px] font-semibold flex  items-center ">
              <span className=" mx-[6px]">
                <i class="fa-solid fa-location-dot mx-3"></i>
              </span>

              <span>Ponut, Kalai, JoypurHat</span>
            </div>
            <div className=" text-[15px]  my-[2px] font-semibold flex  items-center ">
              <span className="mx-1">
                <i class="fa-solid fa-phone mx-3"></i>
              </span>

              <span>+880175464</span>
            </div>
            <div className="  text-[15px]  my-[2px] font-semibold flex  items-center ">
              <span className="mx-1">
                <i class="fa-solid fa-envelope mx-3"></i>
              </span>
              <span>abdur@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Blog Post */}
        <div className="my-2">
          <div className="  rounded-md flex justify-between items-center px-5 border-[1px] bg-slate-200">
            <h1 className=" text-lg font-semibold">Recent Blog Post:</h1>
            <div className="  ">
              <label
                onClick={() => setOpen(true)}
                for="newPost"
                className=" font-semibold m-[1px]"
              >
                Create New Post
              </label>
            </div>
          </div>

          <div>
            {myBlog?.map((blog) => (
              <MyBlog blog={blog}></MyBlog>
            ))}
          </div>
        </div>
      </div>
      {open && <NewPost setOpen={setOpen} />}
    </div>
  );
};

export default MyInformation;
