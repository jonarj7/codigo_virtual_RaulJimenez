"use strict";

var linkGoogle = document.getElementById("linkGoogle");
var divCuadrado = document.getElementById("divcuadrado");
var paises = [{
  id: 12343,
  nombre: "Perú"
}, {
  id: 12,
  nombre: "México"
}, {
  id: 13,
  nombre: "China"
}, {
  id: 19,
  nombre: "Argentina"
}];

var llenarPaises = function llenarPaises() {
  console.log("ss");
  paises.forEach(function (pais) {
    var option = document.createElement("option");
    option.value = pais.id;
    option.innerText = pais.nombre;
    seletPais.append(option);
  });
};

llenarPaises();

linkGoogle.onclick = function () {};

divCuadrado.onclick = function () {};