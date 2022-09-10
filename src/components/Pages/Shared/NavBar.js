import React from "react";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  const menu = (
    <>
      <li>
        <a href="/profile">
          <img
            src="https://scontent.fdac4-1.fna.fbcdn.net/v/t39.30808-6/297237556_131844519546545_4846200459611462752_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEaqOMwCGjfbpWt5hYOV6SutuMEbdhysk624wRt2HKyTt-a4Q28axIcP1dO1AcSsAat1Z08v-EXjutePspZ_I_Z&_nc_ohc=_YZib5hj9fUAX_Bdgxd&_nc_zt=23&_nc_ht=scontent.fdac4-1.fna&oh=00_AT_7Ye9juVoCKDqBck1k0idbGOPTEQvIg3fOZ6BY3Ia9Zg&oe=6321BE49"
            alt=""
            className=" w-10 rounded-full border-[1px] "
          />
        </a>
      </li>
      <li>
        <a href="/">
          <i class="fa-solid fa-house"></i>
        </a>
      </li>

      {/* <li>
        <a href="/">
          <i class="fa-solid fa-user"></i>
        </a>
      </li> */}

      <li>
        <a href="/users">
          <i class="fa-solid fa-user-group"></i>
        </a>
      </li>
      <li>
        <a href="/">
          <i class="fa-solid fa-users"></i>
        </a>
      </li>
      <li>
        <a href="/">
          <i class="fa-solid fa-message"></i>
        </a>
      </li>

      <li>
        <a href="/">
          <i class="fa-solid fa-heart"></i>
        </a>
      </li>
    </>
  );

  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <div class="flex-none lg:hidden block bg-gray-400 ">
          <ul class="menu menu-horizontal w-full justify-center items-center  md:text-2xl gap-1 md:gap-5">
            {menu}
          </ul>
        </div>

        {/* <!-- Page content here --> */}
        <div>
          <Outlet />
        </div>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-full lg:w-32 bg-gray-400  text-2xl gap-1">
          {menu}
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
