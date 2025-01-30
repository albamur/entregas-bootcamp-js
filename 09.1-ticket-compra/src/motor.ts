
import { LineaTicket, ResultadoLineaTicket, TipoIva, porcentajeIva,
    ResultadoTotalTicket,
    TotalPorTipoIva
 } from "./modelo";

 import { pintarLinea } from './ui'


export const calcularIva = (precio: number, tipoIva: TipoIva)=>{
    if (porcentajeIva[tipoIva] === null || porcentajeIva[tipoIva] === undefined) {
        console.error('porcentaje según TipoIva no encontrado')
    }
     const iva = precio * (porcentajeIva[tipoIva] /100)

      return parseFloat(iva.toFixed(2));
}


export const crearResultadoLineaTicket = (linea : LineaTicket) : ResultadoLineaTicket => {
    const precioSinIva = linea.producto.precio * linea.cantidad
    const precioConIva =  precioSinIva + calcularIva(linea.producto.precio,linea.producto.tipoIva)
    
    return {
        nombre: linea.producto.nombre,
        cantidad: linea.cantidad,
        precioSinIva: precioSinIva,
        tipoIva: linea.producto.tipoIva,
        precioConIva:  precioConIva
    }
}


export const crearResultadoTotalTicket = (totalSinIva:number, totalConIva: number, totalIva: number) : ResultadoTotalTicket => {
    return {
        totalSinIva: totalSinIva,
        totalConIva: totalConIva,
        totalIva: totalIva
    }
}


export const calculaTicket = (lineasTicket: LineaTicket[])=> {
    //lineas ticket
    const lineasTicketFinal: ResultadoLineaTicket[] = []
    let totalSinIva = 0
    let totalConIva = 0
    let totalIva = 0

    for (let i = 0; i < lineasTicket.length; i++) {
        //linea producto
        const resultadoLineaTicket = crearResultadoLineaTicket(lineasTicket[i])
        lineasTicketFinal.push(resultadoLineaTicket)

        //recuento totales
        totalSinIva = parseFloat((totalSinIva + resultadoLineaTicket.precioSinIva).toFixed(2));
        totalConIva = parseFloat((totalConIva + resultadoLineaTicket.precioConIva).toFixed(2));
        totalIva = parseFloat((totalConIva-totalSinIva).toFixed(2))

        //ui
        pintarLinea('table-products',[
            resultadoLineaTicket.nombre,
            resultadoLineaTicket.cantidad.toString(),
            resultadoLineaTicket.precioSinIva.toString(),
            resultadoLineaTicket.tipoIva,
            resultadoLineaTicket.precioConIva.toString()
        ])
    }
        
    //totales ticket
    const resultadoTotalTicket: ResultadoTotalTicket = crearResultadoTotalTicket(totalSinIva,totalConIva,totalIva)
    const totalTicketFinal = resultadoTotalTicket
    pintarLinea('table-totals',[
                'TOTAL',
                '',
                totalSinIva.toString(),
                totalIva.toString(),
                totalConIva.toString()
    ])

    //desglose por tipo IVA ticket
    const desgloseTotalesIva: TotalPorTipoIva[] = []
    let key: keyof typeof porcentajeIva;
    for (key in porcentajeIva) {
        if (porcentajeIva.hasOwnProperty(key)) {
            let nuevoTotal = {
                tipoIva: key as TipoIva,
                cuantia: (totalSinIva * porcentajeIva[key]) / 100,
            }
            desgloseTotalesIva.push(nuevoTotal)
            pintarLinea('table-totals',[
                nuevoTotal.tipoIva,
                '',
                '-',
                '-',
                nuevoTotal.cuantia.toString()
            ])
        }
        
    }
    const desgloseIva = desgloseTotalesIva
    
    

    return {
        lineas: lineasTicketFinal,
        total: totalTicketFinal,
        desgloseIva:desgloseIva
    }

};