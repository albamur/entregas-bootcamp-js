import { ResultadoLineaTicket, ResultadoTotalTicket, TotalPorTipoIva } from "./modelo";


export const crearResultadoTotalTicket = (resultadosLineaTicket : ResultadoLineaTicket[]) : ResultadoTotalTicket => {
    const resultadoTotal = {
        totalSinIva: calcularTotalSinIva(resultadosLineaTicket),
        totalConIva: calcularTotalConIva(resultadosLineaTicket),
        totalIva: calcularTotalConIva(resultadosLineaTicket) - calcularTotalSinIva(resultadosLineaTicket)
    }
    console.log(resultadoTotal);
    return resultadoTotal
}



const calcularTotalSinIva= (resultadosLineaTicket : ResultadoLineaTicket[]) : number => {
    let total = 0
    resultadosLineaTicket.forEach((e)=> {
        total = total + e.precioSinIva
    })
    return total;
}

const calcularTotalConIva= (resultadosLineaTicket : ResultadoLineaTicket[]) : number => {
    let total = 0
    resultadosLineaTicket.forEach((e)=> {
        total = total + e.precioConIva
    })
    return total;
}

/*
const calcularTotalConIva2 = (resultadosLineaTicket : ResultadoLineaTicket[]) : TotalPorTipoIva => {
    let total = 0
    resultadosLineaTicket.forEach((e)=> {
        total = total + e.precioConIva
        if(typeof(e.tipoIva) === 'TipoIva'){

        }
        let t = {
            tipoIva: e.tipoIva,
            cuantia: total
        }
    })
    return total;
}

*/