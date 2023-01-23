import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import ProfileBlogs from "../Profile/ProfileBlogs";
import UserData from "./UserData";

const ViewProfile = () => {
  const [user, loading] = useAuthState(auth);

  const { userId } = useParams();

  const userEmail = userId;

  const {
    data: userInfo,
    isLoading,
    error,
    refetch,
  } = useQuery("myInfo", () =>
    fetch(`${process.env.REACT_APP_PRO_URL}/viewUser/${userEmail}`).then(
      (res) => res.json()
    )
  );

  if (isLoading || loading) {
    return;
  }
  return (
    <div className=" flex flex-col lg:flex-row justify-between items-start">
      <div className=" flex-1 w-full px-5 lg:px-0">
        {userInfo && <UserData userInfo={userInfo}></UserData>}
      </div>
      <div className=" mt-10 lg:mt-1 lg:w-5/12">
        <ProfileBlogs></ProfileBlogs>
      </div>
    </div>
  );
};

export default ViewProfile;
