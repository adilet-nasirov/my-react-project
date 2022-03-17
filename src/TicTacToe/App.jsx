import React, { useState } from "react";
import "./tic.css";
const App = () => {
  const [cells, setCells] = useState([...Array(9).keys()]);
  console.log(cells);
  return (
    <div className="container">
      {cells.map((item, index) => {
        return (
          <div className="cell" key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default App;
