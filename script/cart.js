import nav from "../components/navbar.js";

document.getElementById("nav").innerHTML=nav()

let cartitem = JSON.parse(localStorage.getItem("cartitem")) || [];

