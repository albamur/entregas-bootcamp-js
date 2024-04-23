export const cards = document.querySelectorAll(".card")
export const arr = Array.from(cards)
export let contadorCartasVolteadas = 0


export function cambiaSrc(id:string) {
    const divCarta = document.querySelector(`.card[id-carta = "${id}"]`);

    if (divCarta && divCarta instanceof HTMLElement){
        const cardImg = document.querySelector(`.card[id-carta = "${id}"]>.back>img`);

        if (cardImg && cardImg instanceof HTMLImageElement) {
            cardImg.src = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/${id}.png`;

            flipCard(divCarta)
        }
    }
}


export function flipCard(divCarta: HTMLElement) {
    if (contadorCartasVolteadas <=1) {
        if (!divCarta.classList.contains("clicked")) {
            contadorCartasVolteadas++
            divCarta.classList.add("clicked")
        } else {
            contadorCartasVolteadas--
            divCarta.classList.remove("clicked")
        }
    } else {
        if (divCarta.classList.contains("clicked")) {
            contadorCartasVolteadas--
            divCarta.classList.remove("clicked")
        }
    }
}

