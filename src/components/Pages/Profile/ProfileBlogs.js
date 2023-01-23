import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import useMyBlog from "../../Utilites/useMyBlog";
import LoveBlog from "../LoveBlog.js/LoveBlog";
import MyBlogPost from "./MyBlogPost";

const ProfileBlogs = () => {
  const [user, loading] = useAuthState(auth);

  const [myBlog] = useMyBlog();

  const {
    data: MyPost,
    isLoading,
    error,
    refetch,
  } = useQuery("MyPost", () =>
    fetch(`${process.env.REACT_APP_PRO_URL}/MyPost/${user?.email}`).then(
      (res) => res.json()
    )
  );

  if (loading || isLoading) {
    return;
  }
  return (
    <div>
      <div className=" shadow-sm py-2 px-5 font-semibold border-[1px] ">
        <h1 className=" text-lg flex items-center gap-5">
          <span>
            <i class="fa-sharp fa-solid fa-book-open-reader"></i>
          </span>
          <span>My All Blog Post</span>
        </h1>
      </div>

      <div>
        {MyPost?.map((post) => (
          <LoveBlog post={post} refetch={refetch}></LoveBlog>
        ))}
      </div>
    </div>
  );
};

export default ProfileBlogs;
