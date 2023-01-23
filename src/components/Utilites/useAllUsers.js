import React, { useEffect, useState } from "react";

const useAllUsers = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_PRO_URL}/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return [users];
};

export default useAllUsers;
