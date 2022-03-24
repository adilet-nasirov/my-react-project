import React, { useContext } from "react";
import Search from "../Components/Search";
import { CardContext } from "../GeneralContext";

function Detail() {
  const data = useContext(CardContext);
  console.log(data);
  return (
    <div>
      <Search />
    </div>
  );
}

export default Detail;
