import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import MessageItems from "./MessageItems";
import auth from "./../../../firebase.init";
import useMyInformation from "../../Utilites/useMyInformation";
import UseMyConversion from "../../Utilites/UseMyConversion";

const MessageHistory = () => {
  const [user, loading] = useAuthState(auth);
  const [myData] = useMyInformation();
  const [myConversion] = UseMyConversion();

  // const {
  //   data: conversion,
  //   isLoading,
  //   error,
  //   refetch,
  // } = useQuery("conversion", () =>
  //   fetch(`https://ancient-eyrie-83116.herokuapp.com/getConversation/${myData?._id}`).then((res) =>
  //     res.json()
  //   )
  // );

  // if (loading || isLoading) {
  //   return;
  // }

  return (
    <div className=" p-4 border-[1px] border-gray-100 bg-gray-50 shadow-xl rounded-r-2xl lg:rounded-none mb-10 w-80">
      {/* History Title */}
      <div className=" rounded-lg py-1 my-3 text-lg flex flex-row justify-center gap-3 font-medium">
        <span>
          <i class="fa-solid fa-clock-rotate-left mx-1"></i>
        </span>
        <span> Message History</span>
      </div>

      {/* Search box */}
      <div className=" my-4">
        <input
          type="text"
          placeholder="Search Your Message"
          class={`pl-10  py-2 text-gray-500 text-[14px] font-semibold rounded-md input-bordered   border-[1px] focus:outline-none w-full `}
        />
      </div>
      <div>
        <ul className=" border-[1px] rounded-lg py-1 my-2 text-base flex flex-row justify-around">
          <li className=" hover:bg-blue-600 rounded-md hover:text-white py-1 px-2">
            <Link to="/messageHistory">
              <i class="fa-solid fa-message"></i>
            </Link>
          </li>

          <li className=" hover:bg-blue-600 rounded-md hover:text-white py-1 px-2">
            <Link to="/groupMessages">
              <i class="fa-solid fa-users"></i>
            </Link>
          </li>

          <li className=" hover:bg-blue-600 rounded-md hover:text-white py-1 px-2">
            <Link to="/messageHistory">
              <i class="fa-solid fa-gear"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div className=" flex flex-col items-start pl-5">
        {myConversion?.map((item) => (
          <MessageItems item={item} myData={myData}></MessageItems>
        ))}
      </div>
    </div>
  );
};

export default MessageHistory;
