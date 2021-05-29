
function tablaDeMultiplicar(n) {

//let n = 6;

for (let i = 0; i < 13 ; i++) {
   console.log(`${n} x ${i} = ${i*n}`);
    
}

}

tablaDeMultiplicar(12);


function factorial(n) {
    let total = 1;
        for (let i = n; i>0 ; i--) {
            total = total * i;
            
        }

        return total;
}

factorial(5)

function configurar() {
    console.log("configurando ...")
}

function sumar(a,b) {
    return a+b;
    
}

let suma7y8 = sumar(7,8);


function validarPasswotd(ps1,ps2) {
    if (ps1 === ps2 && ps1.length >=6) {
        return true
        
    }
    return false
    
}