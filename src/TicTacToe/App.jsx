import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./tic.css";
const App = () => {
  const [cells, setCells] = useState([...Array(9).keys()]);
  const [xturn, setXturn] = useState(true);
  const [xData, setXdata] = useState([]);
  const [oData, setOdata] = useState([]);
  const [winner, setWinner] = useState("");
  const winList = [
    //horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //diagonal
    [0, 4, 8],
    [2, 4, 6],
    //vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  //   console.log(cells);
  const handleClick = (index) => {
    let newCells = [...cells];
    if (xturn) {
      newCells[index] = "X";
      setXdata([...xData, index]);
    } else {
      newCells[index] = "O";
      setOdata([...oData, index]);
    }
    setCells(newCells);
    setXturn(!xturn);
  };
  useEffect(() => {
    if (xData.length >= 3 || oData.length >= 3) {
      for (let el of winList) {
        let winComb = el.join("");
        let xComb = xData.sort().join("");
        let oComb = oData.sort().join("");
        if (winComb === xComb || xComb.includes(winComb)) setWinner("X");
        if (winComb === oComb || oComb.includes(winComb)) setWinner("O");
      }
    }
  }, [xData, oData]);
  console.log(xData, oData);
  return (
    <main>
      <Typography variant="h3">Tic Tac Toe</Typography>
      <h1 style={{ color: xturn ? "lime" : "deeppink" }}>
        {xturn ? "X's turn" : "O's turn"}
      </h1>
      <div className="container">
        {cells.map((item, index) => {
          return (
            <div
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
            >
              {typeof item === "string" ? (
                <p
                  className="item"
                  style={{ color: item === "X" ? "lime" : "deeppink" }}
                >
                  {item}
                </p>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
      <div className="restartBtn">
        <Button variant="contained">Restart</Button>
      </div>
    </main>
  );
};

export default App;
