import React, { useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);
  const [signInWithEmailAndPassword, LUser, LLoading, error] =
    useSignInWithEmailAndPassword(auth);

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

  if ((loading, LLoading)) {
    return;
  }

  const onSubmit = (data) => {
    console.log(data);
    const email = data.userEmail;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="flex-1 mt-16 text-center shadow-2xl rounded-xl w-96 md:[500px] mx-auto px-5 py-10">
      <div className=" w-full mx-auto">
        <div>
          <h2 class=" mb-8 text-3xl font-bold ">Please Login</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className=" ">
          <div class=" my-6">
            <div class="div relative">
              <input
                type="email"
                onFocus={() => setEmailFocus(true)}
                onBlurCapture={() => setEmailFocus(false)}
                placeholder="User Email"
                {...register("userEmail", { required: true })}
                class={`pl-10 py-2 text-gray-500 text-[16px] font-semibold rounded-md input-bordered   border-2 focus:outline-none focus:border-primary w-full ${
                  errors.userEmail?.type === "required"
                    ? "border-red-600"
                    : "border-gray-400"
                }`}
              />

              <div
                class={`${
                  errors.userEmail?.type ? "text-red-600" : "border-gray-400"
                } absolute top-2 left-3 `}
              >
                <i
                  class={` fa-sharp fa-solid fa-envelope text-[16px]   ${
                    emailFocus && " text-primary"
                  }   ${
                    errors.userEmail?.type === "required" && "text-red-600"
                  }`}
                ></i>
              </div>
            </div>
          </div>
          <div class=" mt-5 mb-5">
            <div class="div relative">
              <input
                type="password"
                onFocus={() => setPassFocus(true)}
                onBlurCapture={() => setPassFocus(false)}
                placeholder="User Password"
                {...register("password", { required: true })}
                class={`pl-10 py-2 text-gray-500 text-[16px] font-semibold input-bordered   border-2 focus:outline-none focus:border-primary rounded-md w-full ${
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
                  class={`fas fa-lock text-[16px]    c  ${
                    passFocus && " text-primary"
                  } `}
                ></i>
              </div>
            </div>
          </div>

          <div className=" t flex items-center justify-between">
            <div class="my-3 flex justify-start items-center gap-2 text-right font-medium text-gray-500">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className=" checkbox-primary"
              />
              <span> Remember me</span>
            </div>
            <div class="my-3 text-right font-medium text-gray-500">
              <a href="/#" className=" hover:text-primary">
                Forgot Password?
              </a>
            </div>
          </div>

          <div>
            <input
              type="submit"
              class="btn btn-primary w-full text- font-bold text-lg rounded-full my-3"
              value="Login"
            />
          </div>
        </form>
      </div>

      <div className=" my-3 font-semibold">
        <p>
          Not Register Yet?
          <Link
            to="/signup"
            className=" my-3 font-bold mx-1 text-success cursor-pointer"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
