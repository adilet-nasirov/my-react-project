import React, { useState } from "react";
import { data } from "./data";
import { Button } from "@mui/material";

const App = () => {
  const [page, setPage] = useState(2);
  const handlePrev = () => {
    if (page) {
      let num = page - 1;
      setPage(num);
    }
  };
  const handleNext = () => {
    if (page < data.length - 1) {
      let num = page + 1;
      setPage(num);
    }
  };
  return (
    <div>
      <div className="container">
        <h1>{data[page].Name}</h1>
      </div>
      <div>
        <Button onClick={handlePrev}>prev</Button>
        <Button onClick={handleNext}>next</Button>
      </div>
    </div>
  );
};

export default App;
