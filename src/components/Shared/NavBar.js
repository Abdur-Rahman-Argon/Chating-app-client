import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";

import pic from "./../../Images/149071.png";
import auth from "../../firebase.init";
const NavBar = () => {
  const [user, loading] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
  const menu = (
    <>
      <li>
        <Link to="/my-profile" className=" p-0">
          <img
            src={user?.photoURL || pic}
            alt=""
            className=" w-6 md:w-10 rounded-full border-[1px] mx-auto "
          />
        </Link>
      </li>
      <li>
        <Link to="/" className=" text-center p-2 sm:p-4">
          <i class="fa-solid fa-house"></i>
        </Link>
      </li>

      {/* <li>
         <Link to="/"  className=" text-center p-2 sm:p-4">
         <i class="fa-solid fa-user-group"> </i> 
        </Link>
      </li> */}

      <li>
        <Link to="/all-users" className=" text-center p-2 sm:p-4">
          <i class="fa-solid fa-user"></i>
        </Link>
      </li>

      <li>
        <Link to="/" className=" text-center p-2 sm:p-4">
          <i class="fa-solid fa-bell"></i>
        </Link>
      </li>

      <li>
        <Link to="/groupMessages" className=" text-center p-2 sm:p-4">
          <i class="fa-solid fa-users"></i>
        </Link>
      </li>
      <li>
        <Link to="/messages" className=" text-center p-2 sm:p-4">
          <i class="fa-solid fa-message"></i>
        </Link>
      </li>

      <li>
        <Link to="/lovePost/" className=" text-center p-2 sm:p-4">
          <i class="fa-solid fa-heart"></i>
        </Link>
      </li>
      {user && (
        <li>
          <button onClick={logout} className=" cursor-pointer p-2 md:p-4">
            <i class="fa-sharp fa-solid fa-circle-xmark"></i>
          </button>
        </li>
      )}
    </>
  );

  return (
    <div class="drawer drawer-mobile text-center">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <div class="flex-none lg:hidden block bg-gray-400 ">
          <ul class="menu menu-horizontal w-full justify-center items-center text-center text-sm  md:text-2xl gap-2 md:gap-5">
            {menu}
          </ul>
        </div>

        {/* <!-- Page content here --> */}
        <div className=" flex justify-around items-start gap-0">
          <div className=" flex-1">
            <Outlet />
          </div>
        </div>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-full lg:w-32 bg-gray-400  text-2xl text-center gap-1">
          {menu}
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
