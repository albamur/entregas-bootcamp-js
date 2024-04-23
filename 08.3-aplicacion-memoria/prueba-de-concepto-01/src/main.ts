import "./style.css";
import { barajarCartasConsola } from "./motor";

const btnEmpezarPartida = document.getElementById("empezarPartida")
btnEmpezarPartida?.addEventListener("click", barajarCartasConsola)
