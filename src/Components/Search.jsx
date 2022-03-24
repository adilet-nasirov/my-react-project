import React, { useContext } from "react";
import { CardContext } from "../GeneralContext";
import Checkout from "./Checkout";
const Search = () => {
  const { name, surname } = useContext(CardContext);
  //   console.log(name, surname);
  return (
    <div>
      Search
      <Checkout />
    </div>
  );
};

export default Search;
