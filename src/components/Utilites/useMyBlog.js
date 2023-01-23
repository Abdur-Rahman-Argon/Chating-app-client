import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const useMyBlog = () => {
  const [myBlog, setMyBlog] = useState();

  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const email = user?.email;

    fetch(`${process.env.REACT_APP_PRO_URL}/MyPost/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyBlog(data);
      });
  }, [user]);

  return [myBlog];
};

export default useMyBlog;
