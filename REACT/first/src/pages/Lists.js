import React from "react";
import { DataCon } from "../App";

function Lists({ data }) {
  return (
    <DataCon.Consumer>{({ name }) => <h1>{name}</h1>}</DataCon.Consumer>
    // <div>
    //   <h1>{dataCon}</h1>
    //   {/* {data
    //     .filter((a) => a.age > 35 && a.nationality === "india")
    //     .map((name, index) => {
    //       console.log(name);
    //       return (
    //         <h1>{`${index + 1}. ${name.name} ${name.age} ${
    //           name.nationality
    //         }`}</h1>
    //       );
    //     })} */}
    // </div>
  );
}
export default Lists;
