"use strict";

var Plato = function Plato() {
  var objPlato = {
    nombre: "",
    precio: 0,
    ingrediente: []
  };
  return objPlato;
};

var ceviche = Plato();
ceviche.nombre = "ceviche";
console.log(ceviche);