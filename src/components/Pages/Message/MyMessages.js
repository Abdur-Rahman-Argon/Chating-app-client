import React from "react";
import { Link } from "react-router-dom";
import useMyInformation from "../../Utilites/useMyInformation";
import pic from "./../../../Images/149071.png";

const MyMessages = ({ message }) => {
  const [myData] = useMyInformation();

  const owner = message?.senderId !== myData?._id;

  return (
    <div>
      <div
        className={` w-8/12 my-4 ${owner ? "mr-auto" : "ml-auto"}  flex ${
          owner ? " flex-row" : " flex-row-reverse"
        } justify-start gap-2  items-start`}
      >
        <div>
          <Link to={`/view-profile/${message?.senderId}`}>
            <div className=" mt-1 w-8">
              <img
                src={message?.senderInfo?.userImage || pic}
                alt=""
                className="rounded-full w-full"
              />
            </div>
          </Link>
        </div>
        <div className="">
          <div className={` ${owner ? "mr-auto" : "ml-auto"}`}>
            <p
              className={` ${
                owner ? "mr-auto" : "ml-auto"
              } w-full  rounded-lg shadow bg-gray-300 p-2`}
            >
              {message?.textMessage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMessages;
