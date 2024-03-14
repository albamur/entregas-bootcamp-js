import {Resultado, partida} from './modelo';
import {
    crearNumeroAleatorio,
    sumarValorCartaAContador,
    transformarCartaAUrl,
    transformarNumeroAleatorioACarta,
    finalizarPartida
} from './motor';

export function comenzarPartida(): void{
    btnCogerCartaActivado(true)
    btnInicioActivado(false)
}

export function reset() :void {
    partida.contadorJugador = 0
    pintarContador(partida.contadorJugador)
    borrarCartasBarajaJugador()
    pintarResultado('')
    btnInicioActivado(true)
}

export function pedirCarta() : void {
    //Crear número aleatorio
    const numeroAleatorio = crearNumeroAleatorio()
    //Transformar el número a carta
    const carta = transformarNumeroAleatorioACarta(numeroAleatorio)
    //Transformar carta a url
    const url = transformarCartaAUrl(carta)
    //Añadir url a src de la img
    pintarUrlDeLaCarta(url)
    //Sumar valor carta al contador
    partida.contadorJugador = sumarValorCartaAContador(carta)
    //Añadir contador al prf
    pintarContador(partida.contadorJugador)
    //CComprobar puntuación partida
    const resultado = comprobarPartida()
    //Pintar resultado
    pintarResultado(resultado)
}

export function plantarse() {
    btnCogerCartaActivado(false)
    
    const msg = finalizarPartida()
    //Pintar el resultado
    pintarResultado(msg)
}

export function comprobarPartida() :Resultado {
    if (partida.contadorJugador > 7.5) {
        btnCogerCartaActivado(false)
        btnInicioActivado(true)
        return "Game Over"
    }

    if(partida.contadorJugador === 7.5) {
        btnCogerCartaActivado(false)
        btnInicioActivado(true)
        return "¡Lo has clavado! ¡Enhorabuena!"
    }

    return '¿Quieres plantarte con lo que tienes?'
}


const divBarajaJugador = document.getElementById("barajaJugador")

export function borrarCartasBarajaJugador() : void{
    if(divBarajaJugador && divBarajaJugador instanceof HTMLDivElement){
        divBarajaJugador.innerHTML = ''
    }
}


export function pintarUrlDeLaCarta(url: string) : void{
    if(divBarajaJugador && divBarajaJugador instanceof HTMLDivElement){
        const imgCarta = document.createElement("img")

        if(imgCarta && imgCarta instanceof HTMLImageElement){
            imgCarta.src = url
            imgCarta.className = 'cartaJugador'
        }
        divBarajaJugador.appendChild(imgCarta)
    }
}


export function pintarContador(contadorActualizado:number) : void{
    const prfNumJugador = document.getElementById("numero")
    if (prfNumJugador && prfNumJugador instanceof HTMLParagraphElement) {
        prfNumJugador.innerHTML = "Puntuación jugador: " + contadorActualizado + ""
    }
}

export function pintarResultado(mensaje: string) : void{
    const prfResultado = document.getElementById("resultado")
    console.log(mensaje);
    
    if(prfResultado && prfResultado instanceof HTMLHeadingElement){
        prfResultado.innerHTML = mensaje
        console.log(prfResultado.innerHTML);
    }
}

const prfCogeCarta = document.getElementById("txtCogeCarta")
const btnCogerCarta = document.getElementById("cogerCarta")
export function btnCogerCartaActivado(activado: boolean) {
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

export function btnInicioActivado(activado: boolean) {
    const btnInicio = document.getElementById("inicio")
    if (btnInicio && btnInicio instanceof HTMLButtonElement) {
        if (activado == false) {
            btnInicio.removeEventListener('click', comenzarPartida)
            btnInicio.style.display = 'none'
        } else if (activado == true) {
            btnInicio.addEventListener('click', comenzarPartida)
            btnInicio.style.display = ''
        }
    }  
}



