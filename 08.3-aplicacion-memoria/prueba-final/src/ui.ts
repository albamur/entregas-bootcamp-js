import { Tablero, tablero } from "./modelo";
import { esPartidaCompleta, iniciarPartidaMotor, parejaEncontrada, parejaNoEncontrada, sePuedeVoltearLaCarta, sonPareja, voltearLaCarta} from "./motor";
export const cards = document.getElementsByClassName("card")
export let contadorCartasVolteadas = 0

//*  1. Añadir eventos a las cartas: se llamará a la fn onDocumentLoaded
export const asignarEventosALasCartas = (): void => {
  const cartasUI = Array.from(document.getElementsByClassName('card'));
  cartasUI.forEach((carta, indice, array) => {
    if (carta && carta instanceof HTMLDivElement) {
      carta.addEventListener('click', () => {
        if (tablero.estadoPartida !== 'PartidaNoIniciada') {
          clickCarta(tablero, indice, carta, array);
        }
      });
    }
  });
};



//* 2. Iniciar partida
export const iniciarPartida = (): void => {
    iniciarPartidaMotor(tablero)
    iniciarPartidaUI()
    ocultarMensaje()
}

//* 2.1 Iniciar partida ui
const iniciarPartidaUI = (): void => {
    const cartasUI = Array.from(document.getElementsByClassName('card'));
    cartasBocaAbajo(cartasUI);
    ocultarMensaje();

    const tableroUI = document.getElementById("cards")

    if (tableroUI && tableroUI instanceof HTMLDivElement){
        tableroUI.style.display = "grid"
    }
};

//* 2.1.1 Dar la vuelta a las cartas
const cartasBocaAbajo = (cartas: Element[]): void => {
    cartas.forEach(carta => {
        if (carta && carta instanceof HTMLDivElement) {
            carta.dataset.estado = 'unselected';
        }
    });
};

//* 2.1.2 Ocultar el mensaje
const ocultarMensaje = (): void => {
    const mensaje = document.getElementById('mensaje');
    if (mensaje && mensaje instanceof HTMLHeadingElement &&
        !mensaje.classList.contains('hidden')
    ) {
        mensaje.textContent = ''
    }
};


//* 3. Click carta
export const clickCarta = (tablero: Tablero, i: number,  carta : Element, array: Element[]):void => {
    ocultarMensaje()

    if (sePuedeVoltearLaCarta(tablero, i)) {
        revelarCarta(tablero,carta,i)
        compararCartasLevantadas(tablero)
    } else if (tablero.cartas[i].estaVuelta && tablero.estadoPartida !== 'PartidaCompleta'){
        mostrarMensaje('Carta dada la vuelta, prueba a revelar otra')
    }

    if (esPartidaCompleta(tablero)  && tablero.estadoPartida !== 'PartidaCompleta') {
        tablero.estadoPartida = 'PartidaCompleta'
       
        setTimeout(() => {
            cartasGiratoriasAnimacion(array)
            mostrarMensaje('¡¡¡ENHORABUENA!!!')
        }, 1000);

        setTimeout(() => {
            cartasBocaAbajo(array)
        }, 4000);
    }
}

//* 3.1. Revelar carta
const revelarCarta = (tablero: Tablero, carta: Element, index: number): void => {
    voltearLaCarta(index, tablero);
    asignarSrc(index, tablero);
    cartaBocaArriba(carta);
};

//* 3.1.1 Carta boca Arriba
const cartaBocaArriba = (card: Element): void => {
    if (card && card instanceof HTMLDivElement) {
        card.dataset.estado = 'selected';
    }
};

//* 3.1.2 Cambio src de img
const asignarSrc = (i: number, tablero: Tablero): void => {
    const cardImg = document.querySelector(`.card[data-indice-id = "${i}"]>.back>img`);
    
    if (cardImg && cardImg instanceof HTMLImageElement) {
        cardImg.src = tablero.cartas[i].imagen;
    }
};

//* 3.2. Comparar cartas levantadas
const compararCartasLevantadas = (tablero: Tablero): void => {
    const indiceA = tablero.indiceCartaVolteadaA;
    const indiceB = tablero.indiceCartaVolteadaB;
    
    if (indiceA !== undefined &&
        indiceB !== undefined &&
        tablero.estadoPartida === 'DosCartasLevantadas'
    ) {
        actualizarIntentos()
        if(sonPareja(tablero, indiceA, indiceB)){
            parejaEncontrada(tablero, indiceA, indiceB)
        } else {
            setTimeout(() => {
                parejaNoEncontrada(tablero,indiceA,indiceB)
                const cartaA = document.querySelector(`.card[data-indice-id = "${indiceA}"]`);
                const cartaB = document.querySelector(`.card[data-indice-id = "${indiceB}"]`);
                
                if (cartaA && cartaA instanceof HTMLDivElement) {
                    cartaA.dataset.estado = 'unselected';
                }
                if (cartaB && cartaB instanceof HTMLDivElement) {
                    cartaB.dataset.estado = 'unselected';
                }
            }, 1000);
        }
    }
};

//* 3.3 mostrarMensaje
const mostrarMensaje = (texto : string): void => {
    
    const mensaje = document.getElementById('mensaje');
    if (mensaje && mensaje instanceof HTMLHeadingElement) {
        //mensaje.classList.remove('hidden');
        mensaje.textContent = texto
    }
};

//* 4. Animaciones
//Dar vueltas a las cartas
const cartasGiratoriasAnimacion = (cartas: Element[]): void => {
    cartas.forEach(carta => {
        if (carta && carta instanceof HTMLDivElement) {
            carta.dataset.estado = 'completed';
        }
    });
};

//* 5. Intentos
const actualizarIntentos = (): void => {
    tablero.intentos++
    const intentos = document.getElementById('intentos');
    if (intentos && intentos instanceof HTMLSpanElement) {
        intentos.textContent = tablero.intentos.toString();
    }
};