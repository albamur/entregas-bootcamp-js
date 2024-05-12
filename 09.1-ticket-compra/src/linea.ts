import { LineaTicket, ResultadoLineaTicket, TipoIva } from "./modelo";


export const crearResultadoLineaTicket = (linea : LineaTicket) : ResultadoLineaTicket => {
    const producto = linea.producto
    const cantidad = linea.cantidad
    const resultadoLinea = {
        nombre: producto.nombre,
        cantidad: cantidad,
        precioSinIva: producto.precio,
        tipoIva: producto.tipoIva,
        precioConIva: 0,
    }
    resultadoLinea.precioConIva = calcularIva(resultadoLinea.precioSinIva, resultadoLinea.tipoIva)
    return resultadoLinea
}

const calcularIva = (precio : number, iva : TipoIva) : number => {
    let porcentaje = 0
    switch (iva) {
        case 'general':
            porcentaje = 21
            break;
        
        case 'reducido':
            porcentaje = 10
            break;

        case 'superreducidoA':
            porcentaje = 5
            break;

        case 'superreducidoB':
            porcentaje = 4
            break;

        case 'superreducidoC':
            porcentaje = 0
            break;

        case 'sinIva':
            porcentaje = 0
            break;
        default:
            break;
    }
    return precio + (precio * porcentaje / 100)
}

/*
const calculaTicket2 = (lineasTicket: LineaTicket[], arrayIvas: Iva[]) : ResultadoLineaTicket[] => {
    let arrayResultados:ResultadoLineaTicket[] = []
    for (let i = 0; i < lineasTicket.length; i++) {
        let element = lineasTicket[i]


        function x (): number {
                const result = arrayIvas.find((iva) => iva.tipo === element.producto.tipoIva)
                if (result) {
                    console.log(result.porcentaje);
                    return element.producto.precio * result.porcentaje / 100
                } else { return 0 }
                
            }

        let elementoResultado = {
            nombre: element.producto.nombre,
            cantidad: element.cantidad,
            precioSinIva: element.producto.precio,
            tipoIva: element.producto.tipoIva,
            precioConIva: x()
                
            
        }
        
        arrayResultados.push(elementoResultado)
       
        
    }
    
    return arrayResultados
};
console.log(calculaTicket2(productos,arrayIvas))
*/