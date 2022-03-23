import React from "react";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contacts"}>Contacts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Headers;