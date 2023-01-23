import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import MyInformation from "../Home/MyInformation";

import LoveBlog from "./LoveBlog";

const LoveBlogs = () => {
  const [user, loading] = useAuthState(auth);

  const {
    data: lovePost,
    isLoading,
    error,
    refetch,
  } = useQuery("lovePost", () =>
    fetch(`${process.env.REACT_APP_PRO_URL}/lovePost/${user?.email}`).then(
      (res) => res.json()
    )
  );

  if (loading || isLoading) {
    return;
  }
  return (
    <div className=" flex justify-between items-start">
      <div className=" flex-1">
        <div className=" mt-1 shadow-sm py-2 px-5 font-semibold border-[1px] ">
          <h1 className=" text-lg flex items-center gap-5">
            <span>
              <i class="fa-solid fa-bookmark"></i>
            </span>
            <span>Favourite Blog</span>
          </h1>
        </div>

        <div>
          {lovePost?.map((post) => (
            <LoveBlog post={post}></LoveBlog>
          ))}
        </div>
      </div>
      {/*  */}
      <div className=" w-5/12 hidden md:block">
        <MyInformation></MyInformation>
      </div>
    </div>
  );
};

export default LoveBlogs;
