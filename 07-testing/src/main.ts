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

import {
    pedirCarta,
    comenzarPartida,
    plantarse,
    reset
} from './ui';


document.addEventListener("DOMContentLoaded", comenzarPartida);

const btnReset = document.getElementById("reset")
if (btnReset && btnReset instanceof HTMLButtonElement) {
    btnReset.addEventListener("click", reset);
}


const btnCogerCarta = document.getElementById("cogerCarta")
if (btnCogerCarta && btnCogerCarta instanceof HTMLButtonElement) {
    btnCogerCarta.addEventListener("click", pedirCarta);
}

const btnPlantarse = document.getElementById("plantarse")
if (btnPlantarse && btnPlantarse instanceof HTMLButtonElement) {
    btnPlantarse.addEventListener("click", plantarse);
}












///-----------------------------













