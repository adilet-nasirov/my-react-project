import React, { useEffect } from "react";
import { CardContext } from "../GeneralContext";
import { useContext } from "react";
const Checkout = () => {
  const { setData } = useContext(CardContext);
  useEffect(() => {
    setData([{ city: "Seattle", state: "Washington", country: "USA" }]);
  }, []);
  return <div>Checkout</div>;
};

export default Checkout;
