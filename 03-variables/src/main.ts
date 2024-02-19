import "./style.css";

interface GrupoMusical {
    nombre: string;
    anyo: number;
    activo: boolean;
    genero: string;
}

let generoPopRock = "🎵 Pop Rock"
let generoRock = "🎸 Rock"
let generoHardRock = "🤘 Hard Rock"
let generoClassic = "🎼 Clásica"

const grupo1: GrupoMusical = {
    nombre: "The Beatles",
    anyo: 1960,
    activo: true,
    genero: generoPopRock
}

const grupo2: GrupoMusical = {
    nombre: "Queen",
    anyo: 1970,
    activo: false,
    genero: generoRock
}

const grupo3: GrupoMusical = {
    nombre: "AC DC",
    anyo: 1973,
    activo: true,
    genero: generoHardRock
}

const grupo4: GrupoMusical = {
    nombre: "Ludwig van Beethoven",
    anyo: 1770,
    activo: false,
    genero: generoClassic
}

const grupo5: GrupoMusical = {
    nombre: "The Rolling Stones",
    anyo: 1962,
    activo: true,
    genero: generoRock
}

const estiloTitulo = "color:green; font-size:16px; font-weight: bold;";

console.log("%c"+ grupo1.nombre, estiloTitulo, `\n- Año: ${grupo1.anyo}\n- Activo: ${grupo1.activo}\n- Género: ${grupo1.genero}`)
console.log("%c"+ grupo2.nombre, estiloTitulo, `\n- Año: ${grupo2.anyo}\n- Activo: ${grupo2.activo}\n- Género: ${grupo2.genero}`)
console.log("%c"+ grupo3.nombre, estiloTitulo, `\n- Año: ${grupo3.anyo}\n- Activo: ${grupo3.activo}\n- Género: ${grupo3.genero}`)
console.log("%c"+ grupo4.nombre, estiloTitulo, `\n- Año: ${grupo4.anyo}\n- Activo: ${grupo4.activo}\n- Género: ${grupo4.genero}`)
console.log("%c"+ grupo5.nombre, estiloTitulo, `\n- Año: ${grupo5.anyo}\n- Activo: ${grupo5.activo}\n- Género: ${grupo5.genero}`)
