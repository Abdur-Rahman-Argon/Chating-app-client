import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import pic from "./../../../Images/149071.png";
import { useQuery } from "react-query";

const User = ({ user }) => {
  // "https://scontent.fdac4-1.fna.fbcdn.net/v/t39.30808-6/297237556_131844519546545_4846200459611462752_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEaqOMwCGjfbpWt5hYOV6SutuMEbdhysk624wRt2HKyTt-a4Q28axIcP1dO1AcSsAat1Z08v-EXjutePspZ_I_Z&_nc_ohc=_YZib5hj9fUAX_Bdgxd&_nc_zt=23&_nc_ht=scontent.fdac4-1.fna&oh=00_AT_7Ye9juVoCKDqBck1k0idbGOPTEQvIg3fOZ6BY3Ia9Zg&oe=6321BE49";

  //   const [user, loading] = useAuthState(auth);

  console.log(user?.user);
  const image = user?.user?.photoURL;

  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/users`).then((res) => res.json())
  );

  if (isLoading) {
    return;
  }

  return (
    <div className=" my-5 bg-slate-100 py-2  shadow-sm rounded-3xl">
      <a href="/sendMessage">
        <div className=" flex justify-center gap-10 items-center">
          <a href="/viewProfile">
            <img
              src={image || pic}
              alt=""
              className=" w-10 rounded-full border-[1px] "
            />
          </a>
          <h1 className=" font-bold"> {user?.user?.user?.userName}</h1>
        </div>
      </a>
    </div>
  );
};

export default User;
