import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./GeneralContext";
import Details from "./RecipeSearch/Details";
import Home from "./RecipeSearch/Home";
import NotFoundPage from "./RecipeSearch/NotFoundPage";

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
