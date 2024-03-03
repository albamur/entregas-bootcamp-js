import "./style.css";

let contadorElement = document.getElementById('contador')

// Suma
const botonSumar = document.getElementById("sumar");
if( botonSumar !== null && botonSumar !== undefined){
    botonSumar.addEventListener("click", suma);
}

function suma () {
    if( contadorElement !== null && contadorElement !== undefined){
        let sumaContador = parseInt(contadorElement.innerHTML)+1
        contadorElement.innerHTML = sumaContador.toString().padStart(2,"0")
    }
}

// Resta
const botonRestar = document.getElementById("restar");
if( botonRestar !== null && botonRestar !== undefined){
    botonRestar.addEventListener("click", resta);
}

function resta () {
    if( contadorElement !== null && contadorElement !== undefined){
        let restaContador = parseInt(contadorElement.innerHTML)-1
        contadorElement.innerHTML = restaContador.toString().padStart(2,"0")
    }
}

// Borrar
const botonBorrar = document.getElementById("borrar");
if( botonBorrar !== null && botonBorrar !== undefined){
    botonBorrar.addEventListener("click", borrar);
}

function borrar () {
    if( contadorElement !== null && contadorElement !== undefined){
        contadorElement.innerHTML = "00"
    }
}

