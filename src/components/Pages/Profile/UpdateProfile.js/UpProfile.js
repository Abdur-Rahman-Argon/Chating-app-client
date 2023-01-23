import React from "react";
import { useState } from "react";
import pic from "./../../../../Images/149071.png";

const UpProfile = ({ myInfo, setUpProfile }) => {
  const { photoURL, displayName } = myInfo?.user;

  const [heading, setHeading] = useState(myInfo?.Heading?.profileHeading);
  const [bio, setBio] = useState(myInfo?.Heading?.profileBio);

  const saveData = () => {
    fetch(`${process.env.REACT_APP_PRO_URL}/Heading/${myInfo._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ profileHeading: heading, profileBio: bio }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUpProfile(false);
      });
  };

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
          <div className=" my-2 text-[16px] font-semibold md:text-left text-center">
            <input
              onChange={(e) => setHeading(e.target.value)}
              type="text"
              placeholder={"Profile Heading None"}
              value={heading}
              className=" input-bordered border-[1px] focus:outline-none px-2"
            />
          </div>
          <div>
            <div className=" my-2 text-sm font-[400] md:text-left text-center">
              <textarea
                name=""
                id=""
                cols="27"
                rows="2"
                onChange={(e) => setBio(e.target.value)}
                placeholder={"Profile Bio Empty"}
                value={bio}
                className=" input-bordered border-[1px] focus:outline-none px-2"
              ></textarea>
            </div>
          </div>
        </div>
        {/* update Button */}
        <div className=" absolute top-2 right-2">
          <button
            onClick={saveData}
            className=" border-[1px] hover:bg-slate-200 px-2 py-1"
          >
            <i class="fa-solid fa-check"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpProfile;
