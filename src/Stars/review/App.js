import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
const App = () => {
  const [star, setStar] = useState([...Array(5).keys()]);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [flag, setFlag] = useState(false);
  const handleClick = (index) => {
    setClickedIndex(index);
    setFlag(true);
  };
  const handleMouseOver = (index) => {
    setClickedIndex(index);
  };
  const handleMouseLeave = () => {
    if (!flag) setClickedIndex(-1);
  };
  return (
    <div className="App" style={{ textAlign: "center", margin: "2rem 1rem" }}>
      {star.map((i, index) => {
        return (
          <StarIcon
            key={index}
            color={index <= clickedIndex ? "warning" : ""}
            onClick={() => handleClick(index)}
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
};

export default App;
