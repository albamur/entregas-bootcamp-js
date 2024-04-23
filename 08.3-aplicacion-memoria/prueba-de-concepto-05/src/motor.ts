
import { cardsArray, InfoCarta} from "./modelo";

export function shuffle(array : InfoCarta[]) : InfoCarta[] {
    // Algoritmo de Fisher-Yates:
    // Recorrer el array en sentido inverso e intercambiar cada elemento con un elemento aleatorio anterior
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // índice aleatorio entre 0 e i
        // lo mismo puede ser escrito como:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

export let arrayCartas: InfoCarta[] = []

export function barajarCartasConsola () {
    arrayCartas = [...shuffle(cardsArray)]
    console.log(arrayCartas);
}