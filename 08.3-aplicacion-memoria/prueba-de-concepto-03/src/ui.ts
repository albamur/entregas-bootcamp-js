export const divCarta = document.getElementById("card")

function cambiaSrc(): void {
    if (divCarta && divCarta instanceof HTMLElement){
        const cardImg = document.querySelector(`.card>.back>img`);

        if (cardImg && cardImg instanceof HTMLImageElement) {
            cardImg.src = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png`;
        }
    }
}


function cambiaEstado(): void {
    if (divCarta && divCarta instanceof HTMLElement){
        if (!divCarta.classList.contains("clicked")) {
            divCarta.classList.add("clicked")
        } else {
            divCarta.classList.remove("clicked")
        }
    }
}

export function flipCard(): void {
    cambiaSrc()
    cambiaEstado()
}
