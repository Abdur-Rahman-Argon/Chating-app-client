import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import pic from "./../../../Images/149071.png";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import useMyInformation from "../../Utilites/useMyInformation";
import UseMyConversion from "../../Utilites/UseMyConversion";

const User = ({ user }) => {
  const [myData] = useMyInformation();
  const [myConversion] = UseMyConversion();

  const navigate = useNavigate();

  const image = user?.user?.photoURL;

  const existConversion = myConversion?.filter((con) =>
    con.member.find((id) => id === user?._id)
  );

  const createConversion = (id) => {
    // const cData = { senderId: _id, receiverId: id };
    const member = { senderId: myData._id, receiverId: user._id };
    if (existConversion.length < 1) {
      fetch(`${process.env.REACT_APP_PRO_URL}/createConversation`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(member),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          navigate(`/messages/messageBox/${result.insertedId}`);
        });
      console.log(member);
    } else {
      navigate(`/messages/messageBox/${existConversion[0]._id}`);
    }
  };

  return (
    <div className=" w-full my-5 bg-slate-50 py-2  shadow hover:bg-slate-100 hover:shadow-md rounded-3xl ">
      <div className=" flex flex-row justify-start pl-5 sm:pl-16 md:pl-20 pl-30 items-center gap-5">
        <div className=" w-16 md:w-20 ">
          <Link to={`/view-profile/${user?._id}`}>
            <img
              src={image || pic}
              alt=""
              className=" rounded-full w-full border-[1px] "
            />
          </Link>
        </div>
        <div className=" text-left">
          <h1 className=" font-bold"> {user?.user?.displayName}</h1>
          <h3>{user?.email} </h3>
        </div>
      </div>
    </div>
  );
};

export default User;
