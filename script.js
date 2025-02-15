"use strict";
function changeText(akRasacMindaImasDavwerMindia) {
  document.getElementById("mainTitle").innerHTML = akRasacMindaImasDavwerMindia;
}

document.getElementById("helloButton").addEventListener("click", function () {
  changeText("Mobrdzandi gienacvale");
});

document.getElementById("byeButton").addEventListener("click", function () {
  changeText("Naxvamdis Genacvale");
});
