import { ResultadoLineaTicket, TipoIva, TotalPorTipoIva } from "./modelo";


export const crearResultadoTotalPorTipoIva = (tipoIva : TipoIva, resultadosLineaTicket: ResultadoLineaTicket[]) : TotalPorTipoIva => {
    const resultadoTotal = {
        tipoIva: tipoIva,
        cuantia : calcularTotalPorTipoIva(tipoIva,resultadosLineaTicket)
    }
    console.log(resultadoTotal);
    return resultadoTotal
}



const calcularTotalPorTipoIva = (tipoIva : TipoIva, resultadosLineaTicket : ResultadoLineaTicket[]) : number => {
    let total = 0
    resultadosLineaTicket.forEach((e)=> {
        if (tipoIva == e.tipoIva){
            total = total + e.precioConIva
        }
    })
    return total;
}