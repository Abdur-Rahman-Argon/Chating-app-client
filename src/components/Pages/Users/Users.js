import React from "react";
import User from "./User";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useQuery } from "react-query";

const Users = () => {
  const [user, loading] = useAuthState(auth);

  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/users`).then((res) => res.json())
  );

  if (loading || isLoading) {
    return;
  }

  return (
    <div className="">
      <div className=" shadow-sm py-2 px-5 font-semibold border-[1px] ">
        <h1 className=" text-lg flex items-center gap-5">
          <span>
            <i class="fa-solid fa-user-group"></i>
          </span>
          <span>All Users of Chatting-App</span>
        </h1>
      </div>
      <div className=" w-80 mx-auto">
        {users?.map((user) => (
          <User key={user._id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
