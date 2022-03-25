import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const Context = createContext([]);

export const ContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [searchItem, setSearchItem] = useState("chicken");

  const fetchApi = async () => {
    const { data } = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchItem}&app_id=d74656c6&app_key=7a47d9ecc119c61f8367d1856cb4d05f`
    );
    console.log(data);
    setRecipes(data.hits);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  const data = {
    recipes: recipes,
    searchItem: searchItem,
    setSearchItem: setSearchItem,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};
