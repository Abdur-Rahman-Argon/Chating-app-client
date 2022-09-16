import React, { useEffect, useState } from "react";

const useAllUsers = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch(`https://ancient-eyrie-83116.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return [users];
};

export default useAllUsers;
