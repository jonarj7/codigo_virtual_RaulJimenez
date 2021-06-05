class Producto{

    constructor(desc,prec,color){ 
        this.descripcion = desc;
        this.precio = prec;
        this.color = color;

    }

   

    imprimirDatos = function () {
        console.log(`** Datos del producto **`);
        console.log(`Nombre: ${this.descripcion}`);
        console.log(`Nombre: ${this.precio}`);
        console.log(`Nombre: ${this.color}`);

    };

}

let objProducto1 = new Producto("Play Statio 5", 4000.0,"blanco");
console.log(objProducto1)