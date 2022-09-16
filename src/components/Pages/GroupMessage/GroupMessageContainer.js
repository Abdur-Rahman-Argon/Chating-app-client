import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useMyInformation from "../../Utilites/useMyInformation";
import MyMessages from "../Message/MyMessages";
import SendGroupMessage from "./SendGroupMessage";

const GroupMessageContainer = () => {
  const { groupConversationId } = useParams();
  const [user, loading] = useAuthState(auth);
  const [myData] = useMyInformation();

  const {
    data: groupMessage,
    isLoading,
    error,
    refetch,
  } = useQuery("groupMessage", () =>
    fetch(
      `https://ancient-eyrie-83116.herokuapp.com/getGroupMessages/${groupConversationId}`
    ).then((res) => res.json())
  );

  if (loading || isLoading) {
    return;
  }

  const interval = setInterval(refetch(), 100);

  clearInterval(interval);

  return (
    <>
      <div className=" h-screen flex flex-col w-full">
        {/* top title menu */}

        {/*  all message content message */}
        <div className="h70 sm:h50 lg:h100 overflow-y-scroll px-5">
          {groupMessage?.length === 0 ? (
            <>
              <div>
                <h1> Open A conversation</h1>
              </div>
            </>
          ) : (
            <>
              {groupMessage?.map((message) => (
                <MyMessages key={message._id} message={message}></MyMessages>
              ))}
            </>
          )}
          {/*  */}
        </div>

        {/* send message field  */}
        <div className=" bg-slate-300  h-20 rounded-md  w-11/12 mx-auto my-2 bottom-0 px-5 py-2 shadow-sm border-[1px]">
          <SendGroupMessage
            conversationId={groupConversationId}
          ></SendGroupMessage>
        </div>
      </div>
    </>
  );
};

export default GroupMessageContainer;
