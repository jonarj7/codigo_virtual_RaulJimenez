"use strict";

var formulario = document.querySelector("#formulario");
var inputColor = document.querySelector("#inputColor");
var btnGuard = document.querySelector("#btnGuard");
var btnBorrow = document.querySelector("#btnBorrow");
var body = document.querySelector("body");

formulario.onsubmit = function (e) {
  e.preventDefault();
  var color = inputColor.value;
  body.style.backgroundColor = color;
  localStorage.setItem("colorFondo", color);
};

(function () {
  if (localStorage.getItem("colorFondo")) {
    body.style.backgroundColor = localStorage.getItem("colorFondo");
    inputColor.value = localStorage.getItem("colorFondo");
  }
})();

btnBorrar.onclick = function () {
  localStorage.removeItem("colorFondo");
  body.style.backgroundColor = "#fff";
  inputColor.value = "#00";
};