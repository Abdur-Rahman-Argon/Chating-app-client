import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import pic from "./../../../Images/149071.png";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import useMyInformation from "../../Utilites/useMyInformation";
import UseMyConversion from "../../Utilites/UseMyConversion";

const User = ({ user }) => {
  const [oldConversion, setOldConversion] = useState();
  const navigate = useNavigate();
  const [myData] = useMyInformation();

  const image = user?.user?.photoURL;

  const [myConversion] = UseMyConversion();

  useEffect(() => {
    myConversion?.find((con) => {
      const conId = con?.member?.find((d) => d == user?._id);
      if (conId) {
        setOldConversion(con);
        // console.log(con);
      } else {
        // console.log("none");
        // setOldConversion();
      }
    });
  }, [user, myConversion]);

  //  const userId = item?.member?.find((d) => d !== myData?._id);

  // const owner = message?.senderId !== myData?._id;

  const createConversion = () => {
    // console.log(oldConversion);
    if (oldConversion) {
      navigate(`/messages/messageBox/${oldConversion._id}`);
    } else {
      console.log("none");
      const member = { senderId: myData._id, receiverId: user._id };
      fetch(`http://localhost:5000/createConversation`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(member),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          navigate(`/messages/messageBox/${result.insertedId}`);
        });
    }
  };

  return (
    <div className=" w-full my-5 bg-slate-50 py-2  shadow hover:bg-slate-100 hover:shadow-md rounded-3xl pl-10 md:pl-20">
      <button onClick={createConversion}>
        <div className=" flex justify-left gap-5 items-center">
          <div className=" w-16 md:w-20 ">
            <Link to={`/view-profile/${user?._id}`}>
              <img
                src={image || pic}
                alt=""
                className=" rounded-full w-full border-[1px] "
              />
            </Link>
          </div>
          <div className=" text-left">
            <h1 className=" font-bold"> {user?.user?.displayName}</h1>
            <h3>{user?.email} </h3>
          </div>
        </div>
      </button>
    </div>
  );
};

export default User;
