import React from "react";
import useAllUsers from "./../../Utilites/useAllUsers";

import { useState } from "react";
import UserList from "./UserList";
import useMyInformation from "../../Utilites/useMyInformation";

const CreateNewConversation = ({ setOpen }) => {
  const [users] = useAllUsers();
  const [myData] = useMyInformation();
  const [err, setErr] = useState();
  const [members, setMembers] = useState([]);
  //   const members = [];
  // console.log(members);

  const createGroup = (e) => {
    e.preventDefault();
    const groupName = e.target.groupName.value;
    const group = {
      members: members,
      admins: myData._id,
      groupName: groupName,
    };
    if (members.length < 2) {
      setErr("Please Add Minimum 2 Member");
    } else if (!groupName) {
      setErr("Please set your Group name");
    } else {
      //   console.log(group);
      fetch(`${process.env.REACT_APP_PRO_URL}/createGroupConversation`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(group),
      })
        .then((res) => res.json())
        .then((result) => {
          // console.log(result);
          setOpen(false);
          setErr("");
        });
    }
  };

  return (
    <div className=" shadow-2xl bg-slate-100">
      <input type="checkbox" id="createNewGroup" class="modal-toggle" />
      <div class="modal h-screen shadow-2xl py-10 w-full ">
        <div className=" w-10/12 text-center h-full relative shadow-2xl bg-gray-100 border-[1px] px-5 py-5 rounded overflow-x-scroll">
          <div>
            <h1 className=" my-3 text-sm font-bold">
              Create a new conversation
            </h1>

            {/* create group */}
            <form onSubmit={createGroup}>
              <div className=" border-b-[1px] border-t-[1px]  py-2 px-0 flex justify-center items-center gap-2">
                <div>
                  <input
                    type="text"
                    name="groupName"
                    id="groupName"
                    placeholder="Please set group name"
                    class={`px-2  py-1 text-gray-500 text-[12px] font- rounded-md input-bordered text-center   border-[1px] focus:outline-none w-full `}
                  />
                </div>
                <div>
                  <button className=" border-[1px] border-gray-300 text-gray-500 p-[6px] font-bold rounded-md text-xs cursor-pointer">
                    Create
                  </button>
                </div>
              </div>
            </form>

            <p className=" text-red-500 font-semibold text-xs">{err}</p>

            {/* search user */}
            <div className=" border-b-[px] py-2 my-2">
              <input
                type="text"
                placeholder="Search a user"
                class={`px-10  py-2 text-gray-500 text-[14px] rounded-md input-bordered text-center border-[1px] focus:outline-none w-full `}
              />
            </div>

            {/* all users */}
            <div>
              {users?.map((user) => (
                <UserList
                  user={user}
                  setMembers={setMembers}
                  members={members}
                ></UserList>
              ))}
            </div>
          </div>

          {/* close modal  */}
          <button
            onClick={() => setOpen(false)}
            className=" fixed top-7 right-5 text-red-500 font-bold"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewConversation;
