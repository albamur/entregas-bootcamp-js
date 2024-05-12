
export const plantillaTicket = (articulos:string, total: number) => {
    return `
------------------------- TICKET -------------------------
Artículo                                      PVP    Cant
`+articulos+`


TOTAL                                                 ${total}€

                ---------- IVA INCLUIDO ---------
Tipo de IVA      Tasa      Base Imp.       Val         Val Total
General          21,00%    24,78           5,20        29,80
Reducido         10,00%
Superreducido A  5,00%
Superreducido B  4,00%
Superreducido C  0,00%
Sin IVA	         0,00%
`
}