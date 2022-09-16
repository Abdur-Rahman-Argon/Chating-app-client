import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const useMyInformation = () => {
  const [myData, setMyData] = useState();

  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const email = user?.email;

    fetch(`https://ancient-eyrie-83116.herokuapp.com/user/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
      });
  }, [user]);

  return [myData];
};

export default useMyInformation;
