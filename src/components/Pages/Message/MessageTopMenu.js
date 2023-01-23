import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseMyConversion from "../../Utilites/UseMyConversion";
import useMyInformation from "../../Utilites/useMyInformation";
import pic from "./../../../Images/149071.png";

const MessageTopMenu = ({ conversationId }) => {
  const [myConversion] = UseMyConversion();
  const [userData, setUserData] = useState();
  const [myData] = useMyInformation();

  useEffect(() => {
    const con = myConversion?.find((d) => d._id === conversationId);
    const userId = con?.member?.find((d) => d !== myData?._id);
    if (userId) {
      fetch(`${process.env.REACT_APP_PRO_URL}/viewUser/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
        });
    }
  }, [conversationId, myConversion]);

  return (
    <div className=" h-16 flex justify-between items-center w-full border-[1px] shadow-sm py-1 px-10">
      <Link to={`/view-profile/${userData?._id}`}>
        <div className=" my-4  flex justify-start gap-2 ">
          <div className=" w-8">
            <img
              src={userData?.user?.photoURL || pic}
              alt=""
              className=" rounded-full w-full"
            />
          </div>
          <div>
            <h1 className=" flex justify-between items-center gap-1">
              <span className=" text-sm font-bold">
                {userData?.user?.displayName}
              </span>
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
        {" "}
        {/*  option menu */}
        <button>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </div>
    </div>
  );
};

export default MessageTopMenu;
