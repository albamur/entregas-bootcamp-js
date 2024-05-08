import "./style.css";
import { iniciarPartida, asignarEventosALasCartas } from "./ui";

// Btn Empezar Partida que inicia la partida
const btnEmpezarPartida = document.getElementById("empezarPartida")
if (btnEmpezarPartida && btnEmpezarPartida instanceof HTMLButtonElement) {
  btnEmpezarPartida.addEventListener("click", iniciarPartida)
}

// Asignar eventos a las cartas nada más se cargue la página
document.addEventListener('DOMContentLoaded', asignarEventosALasCartas);