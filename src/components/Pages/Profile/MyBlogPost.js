import React, { useState } from "react";
import pic from "./../../../Images/149071.png";

const MyBlogPost = () => {
  const [Love, setLove] = useState(false);

  const myLove = () => {
    setLove(!Love);
  };

  return (
    <div className="my-5 border-[1px] shadow-lg rounded-xl mx-2 py-1">
      <div className=" flex justify-between items-center  border-b-[1px]  px-10 w-full ">
        <a href="/view-profile/:userId">
          <div className=" my-2  flex justify-start gap-3 ">
            <div className=" w-8">
              <img src={pic} alt="" className=" w-full" />
            </div>
            <div>
              <h1 className=" flex justify-between items-center gap-1">
                <span className=" text-sm font-bold">Md. Abdur Rahman</span>
              </h1>
              <p className=" flex items-center justify-start gap-1 text-xs font-">
                <span>05.23 pm. 5 May, 2022.</span>
              </p>
            </div>
          </div>
        </a>
        <div>
          <button>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
        </div>
      </div>

      {/*  */}
      <div className=" py-2 px-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
          voluptates perspiciatis eum unde atque soluta fuga odit eos aliquid
          doloribus facilis totam laudantium quas error ex expedita possimus, in
          accusamus?{" "}
          {/* <span>
              <button className=" hover:bg-slate-300 px-5 py-1 rounded-lg">
                {" "}
                See more
              </button>
            </span> */}
        </p>
      </div>

      {/*  */}
      <div className="border-t-[1px] py-2  flex items-center justify-around">
        <div>
          <button
            onClick={myLove}
            className=" hover:bg-slate-300 px-5 py-1 rounded-lg"
          >
            <span>
              <i
                class={`fa-solid fa-heart mx-1 ${
                  Love ? "text-red-600" : "text-gray-500"
                }`}
              ></i>
            </span>
            <span
              class={` font-semibold ${
                Love ? "text-red-600" : "text-gray-500"
              }`}
            >
              {Love ? "Loved" : "Love"}
            </span>
          </button>
        </div>
        <div>
          <button className=" hover:bg-slate-300 px-5 py-1 rounded-lg">
            <span>
              <i class="fa-solid fa-comment mx-1"></i>
            </span>
            <span>Comment</span>
          </button>
        </div>
        <div>
          <button className=" hover:bg-slate-300 px-5 py-1 rounded-lg">
            <span>
              <i class="fa-sharp fa-solid fa-share mx-1"></i>
            </span>
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyBlogPost;
