import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useMyInformation from "../../Utilites/useMyInformation";
import pic from "./../../../Images/149071.png";
import MessageTopMenu from "./MessageTopMenu";
import MyMessages from "./MyMessages";
import SendMessageFrom from "./SendMessageFrom";

const MessageBox = () => {
  const { conversationId } = useParams();
  const [user, loading] = useAuthState(auth);
  const [myData] = useMyInformation();
  const scrollRef = useRef();

  const {
    data: myMessage,
    isLoading,
    error,
    refetch,
  } = useQuery("myMessage", () =>
    fetch(
      `${process.env.REACT_APP_PRO_URL}/getMessages/${conversationId}`
    ).then((res) => res.json())
  );

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [myMessage]);

  if (loading || isLoading) {
    return;
  }

  const interval = setInterval(refetch(), 100);

  clearInterval(interval);

  return (
    <>
      <div className=" h-screen flex flex-col w-full">
        {/* top title menu */}
        <MessageTopMenu conversationId={conversationId}></MessageTopMenu>

        {/*  all message content message */}
        <div className="h70 sm:h50 lg:h100 overflow-y-scroll px-5">
          {/*  */}

          {myMessage?.map((message) => (
            <div ref={scrollRef}>
              <MyMessages key={message._id} message={message}></MyMessages>
            </div>
          ))}

          {/*  */}
        </div>

        {/* send message field  */}
        <div className=" bg-slate-300  h-20 rounded-md  w-11/12 mx-auto my-2 bottom-0 px-5 py-2 shadow-sm border-[1px]">
          <SendMessageFrom conversationId={conversationId}></SendMessageFrom>
        </div>
      </div>
    </>
  );
};

export default MessageBox;
