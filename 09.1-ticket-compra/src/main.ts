//modelo
import {  productos,
    TicketFinal
 } from "./modelo";

import { calculaTicket } from "./motor";




///La estructura inicial de la función para calcular el ticket sería la siguiente:


console.log('Ejercicio Ticket Compra')
const ticketFinal: TicketFinal = calculaTicket(productos)
console.log(ticketFinal)


