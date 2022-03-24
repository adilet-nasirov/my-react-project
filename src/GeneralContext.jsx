import { createContext } from "react";
import { useState } from "react";
export const CardContext = createContext([]);

export const CardProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      name: "Adilet",
      surname: "Nasirov",
    },
  ]);

  return (
    <CardContext.Provider value={{ data: data, setData: setData }}>
      {children}
    </CardContext.Provider>
  );
};
