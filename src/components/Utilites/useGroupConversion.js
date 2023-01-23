import { useEffect } from "react";
import { useState } from "react";
import useMyInformation from "./useMyInformation";

const useGroupConversion = () => {
  const [groupConversion, setGroupConversion] = useState();

  //   const [user, loading] = useAuthState(auth);
  const [myData] = useMyInformation();

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_PRO_URL}/getGroupConversation/${myData?._id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setGroupConversion(data);
      });
  }, [myData]);

  return [groupConversion];
};

export default useGroupConversion;
