import { finalizarPartida } from "./motor";
import { Resultado } from "./modelo";
import { beforeEach, vi } from "vitest"
import { partida } from "./modelo";
import { crearNumeroAleatorio, transformarNumeroAleatorioACarta } from "./motor";


describe('finalizarPartida', () => {
    beforeEach(() => {
        vi.spyOn(partida, "contadorJugador", "get").mockReturnValue(0);
    })


    it("Debería devolver '¡Lo has clavado! ¡Enhorabuena!' si el contador es igual a 7.5", () => {
        // Arrange
        const mensajeEsperado : Resultado = "¡Lo has clavado! ¡Enhorabuena!" 
        // Act
        const resultado = finalizarPartida()
        // Assert
        expect(resultado).toBe(mensajeEsperado)
    })

    it("Debería devolver 'Has sido muy conservador' si el contador es menor que 4", () => {
        // Arrange
        const mensajeEsperado : Resultado = "Has sido muy conservador" 
        // Act
        const resultado = finalizarPartida()
        // Assert
        expect(resultado).toBe(mensajeEsperado)
    })

    it("Debería devolver 'Te ha entrado el canguelo eh?' si el contador está entre 4 y 5 incluidos", () => {
        // Arrange
        const mensajeEsperado : Resultado = "Te ha entrado el canguelo eh?" 
        // Act
        const resultado = finalizarPartida()
        // Assert
        expect(resultado).toBe(mensajeEsperado)
    })

    it("Debería devolver 'Casi casi...' si el contador está entre 5 y 7 incluidos", () => {
        // Arrange
        const mensajeEsperado : Resultado = "Casi casi..." 
        // Act
        const resultado = finalizarPartida()
        // Assert
        expect(resultado).toBe(mensajeEsperado)
    })

    it("Debería devolver 'Game Over' si el contador es mayor que 7.5 ", () => {
        // Arrange
        const mensajeEsperado : Resultado = "Game Over" 
        // Act
        const resultado = finalizarPartida()
        // Assert
        expect(resultado).toBe(mensajeEsperado)
    })
})

describe('crearNumeroAleatorio', () => {
    it('MathRandom lo forzamos a que devuelva 0, debería de devolver 1', () => {
        // Arrange
        const numeroEsperado = 1;

        vi.spyOn(global.Math, 'random').mockReturnValue(0);

        // Act
        const resultado = crearNumeroAleatorio()

        // Assert
        expect(resultado).toBe(numeroEsperado)
    })

    it('MathRandom lo forzamos a que devuelva 0.999, debería de devolver 10', () => {
        // Arrange
        const numeroEsperado = 10;

        vi.spyOn(global.Math, 'random').mockReturnValue(0.9999);

        // Act
        const resultado = crearNumeroAleatorio()

        // Assert
        expect(resultado).toBe(numeroEsperado)
    })
})


describe('transformarNumeroAleatorioACarta', () => {
    it('transformarNumeroAleatorioACarta debe devolver el numero aleatorio que recibe si es menor o igual que 7', () => {
        // Arrange
        const numeroEsperado = 5;
        // Act
        const  resultado = transformarNumeroAleatorioACarta(5)
        // Assert
        expect(resultado).toBe(numeroEsperado)
    })

    it('transformarNumeroAleatorioACarta debe devolver el numero aleatorio que recibe si es menor o igual que 7', () => {
        // Arrange
        const numeroEsperado = 7;
        // Act
        const  resultado = transformarNumeroAleatorioACarta(7)
        // Assert
        expect(resultado).toBe(numeroEsperado)
    })

    it('transformarNumeroAleatorioACarta debe devolver el numero aleatorio que recibe + 2 si es mayor que 7', () => {
        // Arrange
        const numeroEsperado = 10;
        // Act
        const  resultado = transformarNumeroAleatorioACarta(8)
        // Assert
        expect(resultado).toBe(numeroEsperado)
    })
})