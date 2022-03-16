import React from "react";
import { data } from "./data";
const App = () => {
  console.log(data);
  return (
    <div>
      {data.map((item) => {
        return <h1>{item.Name}</h1>;
      })}
    </div>
  );
};

export default App;
