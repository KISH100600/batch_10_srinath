import React, { Fragment, useState } from "react";
import Input from "./Input";
import { DataCon } from "../App";

function Inputs() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleForm = (val) => {
    val.preventDefault();
    console.log(val);
    // alert(
    //   `Heloo ${val.target[0].value} Your Password is ${val.target[1].value}`
    // );
    if (userName === "kish") {
      alert(`Heloo ${userName} Your Password is ${password}`);
    } else {
      alert("Not a proper user");
    }
  };

  return (
    <Fragment>
      <DataCon.Consumer>{({ name }) => <h1>{name}</h1>}</DataCon.Consumer>
      <form onSubmit={handleForm}>
        <Input
          label={"User Name"}
          type="text"
          required
          placeholder="This is username field"
          onChange={setUserName}
          value={userName}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          onChange={(data) => setPassword(data.target.value)}
          value={password}
        />
        <input type="submit" value={"Submit"} />
      </form>
    </Fragment>
  );
}

export default Inputs;
