import React from "react";
import { useState } from "react";
import pic from "./../../../Images/149071.png";

const UserList = ({ user, members, setMembers }) => {
  const [add, setAdded] = useState(false);

  const memberAdd = (id) => {
    setAdded(true);
    const newUser = [id];
    const addUser = newUser.concat(members);
    setMembers(addUser);
  };

  return (
    <div className=" flex justify-between gap-5 my-2 items-center border-[1px] p-[2px] rounded-md">
      <div className=" w-8 ">
        <img
          src={user?.user?.photoURL || pic}
          alt=""
          className=" rounded-full w-full border-[1px] "
        />
      </div>
      <div className=" flex-1 text-left">
        <h1 className=" text-left text-xs font-medium">
          {user?.user?.displayName}
        </h1>
      </div>
      {/* Add button */}
      <button
        disabled={add}
        onClick={() => memberAdd(user._id)}
        className=" border-[1px] border-gray-300 text-gray-500 px-[6px] py-[2px] font- rounded text-xs cursor-pointer m-1"
      >
        {add ? "Added" : "Add"}
      </button>
    </div>
  );
};

export default UserList;
