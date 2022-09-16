import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useQuery } from "react-query";
import pic from "./../../../Images/149071.png";
import ProfileBlogs from "./ProfileBlogs";
import Profile from "./Profile";
import useMyInformation from "../../Utilites/useMyInformation";
import ContactData from "./MyProfile/ContactData";
import EducationalData from "./MyProfile/EducationalData";
import SocialData from "./MyProfile/SocialData";
import PersonalData from "./MyProfile/PersonalData";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const myEmail = user?.email;

  const [myData] = useMyInformation();

  // if (myInfo) {
  //   console.log(myInfo, myEmail);
  // }

  return (
    <div className=" flex flex-col md:flex-row justify-between items-start">
      <div className=" w-full  flex-1 mt-1 px-5 md:px-1">
        {myData && <Profile myInfo={myData}></Profile>}
      </div>

      {/*  */}
      <div className=" mt-10 md:mt-1 px-4 md:px-0  lg:flex-3 md:w-5/12 lg:w-5/12">
        <ProfileBlogs></ProfileBlogs>
      </div>
      {/*  */}
    </div>
  );
};

export default MyProfile;
