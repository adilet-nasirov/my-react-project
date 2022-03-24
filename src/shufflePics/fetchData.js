import axios from "axios";
import { nanoid } from "nanoid";
export const fetch = () => {
  const url1 =
    "https://api.unsplash.com/photos/?client_id=67dzJ6HsOJ0oE9moFGN9_AGJ-de6jwkL-CAULtu3QWg&page=1";
  const url2 =
    "https://api.unsplash.com/photos/?client_id=67dzJ6HsOJ0oE9moFGN9_AGJ-de6jwkL-CAULtu3QWg&page=2";
  axios.all([axios.get(url1), axios.get(url2)]).then(([data1, data2]) => {
    const joinedData = [...data1.data, ...data2.data.slice(0, 2)];
    const dataWithDuplicates = [...joinedData, ...joinedData];
    // console.log(dataWithDuplicates);
    const data = dataWithDuplicates.map((item) => {
      return { ...item, uniqueID: nanoid() };
    });
    const mixedData = shuffle(data);
    console.log(mixedData);
    return mixedData;
  });
};

function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randIndex = Math.floor(Math.random() * arr.length);
    [arr[i], arr[randIndex]] = [arr[randIndex], arr[i]];
  }
  return arr;
}
