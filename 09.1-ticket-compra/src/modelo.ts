
export type TipoIva =
  | "general"
  | "reducido"
  | "superreducidoA"
  | "superreducidoB"
  | "superreducidoC"
  | "sinIva";



interface Producto {
  nombre: string;
  precio: number;
  tipoIva: TipoIva;
}

export interface LineaTicket {
  producto: Producto;
  cantidad: number;
}

export const productos: LineaTicket[] = [
  {
    producto: {
      nombre: "Legumbres",
      precio: 2,
      tipoIva: "general",
    },
    cantidad: 2,
  },
  {
    producto: {
      nombre: "Perfume",
      precio: 20,
      tipoIva: "general",
    },
    cantidad: 3,
  },
  {
    producto: {
      nombre: "Leche",
      precio: 1,
      tipoIva: "superreducidoC",
    },
    cantidad: 6,
  },
  {
    producto: {
      nombre: "Lasaña",
      precio: 5,
      tipoIva: "superreducidoA",
    },
    cantidad: 1,
  },
];

//CREAR ESTA UNA FUNCION QUE RELLENE DIRECTAMENTE ESTA INTERFACE EN VEZ DE HACERLO MANUALMENTE POR UI

export interface ResultadoLineaTicket {
  nombre: string;
  cantidad: number;
  precioSinIva: number;
  tipoIva: TipoIva;
  precioConIva: number;
}

export interface ResultadoTotalTicket {
  totalSinIva: number;
  totalConIva: number;
  totalIva: number;
}

export interface TotalPorTipoIva {
  tipoIva: TipoIva;
  cuantia : number;
}
/*
interface TicketFinal {
  lineas: ResultadoLineaTicket[];
  total: ResultadoTotalTicket;
  desgloseIva: TotalPorTipoIva[];
}






/*
const crearTicketFinal = (): TicketFinal => ({
  lineas: ResultadoLineaTicket[],
  total: ResultadoTotalTicket;
  desgloseIva: TotalPorTipoIva[];
});
*/

//export let ticket: TicketFinal = crearTicketFinal();



export interface Iva {
    tipo: TipoIva;
    porcentaje: number;
}
export const arrayIvas: Iva[] = [
    {
        tipo: 'general',
        porcentaje: 21
    },
    {
        tipo: 'reducido',
        porcentaje: 10
    },
    {
        tipo: 'superreducidoA',
        porcentaje: 5
    },
    {
        tipo: 'superreducidoB',
        porcentaje: 4
    },
    {
        tipo: 'superreducidoC',
        porcentaje: 0
    },
    {
        tipo: 'sinIva',
        porcentaje: 0
    }
]

export let resultadosLineaTicket : ResultadoLineaTicket[] = []

export let resultadosTotalesPorTipoIva : TotalPorTipoIva[] = []
export let listaDeTiposIvas: TipoIva [] = ['general','reducido','sinIva','superreducidoA','superreducidoB','superreducidoC'];