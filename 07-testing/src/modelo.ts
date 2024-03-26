interface Partida {
    contadorJugador: number
}

export const partida: Partida = {
    contadorJugador: 0
}

export type Resultado =
    | "Has sido muy conservador"
    | "Te ha entrado el canguelo eh?"
    | "Casi casi..."
    | "¡Lo has clavado! ¡Enhorabuena!"
    | 'Game Over'
    | '¿Quieres plantarte con lo que tienes?'
    | 'Resetea para volver a jugar'