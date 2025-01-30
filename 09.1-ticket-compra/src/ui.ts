

export const pintarLinea = (table: string, array: string[]) => {    
    const tabla = document.getElementById(table) as HTMLDivElement
    const linea = document.createElement('div') as HTMLDivElement
    linea.setAttribute('class','card-table-line')

    for (let i = 0; i < 5; i++) {
        const celda = document.createElement('p') 
        celda.setAttribute('class', 'line-product')
        celda.innerHTML = array[i]
        linea.appendChild(celda)
    }

    tabla.appendChild(linea)
}

