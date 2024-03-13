import "./style.css";

// REGLAS DEL JUEGO
/**
Para jugar al juego de las siete y media en solitario, sigue estos pasos:

    - Baraja una baraja española de 40 cartas y coloca las cartas boca abajo sobre la mesa.

    - Gira la primera carta y colócala boca arriba en la mesa. Esta carta será la carta del jugador.

    - Decide si deseas tomar otra carta o quedarte con la que tienes. El objetivo del juego es tener una mano que sume 7 y media puntos o lo más cerca posible de este número sin pasarse.

    - Si decides tomar otra carta, gira la siguiente carta boca arriba. Añade el valor de esta carta a tu mano y decide si deseas tomar otra carta o quedarte con lo que tienes. Puedes tomar tantas cartas como desees, pero si la suma de los valores de las cartas de tu mano supera los 7,5 puntos, pierdes automáticamente la partida.

    - Si decides quedarte con la carta que tienes, tu turno termina. Anota tu puntuación y pasa al siguiente turno.

    - Continúa jugando hasta que hayas jugado todas las cartas de la baraja o decidas detenerte.

    - Si logras una mano con una puntuación de 7 y media, has ganado el juego. Si no, tu objetivo es obtener la mano con la puntuación más cercana a 7 y media.

Es importante recordar que las cartas numéricas valen su valor nominal, es decir, el As (uno de cada palo) vale 1 punto, las cartas del 2 al 7 valen su valor nominal y las figuras (sota, caballo y rey) valen medio punto cada una.
 */
let contadorJugador = 0

const divBarajaJugador = document.getElementById("barajaJugador")
document.addEventListener("DOMContentLoaded", comenzarPartida);

const btnReset = document.getElementById("reset")
if (btnReset && btnReset instanceof HTMLButtonElement) {
    btnReset.addEventListener("click", comenzarPartida);
}

function comenzarPartida(){

    contadorJugador = 0

    if(divBarajaJugador && divBarajaJugador instanceof HTMLDivElement){
        divBarajaJugador.innerHTML = ''
    }

    pintarResultado('')
    
    btnCogerCartaActivado(true)
    btnInicioActivado(false)
}



const btnCogerCarta = document.getElementById("cogerCarta")
if (btnCogerCarta && btnCogerCarta instanceof HTMLButtonElement) {
    btnCogerCarta.addEventListener("click", pedirCarta);
}

function pedirCarta() {
    //Crear número aleatorio
    const numeroAleatorio = crearNumeroAleatorio()
    //Transformar el número a carta
    const carta = transformarNumeroAleatorioACarta(numeroAleatorio)
    //Transformar carta a url
    const url = transformarCartaAUrl(carta)
    //Añadir url a src de la img
    pintarUrlDeLaCarta(url)
    //Sumar valor carta al contador
    contadorJugador = sumarValorCartaAContador(carta)
    //Añadir contador al prf
    pintarContador(contadorJugador)
    //CComprobar puntuación partida
    const resultado = comprobarPartida()
    //Pintar resultado
    pintarResultado(resultado)
    //Reactivar el boton de inicio
    btnInicioActivado(true)
}


const btnPlantarse = document.getElementById("plantarse")
if (btnPlantarse && btnPlantarse instanceof HTMLButtonElement) {
    btnPlantarse.addEventListener("click", plantarsePartida);
}

function plantarsePartida() {
    btnCogerCartaActivado(false)
    //Comprobar puntuación
    let msg=''
    if(contadorJugador < 4) {
        msg = "Has sido muy conservador"
    } else if (contadorJugador >= 4 && contadorJugador <= 5) {
        msg = "Te ha entrado el canguelo eh?"
    } else if (contadorJugador > 5 && contadorJugador <= 7){
        msg = "Casi casi..."
    } 

    //Pintar el resultado
    pintarResultado(msg)
    btnInicioActivado(true)
}



///-----------------------------

function crearNumeroAleatorio(): number {
    return Math.floor(Math.random()*(11-1)+1);
}

function transformarNumeroAleatorioACarta(numeroAleatorio: number) :number {
    if (numeroAleatorio > 7) {
        return numeroAleatorio + 2
    }

    return numeroAleatorio
}

function transformarCartaAUrl(carta: number) : string{
    switch (carta) {
        case 1:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg'
        case 2:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg'
        case 3:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg'
        case 4:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg'
        case 5:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg'
        case 6:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg'
        case 7:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg'
        case 10:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg'
        case 11:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg'
        case 12:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg'
        default:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg`
    }
}

function pintarUrlDeLaCarta(url: string) : void{
    
    if(divBarajaJugador && divBarajaJugador instanceof HTMLDivElement){
        const imgCarta = document.createElement("img")

        if(imgCarta && imgCarta instanceof HTMLImageElement){
            imgCarta.src = url
            imgCarta.className = 'cartaJugador'
        }
        divBarajaJugador.appendChild(imgCarta)
    }
}

function sumarValorCartaAContador(carta:number) {
    if (carta > 7) {
        return contadorJugador + 0.5
    }
    return contadorJugador + carta
}

function pintarContador(contadorActualizado:number) : void{
    const prfNumJugador = document.getElementById("numero")
    if (prfNumJugador && prfNumJugador instanceof HTMLParagraphElement) {
        prfNumJugador.innerHTML = "Puntuación jugador: " + contadorActualizado + ""
    }
}

function comprobarPartida() :string {
    if (contadorJugador > 7.5) {
        btnCogerCartaActivado(false)
        btnInicioActivado(true)
        return "Game Over"
    }

    if(contadorJugador === 7.5) {
        btnCogerCartaActivado(false)
        btnInicioActivado(true)
        return "¡Lo has clavado! ¡Enhorabuena!"
    }

    return '¿Quieres plantarte con lo que tienes?'
}

function pintarResultado(mensaje: string) : void{
    const prfResultado = document.getElementById("resultado")
    console.log(mensaje);
    
    if(prfResultado && prfResultado instanceof HTMLHeadingElement){
        prfResultado.innerHTML = mensaje
        console.log(prfResultado.innerHTML);
    }
}

function btnInicioActivado(activado: boolean) {
    const btnInicio = document.getElementById("inicio")
    if (btnInicio && btnInicio instanceof HTMLButtonElement) {
        if (activado == true) {
            btnInicio.removeEventListener('click', comenzarPartida)
            btnInicio.style.display = 'none'
        } else if (activado == false) {
            btnInicio.addEventListener('click', comenzarPartida)
            btnInicio.style.display = ''
        }
    }  
}

const prfCogeCarta = document.getElementById("txtCogeCarta")
function btnCogerCartaActivado(activado: boolean) {
    if ((btnCogerCarta && btnCogerCarta instanceof HTMLImageElement) && (prfCogeCarta && prfCogeCarta instanceof HTMLParagraphElement)) {
        if (activado == true) {
            btnCogerCarta.addEventListener('click', pedirCarta)
            prfCogeCarta.innerHTML = 'Coge una carta'
        } else if (activado == false) {
            btnCogerCarta.removeEventListener('click', pedirCarta)
            prfCogeCarta.innerHTML = ''
        }
    }  
}
