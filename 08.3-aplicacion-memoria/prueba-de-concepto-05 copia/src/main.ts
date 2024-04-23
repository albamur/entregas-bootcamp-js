import "./style.css";
import { barajarCartasConsola } from "./motor";
import { cambiaSrc, arr } from "./ui";

const btnEmpezarPartida = document.getElementById("empezarPartida")
btnEmpezarPartida?.addEventListener("click", barajarCartasConsola)




arr.forEach(card => {
  const id_carta = card.getAttribute('id-carta')
  card.addEventListener('click', () => {
    if (typeof id_carta === 'string') {
        cambiaSrc(id_carta)
    }
  })
})

//cards.forEach(card => card.addEventListener('click', cambiaSrc));
//export const cards = document.querySelectorAll('.card')


/*
if(btnCard && btnCard instanceof HTMLDivElement){
    btnCard.addEventListener("click",cambiaSrc)
}



}

export const cards = document.getElementsByClassName("card")

*/


/*
<div class="card">
    <div class="front"></div>
    <div class="back"><img src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png" /></div>
</div>
*/


/**
 * 

.front,
.back,
.card {
  padding: 0;
  width: 100px;
  height: 100px;
  border-radius: 10px;
}

.front,
.back {
  padding: 10px;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.front {
  background-color: lightblue;
  z-index: 2;
  transform: rotateY(0deg);
  transition: all 0.4s linear;
}

.back {
  background-color: #747bff;
  transition: all 0.4s linear;
  transform: rotateY(180deg);
}

.card {
  position: relative;
  padding: 10px;
}

.clicked .front {
  transform: rotateY(180deg);
}

.clicked .back {
  transform: rotateY(360deg);
}

.card div img {
  width: 100%;
}


 */