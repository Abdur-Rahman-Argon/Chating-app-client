import React from "react";
import { Link } from "react-router-dom";
import pic from "./../../../Images/149071.png";

const GroupItems = ({ item, myData }) => {
  return (
    <Link to={`/groupMessages/group-messageBox/${item._id}`}>
      <div className=" my-4 cursor-pointer shadow-sm p-2 rounded-lg flex justify-start pl-10 items-center gap-4 hover:bg-slate-100">
        <div className=" w-10">
          <img src={pic} alt="" className=" w-full" />
        </div>
        <div>
          <h1 className=" flex justify-between items-center gap-1">
            <span className=" text-sm font-bold">{item?.groupName}</span>
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default GroupItems;
