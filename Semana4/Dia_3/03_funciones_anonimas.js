
//Funciones Anónimas

function buscarPorDNI(dni,parametro2) {

    setTimeout(function (){
        parametro2()
        console.log("pasaron 3 segundos")
    }, 3000)


    
}
buscarPorDNI("43694974",function () {
    console.log(resultado);
})


/**
 * Funcion que entrega los usuarios del sistema
 * @param {Function} callback 
 * Funcion que recibe un callback al cual envía
 * un arreglo con la lista de usuarios
 */

const getNombres = (callback) => {
    fetch("https://reqres.in/api/users").then((peticion) => {
      return peticion.json();
    }).then(data => {
      let nombres = data.data.map(obj => obj.first_name);
      callback(nombres);
    })
  };
  