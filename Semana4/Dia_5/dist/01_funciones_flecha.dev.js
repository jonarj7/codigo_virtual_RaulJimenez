"use strict";

var suma = function suma(a, b) {
  return a + b;
};

var multiplicar = function multiplicar(a, b) {};

var dividir = function dividir(a, b) {
  return a / b;
};

console.log("9/3: ".concat(dividir(9, 3)));

var cuadrado = function cuadrado(n) {
  return n * n;
};

console.log("cuadrado de 9: ".concat(cuadrado(9)));