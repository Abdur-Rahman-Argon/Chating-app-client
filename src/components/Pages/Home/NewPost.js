import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useMyInformation from "../../Utilites/useMyInformation";
import pic from "./../../../Images/149071.png";

const NewPost = ({ setOpen }) => {
  const [user, loading] = useAuthState(auth);
  const [myData] = useMyInformation();

  const time = new Date().toString().slice(17, 21);
  const date = new Date().toString().slice(4, 16);

  const blogPost = (e) => {
    e.preventDefault();
    const myContent = e.target.blogContent.value;
    const myBlog = {
      userId: myData._id,
      email: user.email,
      date: time + " " + date,
      author: {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      },
      blog: myContent,
      likes: [],
      comments: [],
      Share: [],
    };

    fetch(`${process.env.REACT_APP_PRO_URL}/createPost`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myBlog),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setOpen(false);
      });

    console.log(myBlog);
  };

  return (
    <div className=" shadow-2xl bg-slate-100">
      <input type="checkbox" id="newPost" class="modal-toggle" />
      <div class="modal shadow-2xl ">
        <div className=" relative shadow-2xl bg-gray-100 border-[1px] px-5 py-10 lg:py-10 lg:px-20 rounded-2xl">
          <h1 className=" text-2xl font-bold my-2 lg:mb-8 text-center">
            Create a new Post?
          </h1>
          <form onSubmit={blogPost}>
            <div className=" flex flex-col md:flex-row items-center gap-1">
              <div className=" w-16 lg:w-24">
                <img
                  src={user.photoURL || pic}
                  alt=""
                  className=" rounded-full w-full"
                />
              </div>

              <div>
                <textarea
                  name="blogContent"
                  id="blogContent"
                  cols="30"
                  rows="2"
                  placeholder="Write Some Things"
                  class={`pl-5 bg-slate-50 shadow-2xl border-[1px]  py-5 text-gray-500 text-[16px] font-semibold rounded-lg focus:outline-none w-full `}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className=" px-16 py-2 md:px-4 lg:py-4 border-[1px] border-gray-300 font-semibold hover:bg-slate-200 text-xl rounded-lg"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
          <div
            onClick={() => setOpen(false)}
            className=" absolute right-5 top-3"
          >
            <button>
              <i class="fa-sharp fa-solid fa-xmark text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
