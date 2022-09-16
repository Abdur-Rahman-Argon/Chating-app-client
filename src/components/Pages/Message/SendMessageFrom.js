import React from "react";
import { useForm } from "react-hook-form";
import useMyInformation from "../../Utilites/useMyInformation";

const SendMessageFrom = ({ conversationId }) => {
  const [myData] = useMyInformation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const textMessage = data.messageData;
    const senderInfo = {
      userId: myData._id,
      userName: myData.user.displayName,
      userImage: myData.user.photoURL,
    };

    const sendTime = new Date();
    const message = {
      conversionId: conversationId,
      senderId: myData._id,
      senderInfo,
      textMessage,
      sendTime,
    };

    fetch(`https://ancient-eyrie-83116.herokuapp.com/createMessage`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(message);
        reset();
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex items-center text-center justify-around gap-5 lg:mx-4">
          <div className=" w-10 relative text-left">
            <i class="fa-regular fa-image text-xl sm:text-5xl"></i>
            <input
              type="file"
              name=""
              id=""
              className=" absolute top-2 w-12 scale-150 opacity-0"
            />
          </div>

          {/*  */}
          <div className=" w-10/12">
            <input
              name="messageData"
              id="messageData"
              placeholder="Write Your Message"
              {...register("messageData", { required: true })}
              class={`px-2  py-4 text-gray-500 text-[14px] font-semibold rounded-md input-bordered   border-[1px] focus:outline-none w-full `}
            />
          </div>

          {/*  */}
          <div className=" ">
            <button
              type="submit"
              className="sm:w-20  sm:border-[1px] px-1 py-[6px] rounded-sm cursor-pointer"
            >
              <i class="fa-regular fa-paper-plane text-2xl sm:text-3xl"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendMessageFrom;
