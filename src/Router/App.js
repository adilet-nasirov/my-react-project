import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Contacts from "./Contacts";
import Headers from "./Headers";
import Home from "./Home";
const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <Headers />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
