import React from "react";

import pic from "./../../../Images/149071.png";

const Comment = ({ com }) => {
  return (
    <div className="my-3 flex items-center gap-2">
      <div className=" w-10">
        <img
          src={com.photoURL || pic}
          alt=""
          className=" rounded-full w-full"
        />
      </div>
      <div className=" w-full border-[1px] p-2 font-normal rounded-md">
        <p>
          {com.Comment} <br />
          <span className=" text-[12px] font-bold text-right">
            ({com.date})
          </span>
        </p>
      </div>
      <div>
        <button>
          <i class="fa-solid fa-ellipsis text-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default Comment;
