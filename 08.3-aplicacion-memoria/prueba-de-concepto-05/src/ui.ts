import { cardsArray} from "./modelo";
export const cards = document.getElementsByClassName("card")
export let contadorCartasVolteadas = 0

//TODO: Entender para que sirve el idFoto, guardarse la 1ra y 2da carta y compararlas
export function cambiaSrc(i: number): void {
    const divCarta = document.querySelector(`.card[data-indice-id = "${i}"]`);
    console.log(divCarta);
    
    if (divCarta && divCarta instanceof HTMLElement){
        const cardImg = document.querySelector(`.card[data-indice-id = "${i}"]>.back>img`);

        if (cardImg && cardImg instanceof HTMLImageElement) {
            console.log(cardsArray[i].imagen);
            console.log(cardsArray[i].idFoto);
            
            
            cardImg.src = cardsArray[i].imagen
        }
    }
}

function cambiaEstado(card: Element): void {
    if (contadorCartasVolteadas <=1) {
        if (!card.classList.contains("clicked")) {
            contadorCartasVolteadas++
            card.classList.add("clicked")
        } else {
            contadorCartasVolteadas--
            card.classList.remove("clicked")
        }
    } else {
        if (card.classList.contains("clicked")) {
            contadorCartasVolteadas--
            card.classList.remove("clicked")
        }
    }
}

export function flipCard(card: Element, i: number): void  {
    cambiaSrc(i)
    cambiaEstado(card)
}
