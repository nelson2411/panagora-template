import "./index.scss";
import data from "../src/data/products.json";
import fetchData from "./product";
import logo from "./static/panagora-logo.svg";
const { name, price, thumbnail } = data;
console.log({ data });

const imgLogo = document.getElementById("panaLogo");
imgLogo.src = logo;

const renderData = document.getElementById("myData");

// Rendering roducts from json file
for (let i = 0; i < data.length; i++) {
  const { name, price, thumbnail, id } = data[i];
  renderData.innerHTML += `
  <div class="card">
    <div class="product">
      <img src="${thumbnail}" alt="${name}">
      <a href="product.html?id=${id}">
          <h3>${name}</h3>
          </a>
           <p>${price}</p>
    </div>
    </div>
  `;
}
