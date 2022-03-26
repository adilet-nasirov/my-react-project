import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./GeneralContext";
import Details from "./Details";
import Home from "./Home";
import NotFoundPage from "./NotFoundPage";

const App = () => {
  const data = useContext(Context);
  console.log(data);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:foodLabel" element={<Details />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
