"use strict";

function Perdona() {
  this.nombre = "Saúl";
  this.edad = 29;
  this.apellido = "Velarde";

  this.imprimirInfor = function () {
    console.log("".concat(this.nombre, " ").concat(this.apellido, " con ").concat(this.edad, " a\xF1os"));
  };
}

var objPersona1 = new Persona();
objPersona1.imprimirInfor();