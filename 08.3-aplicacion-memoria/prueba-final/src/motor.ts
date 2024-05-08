import { Carta, Tablero, tablero } from "./modelo";

//* 1. Iniciar partida
console.log(tablero);
export const iniciarPartidaMotor = (tablero: Tablero): void => {
  resetearTodasLasCartas(tablero)
  resetearIndiceCartas(tablero)
  tablero.estadoPartida = 'CeroCartasLevantadas'
  tablero.cartas = barajarCartas(tablero.cartas);
};

    //* 1.1 Resets: poner todos los valores de forma predeterminada
    const resetearTodasLasCartas = (tablero: Tablero) => {
      tablero.cartas.forEach(carta => {
          carta.estaVuelta = false;
          carta.encontrada = false;
      });
    };

    export const resetearIndiceCartas = (tablero: Tablero): void => {
      tablero.indiceCartaVolteadaA = undefined;
      tablero.indiceCartaVolteadaB = undefined;
    };

    //* 1.2 BarajarCartas: baraja un array de 12 elementos formado por la unión de 2 arrays : infoCartas[] de 6 elementos cada uno (ver modelo.ts)
    export function barajarCartas(array : Carta[]) : Carta[] {
        // Algoritmo de Fisher-Yates:
        // Recorrer el array en sentido inverso e intercambiar cada elemento con un elemento aleatorio anterior
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // índice aleatorio entre 0 e i
            // lo mismo puede ser escrito como:
            // let t = array[i]; array[i] = array[j]; array[j] = t
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }




//* 2.1 Comprobar que una carta se puede voltear
//Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {  
    return tablero.estadoPartida !== 'DosCartasLevantadas' && !tablero.cartas[indice].estaVuelta
}

//* 2.2 Voltear una carta
export const voltearLaCarta = (indice: number, tablero: Tablero): void => {
  if (tablero.estadoPartida === 'CeroCartasLevantadas') {
    voltearCartaA(indice, tablero);
  } else if (tablero.estadoPartida === 'UnaCartaLevantada') {
    voltearCartaB(indice, tablero);
  }
};

const voltearCartaA = (indice: number, tablero: Tablero): void => {
  tablero.indiceCartaVolteadaA = indice;
  tablero.cartas[indice].estaVuelta = true;
  tablero.estadoPartida = 'UnaCartaLevantada'
};

const voltearCartaB = (indice: number, tablero: Tablero): void => {
  tablero.indiceCartaVolteadaB = indice;
  tablero.cartas[indice].estaVuelta = true;
 tablero.estadoPartida = 'DosCartasLevantadas'
};



//* 3.1 Comprobar que dos cartas son pareja
// Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
export const sonPareja = (tablero: Tablero, indiceA: number, indiceB: number): boolean => {
  return tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto
}

//* 3.2 Acciones si dos cartas son pareja o no
//Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
export const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {
    tablero.cartas[indiceA].encontrada = true;
    tablero.cartas[indiceB].encontrada = true;
    resetearIndiceCartas(tablero)
    tablero.estadoPartida = 'CeroCartasLevantadas'
}


//Aquí asumimos que no son pareja y las volvemos a poner boca abajo
export const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {
    tablero.cartas[indiceA].estaVuelta = false;
    tablero.cartas[indiceB].estaVuelta = false;
    resetearIndiceCartas(tablero)
    tablero.estadoPartida = 'CeroCartasLevantadas'
}


//* 4.2 Comprobar partida completa
//Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
export const esPartidaCompleta = (tablero: Tablero): boolean => {
  return tablero.cartas.every(carta => carta.encontrada);
};




