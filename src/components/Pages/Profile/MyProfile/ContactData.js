import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

const ContactData = ({ myInfo, setUpAddress }) => {
  const [user] = useAuthState(auth);
  return (
    <div>
      {/* Contact nfo  */}
      <div className=" border-[1px] my-2">
        <div className="bg-slate-200 flex justify-between items-center px-5 border-b-[1px]">
          <h1 className=" text-lg font-semibold">Contact Information:</h1>
          <div className="  ">
            <button
              onClick={() => setUpAddress(true)}
              className=" border-[1px] px-2 py-[1px] m-[1px]"
            >
              <i class="fa-solid fa-pen text-sm"></i>
            </button>
          </div>
        </div>
        <div className=" px-4  py-2">
          <div className="  text-[15px]  my-[2px] font-semibold flex justify-between items-center ">
            <div>
              <span className=" mx-[6px]">
                <i class="fa-solid fa-location-dot"></i>
              </span>
              <span>Address:</span>
            </div>
            <div>{myInfo?.contact?.Address}</div>
          </div>
          <div className=" text-[15px]  my-[2px] font-semibold flex justify-between items-center ">
            <div>
              <span className="mx-1">
                <i class="fa-solid fa-phone"></i>
              </span>
              Phone:
            </div>
            <div>{myInfo?.contact?.phoneNumber}</div>
          </div>
          <div className="  text-[15px]  my-[2px] font-semibold flex justify-between items-center ">
            <div>
              <span className="mx-1">
                <i class="fa-solid fa-envelope"></i>
              </span>
              Email:
            </div>
            <div>{user.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactData;
