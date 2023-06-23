import React, { useState } from "react";

const Login = () => {
  const [numberToCheck, setNumbertoCheck] = useState(0);
  const [password, setPassword] = useState();
  if (numberToCheck == 0) {
    return (
      <div>
        <h1>This is for zero</h1>
        <input
          value={numberToCheck}
          type="number"
          onChange={(val) => setNumbertoCheck(val.target.value)}
        />
        {numberToCheck % 2 === 0 ? (
          <h1>This is an even number</h1>
        ) : (
          <h1>This is an odd number</h1>
        )}
      </div>
    );
  }
  return (
    <div>
      <input
        value={numberToCheck}
        type="number"
        onChange={(val) => setNumbertoCheck(val.target.value)}
      />
      {numberToCheck % 2 === 0 ? (
        <h1>This is an even number</h1>
      ) : (
        <h1>This is an odd number</h1>
      )}
      {numberToCheck == 100 && <h1>This is hundred</h1>}
    </div>
  );
};
export default Login;

export const SignUp = () => {
  return <h1>hjd</h1>;
};
