import React from "react";
import { Link } from "react-router-dom";
import pic from "./../../../Images/149071.png";

const GroupMBox = () => {
  return (
    <div>
      <div className=" relative w-full">
        <div className=" flex justify-between items-center w-full border-[1px] shadow-sm py-1 px-10">
          <Link to="/view-profile/:userId">
            <div className=" my-4  flex justify-start gap-2 ">
              <div className=" w-8">
                <img src={pic} alt="" className=" w-full" />
              </div>
              <div>
                <h1 className=" flex justify-between items-center gap-1">
                  <span className=" text-sm font-bold">Md. Abdur Rahman</span>
                </h1>
                <p className=" flex items-center justify-start gap-1 text-xs font-">
                  <span>
                    <i class="fa-solid fa-circle text-xs"></i>
                  </span>
                  <span>Active Now</span>
                </p>
              </div>
            </div>
          </Link>
          <div>
            <button>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>
        </div>

        {/*  message*/}
        <div></div>

        {/*  */}
        <div className=" fixed  w-full lg:w-8/12 my-5 bottom-0 px-5 py-4 shadow-sm border-[1px]">
          <form>
            <div className=" flex items-center text-center justify-around gap-5 lg:mx-4">
              <div className=" w-10 relative text-left">
                <i class="fa-regular fa-image text-xl sm:text-5xl"></i>
                <input
                  type="file"
                  name=""
                  id=""
                  className=" absolute top-2 w-12 scale-150 opacity-0"
                />
              </div>

              {/*  */}
              <div className=" w-10/12">
                <input
                  placeholder="Write Your Message"
                  class={`pl-10  py-4 text-gray-500 text-[14px] font-semibold rounded-md input-bordered   border-[1px] focus:outline-none w-full `}
                />
              </div>

              {/*  */}
              <div className=" sm:w-20  sm:border-[1px] px-1 py-[6px] rounded-sm">
                <button type="submit">
                  <i class="fa-regular fa-paper-plane text-2xl sm:text-3xl"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GroupMBox;
