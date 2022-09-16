import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profile from "./../../../Images/149071.png";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
// import Loading from "../Shared/Loading";
import auth from "./../../../firebase.init";

const SignUp = () => {
  const [imgUrl, setImgUrl] = useState(profile);
  const [imageUrl, setImageUrl] = useState();
  // const [fromData, setFromData] = useState();
  const [Name, setName] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [gender, setGender] = useState(false);
  const [passError, setPassError] = useState(false);
  const [passFocus, setPassFocus] = useState(false);
  const [passCFocus, setPassCFocus] = useState(false);

  const [createUserWithEmailAndPassword, CrUser, CLoading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, upError] = useUpdateProfile(auth);

  const [user, loading] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  if ((loading, CLoading)) {
    return;
  }

  const imageStorageKey = "2380d2dfbb3a1a216d57453cbd4c3837";

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImgUrl(URL.createObjectURL(file));

    // const image = file;
    // console.log(image);
    const formData = new FormData();
    formData.append("image", file);
    // setFromData(formData);

    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("image", result);
        setImageUrl(result.data.display_url);
      });
  };

  const onSubmit = async (data) => {
    // console.log(data);

    const DateOfBirth = data.date;
    const Gander = data.gender;
    const email = data.userEmail;
    const displayName = data.userName;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    const user = {
      email,
      DateOfBirth,
      Gander,
      photoURL: imageUrl,
      displayName,
    };

    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);

      await updateProfile({
        displayName: displayName,
        photoURL: imageUrl,
      });

      await fetch(`https://ancient-eyrie-83116.herokuapp.com/users/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setPassError("");
        });
    }
  };

  return (
    <div className=" shadow-2xl w-96 md:w-[500px] mx-auto rounded-xl  px-10 py-5 my-2 ">
      <div className=" mt- text-center">
        <div>
          <h2 class=" mb-8 text-3xl font-bold ">Please Register</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className=" text-gray-500 ">
          <div class=" my-6">
            <div class="w-36 mb-8 mx-auto relative">
              <div class="avatar w-36 h-36 mx-auto ">
                <img src={imgUrl} className="rounded-full" alt="" />
              </div>
              <div className="absolute bottom-14 right-8 w-16">
                <i class="fa-solid fa-camera ml-7 text-gray-400 text-[32px] absolute"></i>
                <input
                  type="file"
                  onChange={onImageChange}
                  className="absolute w-full lg:scale-150 opacity-0"
                />
              </div>
            </div>

            <div class="div relative">
              <input
                type="text"
                onFocus={() => setName(true)}
                onBlurCapture={() => setName(false)}
                placeholder="User Name"
                {...register("userName", { required: true })}
                class={`pl-10 py-2 text-gray-500 text-[16px] font-semibold rounded-md input-bordered   border-2 focus:outline-none focus:border-primary  w-full ${
                  errors.userName?.type === "required"
                    ? "border-red-600"
                    : "border-gray-400"
                }`}
              />
              <div
                class={`${
                  errors.userName?.type ? "text-red-600" : "border-gray-400"
                } absolute top-2 left-3 `}
              >
                <i
                  class={`fas fa-user text-[16px] ${Name && " text-primary"} ${
                    errors.userName?.type === "required" && "text-red-600"
                  }`}
                ></i>
              </div>
            </div>
          </div>

          {/*  */}
          <div class=" my-6">
            <div class="div relative">
              <input
                type="email"
                onFocus={() => setEmailFocus(true)}
                onBlurCapture={() => setEmailFocus(false)}
                placeholder="User Email"
                {...register("userEmail", { required: true })}
                class={`pl-10 py-2 text-gray-500 text-[16px] font-semibold rounded-md input-bordered   border-2 focus:outline-none focus:border-primary  w-full ${
                  errors.userEmail?.type ? "border-red-600" : "border-gray-400"
                }`}
              />

              <div
                class={`${
                  errors.userEmail?.type ? "text-red-600" : "border-gray-400"
                } absolute top-2 left-3 `}
              >
                <i
                  class={` fa-sharp fa-solid fa-envelope text-[16px] ${
                    emailFocus && " text-primary"
                  }  ${
                    errors.userEmail?.type === "required" && "text-red-600"
                  }`}
                ></i>
              </div>
            </div>
          </div>

          {/*  */}
          <div
            class={`flex gap-2 items-center  my-4   p-2 text-gray-500 text-[16px] font-semibold rounded-md input-bordered   border-2 focus:outline-none focus:border-primary  w-full ${
              errors.gender?.type ? "border-red-600" : "border-gray-400"
            }`}
          >
            <label
              htmlFor=""
              className=" ml-1 mr-5 text-gray-600 text-sm lg:text-lg font-bold "
            >
              <i
                class={`fa-solid fa-venus-mars  text-[16px] ${
                  gender && " text-primary"
                }  ${errors.gender?.type === "required" && "text-red-600"}`}
              ></i>
            </label>
            <input
              type="radio"
              name="gender"
              {...register("gender", { required: true })}
              id="Male"
              value="Male"
              class="  "
            />
            Male
            <input
              type="radio"
              name="gender"
              {...register("gender", { required: true })}
              id="Female"
              value="Female"
              class=" "
            />
            Female
            <input
              type="radio"
              name="gender"
              {...register("gender", { required: true })}
              id="Custom"
              value="Custom"
              class=" "
            />
            Custom
          </div>

          {/* Date of Birth  */}
          <div
            class={`flex items-center justify-between gap-2 my-2 p-2 text-gray-500 text-[12px] font-medium rounded-md input-bordered   border-2 focus:outline-none focus:border-primary  w-full ${
              errors?.Date ? "border-red-600" : "border-gray-400"
            }`}
          >
            <label
              htmlFor=""
              className=" flex-1 text-gray-500 text-base text-left font-medium "
            >
              Date Of Birth
            </label>

            <input
              type="date"
              name="date"
              id="date"
              {...register("date")}
              class={` flex-1 pl-10 py-2 text-gray-500 text-[16px] font-semibold rounded-md input-bordered   border-2 focus:outline-none focus:border-primary  w-full ${
                errors.password?.type === "required"
                  ? "border-red-600"
                  : "border-gray-400"
              }`}
            />

            {/*  */}
          </div>

          {/*  */}
          <div class=" mt-5 mb-5">
            <div class="div relative">
              <input
                type="password"
                onFocus={() => setPassFocus(true)}
                onBlurCapture={() => setPassFocus(false)}
                placeholder="Type Password"
                {...register("password", { required: true })}
                class={`pl-10 py-2 text-gray-500 text-[16px] font-semibold rounded-md input-bordered   border-2 focus:outline-none focus:border-primary  w-full ${
                  errors.password?.type === "required"
                    ? "border-red-600"
                    : "border-gray-400"
                }`}
              />
              <div
                class={`${
                  errors.password?.type ? "text-red-600" : "border-gray-400"
                } absolute top-2 left-3 `}
              >
                <i
                  class={`fas fa-lock text-[16px] ${
                    passFocus && " text-primary"
                  } ${errors.password?.type === "required" && "text-red-600"}`}
                ></i>
              </div>
            </div>
          </div>

          <div class=" mt-5 mb-5">
            <div class="div relative">
              <input
                type="password"
                onFocus={() => setPassCFocus(true)}
                onBlurCapture={() => setPassCFocus(false)}
                placeholder="Confirm Password"
                {...register("confirmPassword", { required: true })}
                class={`pl-10 py-2 text-gray-500 text-[16px] font-semibold rounded-md input-bordered   border-2 focus:outline-none focus:border-primary  w-full ${
                  errors.confirmPassword?.type === "required"
                    ? "border-red-600"
                    : "border-gray-400"
                }`}
              />
              <div
                class={`${
                  errors.confirmPassword?.type
                    ? "text-red-600"
                    : "border-gray-400"
                } absolute top-2 left-3 `}
              >
                <i
                  class={`fas fa-lock text-[16px] ${
                    passCFocus && " text-primary"
                  } ${
                    errors.confirmPassword?.type === "required" &&
                    "text-red-600"
                  }`}
                ></i>
              </div>
            </div>
          </div>

          <div class="my-3 text-right font-medium text-gray-400"></div>

          <p className=" text-base font-[600] text-red-600">
            {passError && passError}
          </p>

          <div>
            <input
              type="submit"
              class="btn btn-success w-full text-white font-bold text-lg rounded-full my-3"
              value="Register"
            />
          </div>
        </form>

        <div className=" my-3 font-semibold">
          <p>
            Already Registered?
            <Link
              to="/login"
              className=" my-3 font-bold mx-1 text-primary cursor-pointer"
            >
              Login Now?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

//
