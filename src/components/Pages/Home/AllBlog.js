import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Blog from "./Blog";

const AllBlog = () => {
  const [user, loading] = useAuthState(auth);

  const {
    data: allPost,
    isLoading,
    error,
    refetch,
  } = useQuery("allPost", () =>
    fetch(`${process.env.REACT_APP_PRO_URL}/allPost`).then((res) => res.json())
  );

  if (loading || isLoading) {
    return;
  }
  return (
    <div>
      {allPost?.map((post) => (
        <Blog key={post._id} post={post} refetch={refetch}></Blog>
      ))}
    </div>
  );
};

export default AllBlog;
