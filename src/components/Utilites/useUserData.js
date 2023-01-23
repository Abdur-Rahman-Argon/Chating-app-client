import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const useUserData = ({ userId }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (userId) {
      fetch(`${process.env.REACT_APP_PRO_URL}/viewUser/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
        });
    }
  }, [userId]);

  return [userData];
};

export default useUserData;
