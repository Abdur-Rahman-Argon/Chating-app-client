import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

const UpdateContact = ({ myInfo, setUpAddress }) => {
  const [user] = useAuthState(auth);
  const [address, setAddress] = useState(myInfo?.contact?.Address);
  const [phone, setPhone] = useState(myInfo?.contact?.phoneNumber);

  const updateContact = () => {
    fetch(`${process.env.REACT_APP_PRO_URL}/contact/${myInfo._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ phoneNumber: phone, Address: address }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUpAddress(false);
      });
    // console.log(relation);
  };

  return (
    <div>
      {/* Contact nfo  */}
      <div className=" border-[1px] my-2">
        <div className="bg-slate-200 flex justify-between items-center px-5 border-b-[1px]">
          <h1 className="  text-lg font-semibold">Contact Update:</h1>
          <div className="  ">
            <button
              onClick={updateContact}
              className=" border-[1px] px-2 py-[1px] m-[1px]"
            >
              <i class="fa-solid fa-check"></i>
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
            <>
              <div className=" my-1 flex gap-0 ">
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  type="text"
                  className=" input-bordered border-[1px] focus:outline-none px-2"
                />
              </div>
            </>
          </div>

          <div className=" my-3 text-[15px] font-semibold flex justify-between items-center ">
            <div>
              <span className="mx-1">
                <i class="fa-solid fa-phone"></i>
              </span>
              Phone:
            </div>
            <>
              <div className=" my-1 flex gap-0 ">
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  value={phone}
                  className=" input-bordered border-[1px] focus:outline-none px-2"
                />
              </div>
            </>
          </div>
          <div className="  text-[15px]  my-[3px] font-semibold flex justify-between items-center ">
            <div>
              <span className="mx-1">
                <i class="fa-solid fa-envelope"></i>
              </span>
              Email:
            </div>
            <div>
              <input
                type="text"
                value={user.email}
                className=" input-bordered border-[1px] focus:outline-none px-2"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateContact;
