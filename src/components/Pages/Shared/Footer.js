import React from "react";

const Footer = () => {
  return (
    <nav class="navbar relative">
      <div className=" md:absolute top-0 left-0 w-full  md:w-32 bg-gray-100 p-3">
        <ul class="menu md:menu-vertical justify-end menu-horizontal text-lg gap-1 ">
          <li>
            <a href="/">
              <i class="fa-solid fa-house"></i>
            </a>
          </li>

          <li>
            <a href="/">
              <i class="fa-solid fa-user"></i>
            </a>
          </li>

          <li>
            <a href="/">
              <i class="fa-solid fa-heart"></i>
            </a>
          </li>

          <li>
            <a href="/">
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
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
