




function Perdona() {
    this.nombre = "Saúl";
    this.edad = 29;
    this.apellido = "Velarde";
    this.imprimirInfor = function () {
    console.log(`${this.nombre} ${this.apellido} con ${this.edad} años`);
    };
}

let objPersona1 =  new Persona();
objPersona1.imprimirInfor();