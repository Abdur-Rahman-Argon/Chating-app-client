import React, { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useMyInformation from "./useMyInformation";

const UseMyConversion = () => {
  const [myConversion, setMyConversion] = useState();

  const [user, loading] = useAuthState(auth);
  const [myData] = useMyInformation();

  useEffect(() => {
    fetch(
      `https://ancient-eyrie-83116.herokuapp.com/getConversation/${myData?._id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyConversion(data);
      });
  }, [myData]);

  return [myConversion];
};

export default UseMyConversion;
