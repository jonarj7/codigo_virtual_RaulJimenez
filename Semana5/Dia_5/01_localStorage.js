const formulario = document.querySelector("#formulario");
const inputColor = document.querySelector("#inputColor");
const btnGuard = document.querySelector("#btnGuard");
const btnBorrow = document.querySelector("#btnBorrow");
const body = document.querySelector("body");

formulario.onsubmit = (e) => {
    e.preventDefault();
    const color = inputColor.value;

    body.style.backgroundColor = color;
    localStorage.setItem("colorFondo",color);
};

(()=>{
    if (localStorage.getItem("colorFondo")) {
        body.style.backgroundColor = localStorage.getItem("colorFondo");
        inputColor.value = localStorage.getItem("colorFondo");
    }
})();

btnBorrar.onclick = () => {
    localStorage.removeItem("colorFondo");
    body.style.backgroundColor ="#fff";
    inputColor.value="#00";
};