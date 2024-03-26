import {partida, Resultado} from './modelo';

export function crearNumeroAleatorio(): number {
    return Math.floor(Math.random()*(11-1)+1);
}

export function transformarNumeroAleatorioACarta(numeroAleatorio: number) :number {
    if (numeroAleatorio > 7) {
        return numeroAleatorio + 2
    }

    return numeroAleatorio
}


export function transformarCartaAUrl(carta: number) : string{
    switch (carta) {
        case 1:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg'
        case 2:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg'
        case 3:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg'
        case 4:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg'
        case 5:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg'
        case 6:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg'
        case 7:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg'
        case 10:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg'
        case 11:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg'
        case 12:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg'
        default:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg`
    }
}

export function sumarValorCartaAContador(carta:number) {
    if (carta > 7) {
        return partida.contadorJugador + 0.5
    }
    return partida.contadorJugador + carta
}


export function finalizarPartida(): Resultado {
    //Comprobar puntuación
    if(partida.contadorJugador === 7.5) {
        return "¡Lo has clavado! ¡Enhorabuena!"
    } else if(partida.contadorJugador >= 0 && partida.contadorJugador < 4) {
        return "Has sido muy conservador"
    } else if (partida.contadorJugador >= 4 && partida.contadorJugador <= 5) {
        return "Te ha entrado el canguelo eh?"
    } else if (partida.contadorJugador > 5 && partida.contadorJugador <= 7){
        return "Casi casi..."
    } else {
        return "Game Over"
    }
}
