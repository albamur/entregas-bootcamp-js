import "./style.css";
import { barajarCartasConsola } from "./motor";
import { flipCard, cards } from "./ui";

const btnEmpezarPartida = document.getElementById("empezarPartida")
if (btnEmpezarPartida && btnEmpezarPartida instanceof HTMLButtonElement) {
  btnEmpezarPartida.addEventListener("click", barajarCartasConsola)
}

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  if(card && card instanceof HTMLDivElement){
    card.addEventListener('click', () => { 
      flipCard(card,i)
    })
  }
}
