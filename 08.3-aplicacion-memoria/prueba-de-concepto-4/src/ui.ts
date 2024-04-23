export const cards = document.getElementsByClassName("card")
export let contadorCartasVolteadas = 0


export function cambiaSrc(i: number): void {

    const divCarta = document.querySelector(`.card[id-carta = "${i}"]`);

    if (divCarta && divCarta instanceof HTMLElement){
        const cardImg = document.querySelector(`.card[id-carta = "${i}"]>.back>img`);

        if (cardImg && cardImg instanceof HTMLImageElement) {
            cardImg.src = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png`;
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
