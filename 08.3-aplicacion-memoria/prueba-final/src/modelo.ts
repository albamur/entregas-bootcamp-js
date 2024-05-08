export interface Carta {
  idFoto: number;
  imagen: string; 
  estaVuelta: boolean;
  encontrada: boolean;
}

export interface InfoCarta {
  idFoto: number;
  imagen: string;
}

export const infoCartas: InfoCarta[] = [
    {
        idFoto: 1,
        imagen: `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png`
    },
    {
        idFoto: 2,
        imagen: `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png`
    },
    {
        idFoto: 3,
        imagen: `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png`
    },
    {
        idFoto: 4,
        imagen: `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png`
    },
    {
        idFoto: 5,
        imagen: `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png`
    },
    {
        idFoto: 6,
        imagen: `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png`
    }
]

const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
  idFoto,
  imagen,
  estaVuelta: false,
  encontrada: false,
});

const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
    let cartas: Carta[] = [];
    infoCartas.map(carta => {
        cartas.push(
            crearCartaInicial(carta.idFoto, carta.imagen),
            crearCartaInicial(carta.idFoto, carta.imagen)
        );
    });
    return cartas;
};

export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);

/*
  Aquí definimos el tipo de estado de la partida, la idea es que cuando empiece la partida todas las cartas estén boca abajo y si se hacen click sobre ellas no se volteen.
  EstadoPartida = "PartidaNoIniciada", una vez que se pulse Iniciar partida el estado de la partida cambiaría a "CeroCartasLevantadas" y así sucesivamente.
*/

export type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";

export interface Tablero {
  cartas: Carta[];
  estadoPartida: EstadoPartida;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
  intentos: number;
}

const crearTableroInicial = (): Tablero => ({
  cartas: cartas,
  estadoPartida: "PartidaNoIniciada",
  intentos: 0
});

export let tablero: Tablero = crearTableroInicial();