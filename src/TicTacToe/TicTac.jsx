import React, { useState } from "react";
import "./tic.css";
const TicTac = () => {
  const [stars, setStars] = useState([...Array(9).keys()]); //[0,1,2,3,4]
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [flag, setFlag] = useState(false);
  const handleClick = (index) => {
    setClickedIndex(index);
    setFlag(true);
    // console.log(index)
  };
  const handleMouseOver = (index) => {
    setClickedIndex(index);
    // console.log(index)
    setFlag(false);
  };
  const handleMouseLeave = () => {
    if (!flag) {
      setClickedIndex(-1);
    }
    // console.log(index)
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {stars.map((star, ind) => {
            return (
              <div
                key={ind}
                style={{
                  display: "inline-block",
                  border: "1px solid black",
                  width: "60px",
                  height: "60px",
                  background: ind <= clickedIndex ? "yellow" : "",
                }}
                onClick={() => handleClick(ind)}
                onMouseOver={() => handleMouseOver(ind)}
                onMouseLeave={handleMouseLeave}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TicTac;
