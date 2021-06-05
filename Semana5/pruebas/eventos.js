let linkGoogle = document.getElementById("linkGoogle");
let divCuadrado = document.getElementById("divcuadrado");

let paises = [
    { id: 12343, nombre: "Perú", },
    { id: 12, nombre: "México", },
    { id: 13, nombre: "China", },
    { id: 19, nombre: "Argentina", },
  ]
  
  const llenarPaises = () =>{
console.log(`ss`)
paises.forEach((pais)=>{
    let option = document.createElement(`option`);
    option.value = pais.id;
    option.innerText = pais.nombre;
    seletPais.append(option)
})

  };
  llenarPaises();

linkGoogle.onclick = ()  => { };

divCuadrado.onclick = () => {};