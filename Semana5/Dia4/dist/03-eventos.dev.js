"use strict";

var linkGoogle = document.getElementById('linkGoogle');
var divCuadrado = document.getElementById('divCuadrado');
var selectPais = document.getElementById('selectPais');
var selectDpto = document.getElementById('selectDpto');
var inputNombre = document.getElementById('inputNombre');
var inputMensaje = document.getElementById('inputMensaje');
var letras = document.getElementById('letras');
var paises = [{
  id: 12343,
  nombre: 'Perú'
}, {
  id: 12,
  nombre: 'México'
}, {
  id: 13,
  nombre: 'China'
}, {
  id: 19,
  nombre: 'Argentina'
}];
var departamentos = [{
  id: 22,
  nombre: 'Lima',
  idPais: 12343,
  stock: true
}, {
  id: 23,
  nombre: 'Puno',
  idPais: 12343,
  stock: false
}, {
  id: 24,
  nombre: 'Wujan',
  idPais: 13,
  stock: false
}, {
  id: 25,
  nombre: 'Acapulco',
  idPais: 12,
  stock: true
}, {
  id: 26,
  nombre: 'Fujian',
  idPais: 13,
  stock: false
}, {
  id: 27,
  nombre: 'Buenos Aires',
  idPais: 19,
  stock: true
}, {
  id: 28,
  nombre: 'Cordova',
  idPais: 19,
  stock: false
}, {
  id: 29,
  nombre: 'Tulum',
  idPais: 12,
  stock: true
}];

(function () {
  console.log('asasdasdasdasdas');
  paises.forEach(function (pais) {
    var option = document.createElement('option');
    option.value = pais.id;
    option.innerText = pais.nombre;
    selectPais.append(option);
  });
})();

linkGoogle.onclick = function (e) {
  e.preventDefault();
  console.log('Click en linkGoogle');
};

divCuadrado.onclick = function (e) {
  console.log('Click divcuadrado');
  console.log(e);
};

divCuadrado.onmouseover = function (e) {
  console.log(e);
  /**
   * Se dispara el evento cuando el mouse ingresa al área que ocupa
   * un elemento
   */
};

divCuadrado.onmouseout = function (e) {
  console.log(e);
  /**
   * Se dispara el evento cuando el mouse sale del área que ocupa
   * un elemento
   */
};

selectPais.onchange = function (e) {
  selectDpto.innerHTML = "<option value=\"0\">-Seleccione Dpto-</option>";
  /**
   * Cada vez que cambie el valor del selectPais,
   * se debe de cargar la lista de departamentos que le pertenecen
   * Si el valor del país es 0, se deberá limpiar los options
   * del selectDpto
   */

  var idPais = +selectPais.value;
  departamentos.forEach(function (dpto) {
    if (dpto.idPais === idPais) {
      var option = document.createElement('option');
      option.value = dpto.id;
      option.innerText = dpto.nombre;
      selectDpto.append(option);
    }
  });
};

var setData = function setData(e) {
  datos[e.target.name] = e.target.value;
};

inputNombre.onkeyup = function (e) {
  console.log(inputNombre.value);
};

inputMensaje.onkeyup = function () {
  var texto = inputMensaje.value;
  var caracteres = texto.length;

  if (caracteres > 50) {
    inputMensaje.value = inputMensaje.value.substr(0, 49);
  } else {
    letras.innerText = 50 - caracteres;
  }
  /**
   * Cada vez que se escriba un nuevo caracter en el textarea
   * deberá de restarse de la cuenta máxima de 50 caracteres.
   * Cuando la cantidad total llegue a 50 caracteres, no deberán escribirse
   * más caracteres
   */

};