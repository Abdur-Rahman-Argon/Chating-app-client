import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import ProfileBlogs from "../Profile/ProfileBlogs";
import UserData from "./UserData";
import useMyInformation from "../../Utilites/useMyInformation";
import UseMyConversion from "../../Utilites/UseMyConversion";

const ViewProfile = () => {
  const [user, loading] = useAuthState(auth);
  const [myConversion] = UseMyConversion();
  const [myData] = useMyInformation();

  const { userId } = useParams();
  const navigate = useNavigate();

  const {
    data: userInfo,
    isLoading,
    error,
    refetch,
  } = useQuery("myInfo", () =>
    fetch(`${process.env.REACT_APP_PRO_URL}/viewUser/${userId}`).then((res) =>
      res.json()
    )
  );

  if (isLoading || loading) {
    return;
  }

  const existConversion = myConversion?.filter((con) =>
    con.member.find((id) => id === user?._id)
  );

  const createConversion = (id) => {
    // const cData = { senderId: _id, receiverId: id };
    const member = { senderId: myData._id, receiverId: user._id };
    if (existConversion.length < 1) {
      fetch(`${process.env.REACT_APP_PRO_URL}/createConversation`, {
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
      console.log(member);
    } else {
      navigate(`/messages/messageBox/${existConversion[0]._id}`);
    }
  };

  return (
    <div className=" flex flex-col lg:flex-row justify-between items-start">
      <div className=" flex-1 w-full px-5 lg:px-0">
        {userInfo && <UserData userInfo={userInfo}></UserData>}
      </div>
      <div className=" mt-10 lg:mt-1 lg:w-5/12">
        <ProfileBlogs></ProfileBlogs>
      </div>
    </div>
  );
};

export default ViewProfile;
