import React, { useEffect, useState } from "react";
import { backend } from "../../../Controller/config";

export const ViewUsers = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    setLoading(true);
    const response = await backend.get(
      `/api/service/rest/user/getAllusersBySearchText?email=&mobile=&authority=&offset=0&limit=10&name=`
    );
    if (response.data) {
      setUserData(response.data);
    }
    setLoading(false);
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {userData.map((a, i) => (
            <>
              <h1>{`${i + 1}. ${a.vendorName} ${a.authority}`}</h1>
            </>
          ))}
        </>
      )}
    </div>
  );
};
