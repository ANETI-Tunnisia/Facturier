"use strict";
const form = document.getElementById("form");
const type = document.getElementById("type");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const country = document.getElementById("country");
const town = document.getElementById("town");
const zip = document.getElementById("zip");
const product = document.getElementById("product");
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");
const tva = document.getElementById("tva");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value);
});
