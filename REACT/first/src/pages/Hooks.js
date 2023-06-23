import React, { useEffect, useState } from "react";

export const Hooks = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("hi there");
  }, [count]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>ADD me</button>
      <button onClick={() => setCount(count - 1)}>Subract me</button>
    </div>
  );
};
