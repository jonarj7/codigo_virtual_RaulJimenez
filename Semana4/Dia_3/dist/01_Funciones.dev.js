"use strict";

function tablaDeMultiplicar(n) {
  //let n = 6;
  for (var i = 0; i < 13; i++) {
    console.log("".concat(n, " x ").concat(i, " = ").concat(i * n));
  }
}

tablaDeMultiplicar(12);

function factorial(n) {
  var total = 1;

  for (var i = n; i > 0; i--) {
    total = total * i;
  }

  return total;
}

factorial(5);

function configurar() {
  console.log("configurando ...");
}

function sumar(a, b) {
  return a + b;
}

var suma7y8 = sumar(7, 8);

function validarPasswotd(ps1, ps2) {
  if (ps1 === ps2 && ps1.length >= 6) {
    return true;
  }

  return false;
}