let cpu = {
    ram: 16,
    nucleos: 8,
    discoSolido: "1Tb",
    enfriamientoLiquido: false
}

console.log(cpu);

cpu.ram = 8;

console.log(cpu)



let plato = {
    nombre: "Asado de tira",
    precio: 39.00,
    ingrediente: ["Carne de Res","papa sancocha","legumbres"]
}

//como  agregar un ingrediente al objeto plato

plato.ingrediente.push("cremas");
console.log(plato)

// trabjador

let objTrabajador = {
    datosPersonales: {
    nombre: "Jorge",
    apellido: "Vera",
    edad:29
    },
    cargo:"developer",
    sueldo: 950.00
}

console.log(objTrabajador)

objTrabajador.datosPersonales.telefono = "35478219";

//////

const ajiGallina={
    imprimirIngredientes: function () {
        for (let i = 0; i < ajiGallina.ingrediente.length; i++) {

            console.log(`${ajiGallina.ingrediente[i].nombre} ${ajiGallina.ingrediente[i].cant} ${ajiGallina.ingrediente[i].um}`);
        }
    },

    agregaIngrediente: function (unidaM, cantidad, nombreI) {
      
       let objetoIngrediente={
           nombre: nombreI,
           um:unidaM,
           cant:cantidad
       }
       ajiGallina,this.ingrediente.push(objetoIngrediente)
    },
    nombre: "Ají de gallina",
    precio: 12.00,
    ingrediente: [{
        nombre: "Gallina",
        um:"pechuga",
        cant:1},
         {
        nombre: "Ají amarillo",
        um: "gramos",
        cant: 200

    }]
}

console.log(ajiGallina);

ajiGallina.agregaIngrediente("unidades",2,"aceituna");