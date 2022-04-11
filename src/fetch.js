import axios from "axios";

function fetchData(id) {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  axios.get("../src/data/2.json", config).then((res) => {
    document.getElementById("product").innerHTML = res.data.name;

    console.log(res.data.name);
  });
}

export default fetchData;
