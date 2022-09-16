import React from "react";
import { useState } from "react";
import pic from "./../../../../Images/149071.png";

const ProfileData = ({ myInfo, setUpProfile }) => {
  const { photoURL, displayName } = myInfo?.user;

  return (
    <div>
      {/* Heading Information*/}
      <div className=" relative border-[1px] px-3 py-3 grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
        {/* profile img */}
        <div className=" w-32 mx-auto ">
          <a href="/my-profile">
            <img
              src={photoURL || pic}
              alt=""
              className="rounded-full border-[1px] "
            />
          </a>
        </div>

        {/* my info */}
        <div className=" w-full">
          <h1 className=" text-xl font-bold md:text-left text-center">
            {displayName}
          </h1>
          <h1 className=" text-[16px] font-semibold md:text-left text-center">
            {myInfo?.Heading?.profileHeading || "Profile Heading None"}
          </h1>
          <div>
            <p
              className=" my-2 text-sm font-[400] md:text-left text-center
              "
            >
              {myInfo?.Heading?.profileBio || "Please Add Your Profile Bio"}
            </p>
          </div>
        </div>
        {/* update Button */}
        <div className=" absolute top-2 right-2">
          <button
            onClick={() => setUpProfile(true)}
            className=" border-[1px] px-2 py-1"
          >
            <i class="fa-solid fa-pen text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
