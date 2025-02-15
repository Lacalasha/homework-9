"use strict";
const mainTitle = document.getElementById("mainTitle");
const helloButton = document.getElementById("helloButton");
const byeButton = document.getElementById("byeButton");

function changeText(akRasacMindaImasDavwerMindia) {
  mainTitle.innerHTML = akRasacMindaImasDavwerMindia;
}

helloButton.addEventListener("click", function () {
  changeText("Mobrdzandi gienacvale");
});

byeButton.addEventListener("click", function () {
  changeText("Naxvamdis Genacvale");
});
