import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useMyInformation from "../../Utilites/useMyInformation";
import Comment from "../Home/Comment";
import pic from "./../../../Images/149071.png";

const LoveBlog = ({ post, refetch }) => {
  const [Love, setLove] = useState(false);
  const [openComment, setOpenComment] = useState(false);
  const [viewComment, setViewComment] = useState(false);

  const [user, loading] = useAuthState(auth);

  const [myData] = useMyInformation();

  const like = post?.likes?.length;
  const CommentsNumber = post?.comments?.length;
  const CommentsList = post?.comments;
  const Share = post?.Share?.length;
  const allLikes = post?.likes;
  const myLikes = allLikes?.find((L) => L?.userId === myData?._id);

  useEffect(() => {
    if (myLikes) {
      setLove(true);
    }
  }, [post, myLikes]);

  const time = new Date().toString().slice(17, 21);
  const date = new Date().toString().slice(4, 16);

  const myComment = (e) => {
    e.preventDefault();
    const comment = {
      date: time + " " + date,
      userId: myData._id,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      Comment: e.target.talk.value,
    };
    fetch(`https://ancient-eyrie-83116.herokuapp.com/commentAdd/${post?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        refetch();
      });

    // console.log(comment);
  };

  return (
    <div className="my-5 border-[1px] shadow-lg rounded-xl mx-2 py-1">
      <div className=" flex justify-between items-center  border-b-[1px]  px-10 w-full ">
        <a href="/view-profile/:userId">
          <div className=" my-2  flex justify-start gap-3 ">
            <div className=" w-8">
              <img
                src={post?.author?.photoURL || pic}
                alt=""
                className=" rounded-full w-full"
              />
            </div>
            <div>
              <h1 className=" flex justify-between items-center gap-1">
                <span className=" text-sm font-bold">
                  {post?.author?.displayName}
                </span>
              </h1>
              <p className=" flex items-center justify-start gap-1 text-xs font-">
                <span>{post?.date}</span>
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
          {post?.blog}
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
            disabled={Love}
            className=" hover:bg-slate-300 px-5 py-1 rounded-lg"
          >
            <span>({like})</span>
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
          <button
            onClick={() => setOpenComment(!openComment)}
            className=" hover:bg-slate-300 px-5 py-1 rounded-lg"
          >
            <span>({CommentsNumber})</span>
            <span>
              <i class="fa-solid fa-comment mx-1"></i>
            </span>
            <span>Comment</span>
          </button>
        </div>
        <div>
          <button className=" hover:bg-slate-300 px-5 py-1 rounded-lg">
            <span>({Share})</span>
            <span>
              <i class="fa-sharp fa-solid fa-share mx-1"></i>
            </span>
            <span>Share</span>
          </button>
        </div>
      </div>

      {openComment && (
        <>
          <div className="border-t-[1px] py-5 px-4">
            <div className=" flex justify-center items-center gap-1">
              <div className=" w-10">
                <img
                  src={user.photoURL || pic}
                  alt=""
                  className=" rounded-full w-full"
                />
              </div>
              <div className=" w-full">
                <form onSubmit={myComment}>
                  <div className=" w-full flex items-center gap-0">
                    <input
                      type="text"
                      name="talk"
                      id="talk"
                      placeholder="Write Some Things"
                      class={`px-2 w-full bg-slate-50 shadow-2xl border-[1px]  py-2 text-gray-500 text-[16px] font-medium  rounded-l-lg focus:outline-none`}
                    />

                    <input
                      type="submit"
                      value="submit"
                      className=" border-[1px] hover:bg-slate-100 rounded-r-lg font-semibold py-2 px-3 border-gray-200"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div>
              <div className=" flex justify-between my-2 font-semibold">
                <span>Total Comments({CommentsNumber})</span>
                <button onClick={() => setViewComment(!viewComment)}>
                  View All Comments
                </button>
              </div>
              {viewComment && (
                <div className="border-t-[1px] py-2 px-5">
                  {CommentsList?.map((com) => (
                    <Comment com={com}></Comment>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LoveBlog;
