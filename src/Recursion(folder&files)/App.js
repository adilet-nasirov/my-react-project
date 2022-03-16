import React from "react";
import { data } from "./data";
import "./App.css";
import FolderIcon from "@mui/icons-material/Folder";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
const App = () => {
  console.log(data);
  return (
    <div>
      <ul>
        <FolderIcon />
        <Helper input={data} />
      </ul>
    </div>
  );
};

function Helper({ input }) {
  return (
    <ul>
      {input.map((item) => {
        if (item.type === "file") {
          return (
            <li>
              <ArticleRoundedIcon />
              {item.name}
            </li>
          );
        } else {
          return (
            <li>
              <FolderIcon />
              {item.name}
              <Helper input={item.contents} />
            </li>
          );
        }
      })}
    </ul>
  );
}

export default App;
