import React from "react";
import GroupItems from "./GroupItems";
import group from "./../../../Images/group-create.png";
import { Link } from "react-router-dom";
import CreateNewConversation from "./CreateNewConversation";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useMyInformation from "../../Utilites/useMyInformation";
import { useQuery } from "react-query";
import useGroupConversion from "../../Utilites/useGroupConversion";

const GroupHistory = () => {
  const [open, setOpen] = useState(false);

  const [user, loading] = useAuthState(auth);
  const [myData] = useMyInformation();
  const [groupConversion] = useGroupConversion();

  // const {
  //   data: groupConversion,
  //   isLoading,
  //   error,
  //   refetch,
  // } = useQuery("groupConversion", () =>
  //   fetch(
  //     `https://ancient-eyrie-83116.herokuapp.com/getGroupConversation/${myData?._id}`
  //   ).then((res) => res.json())
  // );

  // if (loading || isLoading) {
  //   return;
  // }

  // if (groupConversion) {
  //   console.log(groupConversion);
  // }

  return (
    <div className=" p-4 border-[1px] border-gray-100 bg-gray-50 shadow-xl rounded-r-2xl lg:rounded-none w-80">
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
          placeholder="Search Your Group"
          class={`pl-10  py-2 text-gray-500 text-[14px] font-semibold rounded-md input-bordered   border-[1px] focus:outline-none w-full `}
        />
      </div>

      {/* Group Menu  */}
      <div>
        <ul className=" border-[1px] rounded-lg py-1 my-2 text-base flex flex-row justify-around">
          <li className=" hover:bg-blue-600 rounded-md hover:text-white py-1 px-2">
            <Link to="/groupMessages">
              <i class="fa-solid fa-users"></i>
            </Link>
          </li>

          <li className=" hover:bg-blue-600 rounded-md hover:text-white py-1 px-2">
            <Link to="/messageHistory">
              <i class="fa-solid fa-message"></i>
            </Link>
          </li>

          <li className=" hover:bg-blue-600 rounded-md hover:text-white py-1 px-2">
            <Link to="/">
              <i class="fa-solid fa-gear"></i>
            </Link>
          </li>
        </ul>
      </div>

      {/* Group Items  */}
      <div>
        <div>
          <label onClick={() => setOpen(true)} for="createNewGroup">
            <div className=" flex items-center gap-3 hover:bg-slate-200 my-4 cursor-pointer shadow-sm p-2 rounded-lg">
              <div className=" overflow-hidden border-[3px] border-gray-300 w-12 rounded-full">
                <img src={group} alt="" className=" bg-white  scale-75" />
              </div>
              <span className=" font-semibold"> Create a New Group</span>
            </div>
          </label>
        </div>

        {/* history */}
        {groupConversion?.map((item) => (
          <GroupItems item={item} myData={myData}></GroupItems>
        ))}
        {/* history */}
      </div>
      {open && <CreateNewConversation setOpen={setOpen} />}
    </div>
  );
};

export default GroupHistory;
