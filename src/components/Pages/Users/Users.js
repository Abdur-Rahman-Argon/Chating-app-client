import React from "react";
import User from "./User";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useQuery } from "react-query";
import MyInformation from "../Home/MyInformation";
import useAllUsers from "../../Utilites/useAllUsers";

const Users = () => {
  const [user, loading] = useAuthState(auth);

  const [users] = useAllUsers();

  // const {
  //   data: users,
  //   isLoading,
  //   error,
  //   refetch,
  // } = useQuery("orders", () =>
  //   fetch(`${process.env.REACT_APP_PRO_URL}/users`).then((res) => res.json())
  // );

  // if (loading || isLoading) {
  //   return;
  // }

  return (
    <div className=" flex justify-between items-start">
      {/* user */}
      <div className=" flex-1">
        <div className=" shadow-sm py-2 px-5 font-semibold border-[1px] ">
          <h1 className=" text-lg flex items-center gap-5">
            <span>
              <i class="fa-solid fa-user-group"></i>
            </span>
            <span>All Users of Chatting-App</span>
          </h1>
        </div>
        <div className=" px-5 w-11/12 mx-auto">
          {users?.map((user) => (
            <User key={user._id} user={user}></User>
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

export default Users;
