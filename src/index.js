import "./index.scss";
import data from "../src/data/products.json";
import fetchData from "./fetch";
import logo from "./static/panagora-logo.svg";
const { name, price, thumbnail } = data;
console.log({ data });

const imgLogo = document.getElementById("panaLogo");
imgLogo.src = logo;

const renderData = document.getElementById("myData");
renderData.innerHTML = data
  .map((item) => {
    return `
    <div class="card">
    <a>
      <img src="${item.thumbnail}" alt="${item.name}">
      </a>
      <a class="product-page">
      <h3>${item.name}</h3>
      </a>
      <p>${item.price} SEK</p>
    </div>
  `;
  })
  .join("");

const productPage = document.querySelector(".product-page");
productPage.addEventListener("click", fetchData);
fetchData();
