import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useUserData from "../../Utilites/useUserData";
import pic from "./../../../Images/149071.png";

const MessageItems = ({ item, myData }) => {
  const [userData, setUserData] = useState();
  const userId = item?.member?.find((d) => d !== myData?._id);

  useEffect(() => {
    if (userId) {
      fetch(`https://ancient-eyrie-83116.herokuapp.com/viewUser/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
        });
    }
  }, [userId]);

  // const [userData] = useUserData(userId);
  // console.log(userId, userData);
  return (
    <Link to={`/messages/messageBox/${item._id}`}>
      <div className=" my-4 cursor-pointer shadow-sm p-2 rounded-lg flex justify-center items-center gap-4 hover:bg-slate-50">
        <div className=" w-10">
          <img
            src={userData?.user?.photoURL || pic}
            alt=""
            className=" rounded-full w-full"
          />
        </div>
        <div>
          <h1 className=" flex justify-between items-center gap-1">
            <span className=" text-sm font-bold">
              {userData?.user?.displayName}
            </span>
            {/* <span className=" text-xs">12 May, 2022</span> */}
          </h1>
          {/* <p className=" mt-1 text-xs font-">
            Lorem ipsum dolor sit amet, elit. Assumenda ad non nemo.
          </p> */}
        </div>
      </div>
    </Link>
  );
};

export default MessageItems;
