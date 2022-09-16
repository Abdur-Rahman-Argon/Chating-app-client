import React from "react";
import pic from "./../../../Images/149071.png";

const CreatePost = () => {
  return (
    <div>
      <div className=" flex items-center border-[1px] p-3">
        <div className=" w-20">
          <img src={pic} alt="" className=" w-full" />
        </div>
        <div className=" flex items-center text-center justify-around gap-5 lg:mx-4 ">
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              placeholder="Write Some Things"
              class={`pl-5  py-1 text-gray-500 text-[16px] font-semibold rounded-md focus:outline-none w-full `}
            ></textarea>
          </div>
          <div>
            <button className=" px-4 py-2 border-[1px] rounded-lg">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
