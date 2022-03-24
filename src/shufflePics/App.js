import React, { useEffect, useState } from "react";
import { fetch } from "./fetchData";
const App = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetched = fetch();
    setData(fetched);
  }, []);
  console.log(data);
  return (
    <div>
      {/* {data &&
        data.map((item) => {
          return <img src="item.urls.full" />;
        })} */}
    </div>
  );
};

export default App;
