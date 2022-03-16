import React, { useState } from "react";
import { data } from "./data";
import { Box, Button } from "@mui/material";
import Section from "./Section";
// import "./App.css";

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
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <main>
        <div className="container">
          <h1>{data[page].Name}</h1>
          <Section sections={data[page].Sections} />
        </div>
        <div>
          <Button onClick={handlePrev} disabled={page ? false : true}>
            prev
          </Button>
          <Button onClick={handleNext} disabled={page === data.length - 1}>
            next
          </Button>
        </div>
      </main>
    </Box>
  );
};

export default App;
