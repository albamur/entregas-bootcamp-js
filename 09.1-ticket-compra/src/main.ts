import { crearResultadoLineaTicket } from "./linea";
import { LineaTicket, TotalPorTipoIva, listaDeTiposIvas, productos, resultadosLineaTicket } from "./modelo";
import { crearResultadoTotalTicket } from "./total";
import { crearResultadoTotalPorTipoIva } from "./totaltipoiva";



const calculaTicket = (lineasTicket: LineaTicket[]) :void => {
    for (let i = 0; i < lineasTicket.length; i++) {
        let element = lineasTicket[i]
        resultadosLineaTicket.push(crearResultadoLineaTicket(element));
    }
    
};
calculaTicket(productos)


crearResultadoTotalTicket(resultadosLineaTicket)


const calculaResultadoTotalPorTipoIva = (resultadosTotalesPorTipoIva : TotalPorTipoIva[]) :void => {
    for (let i = 0; i < resultadosTotalesPorTipoIva.length; i++) {
        let element = resultadosTotalesPorTipoIva[i]
        resultadosTotalesPorTipoIva.push(crearResultadoTotalPorTipoIva(element.tipoIva,listaDeTiposIvas));
    }
    
};
calculaResultadoTotalPorTipoIva(productos)
