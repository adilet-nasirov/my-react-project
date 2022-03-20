import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./tic.css";
const App = () => {
  const [cells, setCells] = useState([...Array(9).keys()]);
  const [xturn, setXturn] = useState(true);
  const [xData, setXdata] = useState([]);
  const [oData, setOdata] = useState([]);
  const [winner, setWinner] = useState(0);
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
  const handleClick = (index) => {
    if (!winner && typeof cells[index] !== "string") {
      let newCells = [...cells];
      if (xturn) {
        newCells[index] = "X";
        setXdata([...xData, index]);
        setXturn(false);
      } else {
        newCells[index] = "O";
        setOdata([...oData, index]);
        setXturn(true);
      }
      setCells(newCells);
    }
  };
  const checkWinner = (data) => {
    // console.log(data + "this is data");
    for (let el of winList) {
      let count = 0;
      for (let x of data) {
        if (el.includes(x)) count++;
      }
      if (count === el.length) {
        setWinner(`${cells[data[0]]} is winner`);
        setOdata([]);
        setXdata([]);
      }
    }
    setTimeout(() => {
      if (winner === false && cells.every((item) => typeof item === "string")) {
        setWinner("DRAW");
      }
    }, 1000);
  };
  useEffect(() => {
    if (!winner) {
      if (xData.length >= 3) {
        checkWinner(xData);
      }
      if (oData.length >= 3) {
        checkWinner(oData);
      }
    }
  }, [cells]);
  const handleRestart = (event) => {
    setCells([...Array(9).keys()]);
    setOdata([]);
    setXdata([]);
    setWinner(false);
    event.preventDefault();
  };
  return (
    <main>
      <Typography variant="h3">Tic Tac Toe</Typography>
      <h1
        style={{
          color: winner ? "rgb(204, 0, 255)" : xturn ? "lime" : "deeppink",
        }}
      >
        {winner ? winner : xturn ? "X's turn" : "O's turn"}
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
        <Button variant="contained" onClick={handleRestart}>
          Restart
        </Button>
      </div>
    </main>
  );
};

export default App;
