import { useEffect } from "react";
import { useState } from "react";
import useMyInformation from "./useMyInformation";

const useGroupConversion = () => {
  const [groupConversion, setGroupConversion] = useState();

  //   const [user, loading] = useAuthState(auth);
  const [myData] = useMyInformation();

  useEffect(() => {
    fetch(
      `https://ancient-eyrie-83116.herokuapp.com/getGroupConversation/${myData?._id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setGroupConversion(data);
      });
  }, [myData]);

  return [groupConversion];
};

export default useGroupConversion;
