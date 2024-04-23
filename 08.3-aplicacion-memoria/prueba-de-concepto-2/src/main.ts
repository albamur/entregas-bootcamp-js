import "./style.css";
import { barajarCartasConsola } from "./motor";
import { flipCard, divCarta } from "./ui";

const btnEmpezarPartida = document.getElementById("empezarPartida")
if (btnEmpezarPartida && btnEmpezarPartida instanceof HTMLButtonElement) {
  btnEmpezarPartida.addEventListener("click", barajarCartasConsola)
}

if(divCarta && divCarta instanceof HTMLDivElement){
  divCarta.addEventListener('click', flipCard)
}
