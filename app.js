"use strict";
// Global Styles
const clickMe = document.querySelector("button");
const h2 = document.querySelector("h2");

function changeBG() {
  let r = Math.floor(Math.random() * 256) + 1;
  let g = Math.floor(Math.random() * 256) + 1;
  let b = Math.floor(Math.random() * 256) + 1;
  let rgb = `rgb(${r},${g},${b})`;

  h2.innerHTML = `Background Color: ${rgb}`;
  const body = document.querySelector("body");
  body.style.backgroundColor = rgb;
}

clickMe.addEventListener("click", changeBG);
