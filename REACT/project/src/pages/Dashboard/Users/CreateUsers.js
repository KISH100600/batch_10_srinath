import React, { useEffect, useState } from "react";
import { backend } from "../../../Controller/config";
import { useNavigate } from "react-router-dom";

const CreateUsers = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    name: "",
    gender: "",
    dob: "",
    role: "",
    address: "",
    city: "",
    number: "",
    email: "",
  });
  console.log(userData);
  const getUserData = async () => {
    setLoading(true);
    const response = await backend.get(
      `/api/service/rest/utility/getAllAdminRoles`
    );
    if (response.data) {
      setRoles(response.data);
    }
    setLoading(false);
  };
  useEffect(() => {
    getUserData();
  }, []);
  const createUser = async () => {
    try {
      const response = await backend.post(
        `/api/service/rest/user/addAdminUsers`,
        {
          area: `${userData.address}`,
          authority: `${userData.role}`,
          city: `${userData.city}`,
          dob: userData.dob,
          email: `${userData.email}`,
          gender: `${userData.gender}`,
          mobile: `${userData.number}`,
          state: `kish`,
          vendorName: `${userData.name}`,
          coordinates: { lat: "3.54646565465", long: "3.4354234" },
        }
      );
      if (
        response.data &&
        response.status === 200 &&
        response.data.responseStatus === "Success".toString()
      ) {
        navigate("/dashboard/viewUsers");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createUser();
        }}
      >
        <input
          type="text"
          value={userData.name}
          required
          placeholder="Enter the name"
          onChange={(val) =>
            setUserData({ ...userData, name: val.target.value })
          }
        />
        <input
          type="date"
          value={userData.dob}
          required
          onChange={(val) =>
            setUserData({ ...userData, dob: val.target.value })
          }
          placeholder="Enter the dob"
        />
        <select
          name="gender"
          onChange={(val) =>
            setUserData({ ...userData, gender: val.target.value })
          }
          value={userData.gender}
          required
          id="gender"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select
          name="roles"
          onChange={(val) =>
            setUserData({ ...userData, role: val.target.value })
          }
          value={userData.role}
          required
          id="roles"
        >
          {!loading && roles.length ? (
            <>
              {roles.map((a) => (
                <option value={a}>{a.replace("_", "")}</option>
              ))}
            </>
          ) : null}
        </select>
        <input
          type="text"
          value={userData.address}
          required
          onChange={(val) =>
            setUserData({ ...userData, address: val.target.value })
          }
          placeholder="Enter the address"
        />

        <input
          type="text"
          value={userData.city}
          required
          onChange={(val) =>
            setUserData({ ...userData, city: val.target.value })
          }
          placeholder="Enter the City"
        />
        <input
          type="number"
          onChange={(val) =>
            setUserData({ ...userData, number: val.target.value })
          }
          value={userData.number}
          required
          placeholder="Enter the number"
        />
        <input
          type="email"
          value={userData.email}
          required
          onChange={(val) =>
            setUserData({ ...userData, email: val.target.value })
          }
          placeholder="Enter the email"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateUsers;
