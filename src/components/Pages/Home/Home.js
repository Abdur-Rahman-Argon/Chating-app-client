import React from "react";
import AllBlog from "./AllBlog";
import CreatePost from "./CreatePost";
import MyInformation from "./MyInformation";
import Post from "./Post";

const Home = () => {
  return (
    <div>
      <div className=" flex justify-between items-start">
        <div className=" w-full relative flex-1 mx-5">
          <div className="">
            <Post />
          </div>

          <div>
            <AllBlog />
          </div>
        </div>

        {/* My information */}
        <div className=" w-5/12 hidden md:block">
          <MyInformation />
        </div>
      </div>
    </div>
  );
};

export default Home;
