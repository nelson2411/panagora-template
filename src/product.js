import axios from "axios";
import logo from "./static/panagora-logo.svg";

// render data based on product id using webpack
const fetchData = (id) => {
  return axios
    .get(`../src/data/${id}.json`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default fetchData;
