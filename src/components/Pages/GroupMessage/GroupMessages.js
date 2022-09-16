import React from "react";
import { Link, Outlet } from "react-router-dom";
import GroupHistory from "./GroupHistory";

const GroupMessages = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="GroupMessage" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content w-full">
          {/* <!-- Page content here --> */}
          <div className="flex justify-between items-center border-[1px] w-full px-4 py-3 bg-gray-200   text-center font-semibold text-2xl ">
            <div className=" text-sm">
              <Link to="/">
                <button className=" text-sm">
                  <i class="fa-solid fa-arrow-left"></i> Go Home
                </button>
              </Link>
            </div>

            <div>
              <h1 className=" text-sm md:text-lg lg:text-xl">Group Messages</h1>
            </div>

            <div className=" text-sm">
              <label for="GroupMessage" class=" lg:hidden">
                <h1 className="">
                  <span>View All</span>
                  <span>
                    <i class="fa-solid fa-eye mx-1"></i>
                  </span>
                </h1>
              </label>
            </div>
          </div>

          <Outlet />
        </div>
        <div class="drawer-side ">
          <label for="GroupMessage" class="drawer-overlay "></label>
          <GroupHistory></GroupHistory>
        </div>
      </div>
    </div>
  );
};
export default GroupMessages;
