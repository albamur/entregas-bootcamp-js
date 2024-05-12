
import "./style.css";
//import { plantillaTicket } from "./ui";
import { productos, LineaTicket } from "./modelo";


const calculaTotal = (lineasTicket: LineaTicket[]) => {
    let total = 0
    for (let i = 0; i < lineasTicket.length; i++) {
        let element = lineasTicket[i]
        total = total + element.producto.precio
    }
    return total
};
console.log(calculaTotal(productos))

const calculaTotalesIva = (lineasTicket: LineaTicket[]) : string => {
    let parrafoLineasTicket = ''
    for (let i = 0; i < lineasTicket.length; i++) {
        let element = lineasTicket[i]
        let txtLinea = element.producto.nombre.padEnd(47, ' ') + element.cantidad.toString().padEnd(3, ' ')  + ' x  ' + element.producto.precio + '€\n'
        parrafoLineasTicket = parrafoLineasTicket + txtLinea
    }
    return parrafoLineasTicket
};
calculaTotalesIva(productos)

//console.log(plantillaTicket(calculaTicket(productos), calculaTotal(productos)));


