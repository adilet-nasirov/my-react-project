import React, { useState } from "react";
import "./tic.css";
const App = () => {
  const [cells, setCells] = useState([...Array(9).keys()]);
  const [xturn, setXturn] = useState(true);
  //   console.log(cells);
  const handleClick = (index) => {
    let newCells = [...cells];
    xturn ? (newCells[index] = "X") : (newCells[index] = "O");
    setCells(newCells);
    setXturn(!xturn);
  };
  return (
    <div className="container">
      {cells.map((item, index) => {
        return (
          <div className="cell" key={index} onClick={() => handleClick(index)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default App;
