import "./App.css";
import { createContext, useEffect, useState } from "react";
import Login, { SignUp } from "./pages/Login";
import Lists from "./pages/Lists";
import Inputs from "./pages/Inputs";
import Styles from "./pages/Styles";
import { Hooks } from "./pages/Hooks";

export const DataCon = createContext({ name: "kish" });

const Profile = (p) => {
  if (p.age > 10) {
    return (
      <h1 style={{ backgroundColor: p.background, color: p.color }}>
        {"User senior name is : " + p.name + p.age}
      </h1>
    );
  }
  return <h1>{"User junior name is : " + p.name + p.age}</h1>;
};

export const UIComp = ({ children }) => (
  <h1 style={{ background: "red" }}>{children}</h1>
);
function App() {
  const [num, setNum] = useState(9);
  const [num1, setNum1] = useState(0);
  useEffect(() => {
    console.log("hitted");
  }, [num, num1]);

  const names = [
    "kish",
    "harsh",
    "vic",
    "josh",
    "rock",
    "cris",
    "kohli",
    "dada",
    "ten",
  ];
  const namesObj = [
    { name: "kish", age: 23, address: "some", nationality: "india" },
    { name: "harsh", age: 22, address: "some", nationality: "india" },
    { name: "vic", age: 23, address: "some", nationality: "india" },
    { name: "kohli", age: 40, address: "some", nationality: "india" },
    { name: "bond", age: 50, address: "some", nationality: "india" },
    { name: "dep", age: 33, address: "some", nationality: "us" },
    { name: "tony", age: 32, address: "some", nationality: "eng" },
    { name: "silvester", age: 25, address: "some", nationality: "eng" },
    { name: "josh", age: 48, address: "some", nationality: "russia" },
  ];
  return (
    <DataCon.Provider value={{ name: "kishore hi" }}>
      {/* <Lists data={namesObj} />
      <Inputs />
      <UIComp>
        <p>jdjdj</p>
        <p>jdjdj</p>
        <p>jdjdj</p>
      </UIComp>
      <Styles /> */}
      <Hooks />
      {/* <Login /> */}
      {/* <Profile name={"kish"} age={num} background={"red"} color={"black"} />
      <Profile name={"harsh"} age={num} background={"red"} color={"white"} />
      <h1
        onMouseOver={() => console.log("on top")}
        onMouseOut={() => console.log("out")}
      >
        Welcome to the project : {num}
      </h1>
      <button
        onClick={() => {
          setNum(num + 1);
          console.log("kish");
        }}
        onMouseOver={() => console.log("on top")}
        onMouseOut={() => console.log("out")}
      >
        click
      </button> */}
    </DataCon.Provider>
  );
}

export default App;

// import React, { Component } from "react";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { num: 0 };
//   }
//   componentDidMount() {
//     console.log("hitted");
//   }
//   componentWillUnmount() {
//     console.log("changes");
//   }
//   render() {
//     return (
//       <div>
//         <h1>The number is : {this.state.num}</h1>
//         <button onClick={() => this.setState({ num: this.state.num + 1 })}>
//           click
//         </button>
//       </div>
//     );
//   }
// }
