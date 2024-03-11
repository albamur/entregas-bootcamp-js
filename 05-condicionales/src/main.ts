import "./style.css";

// REGLAS DEL JUEGO
/**
Para jugar al juego de las siete y media en solitario, sigue estos pasos:

    - Baraja una baraja española de 40 cartas y coloca las cartas boca abajo sobre la mesa.

    - Gira la primera carta y colócala boca arriba en la mesa. Esta carta será la carta del jugador.

    - Decide si deseas tomar otra carta o quedarte con la que tienes. El objetivo del juego es tener una mano que sume 7 y media puntos o lo más cerca posible de este número sin pasarse.

    - Si decides tomar otra carta, gira la siguiente carta boca arriba. Añade el valor de esta carta a tu mano y decide si deseas tomar otra carta o quedarte con lo que tienes. Puedes tomar tantas cartas como desees, pero si la suma de los valores de las cartas de tu mano supera los 7,5 puntos, pierdes automáticamente la partida.

    - Si decides quedarte con la carta que tienes, tu turno termina. Anota tu puntuación y pasa al siguiente turno.

    - Continúa jugando hasta que hayas jugado todas las cartas de la baraja o decidas detenerte.

    - Si logras una mano con una puntuación de 7 y media, has ganado el juego. Si no, tu objetivo es obtener la mano con la puntuación más cercana a 7 y media.

Es importante recordar que las cartas numéricas valen su valor nominal, es decir, el As (uno de cada palo) vale 1 punto, las cartas del 2 al 7 valen su valor nominal y las figuras (sota, caballo y rey) valen medio punto cada una.
 */


// función para obtener carta

const btnInicio = document.getElementById("inicio")
const txtCogeCarta = document.getElementById("txtCogeCarta")

function inicio(){
    
    btnInicio?.removeEventListener('click', inicio)
    btnCogerCarta?.addEventListener('click', pideCarta)

    if(btnInicio) {
        btnInicio.style.display = 'none'
    }

    if(txtCogeCarta){
        txtCogeCarta.innerHTML = 'Coge una carta'
    }

    if(prfResultado){
        prfResultado.innerHTML = ''
    }
}
document.addEventListener("DOMContentLoaded", inicio);


/**1. Mostrar puntuación
Arranca por crear una variable que almacena la puntuación que lleve el usuario:

    Crea una variable para almacenar la puntuación, inicialmente será 0. ✅
    Crea un div en el HTML en el que podamos mostrar la puntuación. ✅ <p id="numero"></p>
    Crea una función que se llame muestraPuntuacion que muestre la puntuación actual en el div. ✅
    Invoca a la función en cuanto este disponible el DOM. ✅
Más adelante invocaremos muestraPuntuación cada vez que el usuario pida carta nueva. */
let barajaJugador = 0;

// función para mostrar puntuación
function mostrarPuntuacion(){
    if (prfNumJugador) {
        prfNumJugador.innerHTML = "Puntuación jugador: " + barajaJugador + ""
    }
}
document.addEventListener("DOMContentLoaded", mostrarPuntuacion);


/** 2. Pedir carta
Implementa la funcionalidad de pedir carta, ¿En qué consiste?
    - Hay que generar una función que nos devuelva una carta aleatoria, la podemos llamar dameCarta.✅
    - Para ello exponemos un botón en el HTML que al pulsarlo llame a la función dameCarta. ✅
    - Para probar este caso, de momento muestra la carta elegida por consola.
*/
const divBarajaJugador = document.getElementById("barajaJugador")

function dameCarta(){
    //numero random del 1 al 10
    let randomNum =  Math.floor(Math.random()*(11-1)+1);
   
    if (randomNum > 7){
        return randomNum+=2
    } else {
        return randomNum
    }
}

/**3. Mostrar carta
Crea una función que se llame muestraCarta que muestre la carta que le pasemos por parámetro ✅ 
    - Añade un img en el HTML en el que podamos mostrar la carta. ✅
    - Ese img va a tener un src que va a ser la url de la imagen de la carta ✅
    - Crea una función mostrar carta, para mapear valor a imagen de carta puedes utilizar un switch para hacer la conversión. ✅
    - Cuando el usuario pulse en el bóton Pide Carta llama a pideCarta y con el resultado llama a mostrarCarta. ✅
*/

function muestraCarta(carta: number) :void{
    let urlCarta = ''
    switch (carta) {
        case 1:
            urlCarta = '1_as'
            break;
        case 2:
            urlCarta = '2_dos'
            break;
        case 3:
            urlCarta = '3_tres'
            break;
        case 4:
            urlCarta = '4_cuatro'
            break;
        case 5:
            urlCarta = '5_cinco'
            break;
        case 6:
            urlCarta = '6_seis'
            break;
        case 7:
            urlCarta = '7_siete'
            break;
        case 10:
            urlCarta = '10_sota'
            break;
        case 11:
            urlCarta = '11_caballo'
            break;
        case 12:
            urlCarta = '12_rey'
        break;

        default:
            break;
    }

    if(divBarajaJugador){
        let imgCarta = document.createElement("img")
        imgCarta.setAttribute('src', `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/${urlCarta}-copas.jpg`)
        imgCarta.setAttribute('class','cartaJugador')
        
        divBarajaJugador.appendChild(imgCarta)
    }
}

function pideCarta(){
    let carta = dameCarta()
    muestraCarta(carta)
    actualizarPuntuacion(carta)    
}

/**3. Sumar puntuación
Una vez que le hemos dado la carta al usuario, tenemos que sumar la puntuación de la carta a la puntuación total.

Pistas
    - Tenemos un div donde mostramos la puntuación y tenemos una variable donde la almacenamos. ✅
    - Suma el nuevo valor y llama a la función que creamos previamente para mostrar la información. ✅
 */
const prfNumJugador = document.getElementById("numero")

function actualizarPuntuacion (carta: number) {
    console.log(`Actualizar puntuacion ${carta}`);
    
    //actualizar puntuacion
    if (carta > 7) { barajaJugador = barajaJugador + 0.5 } 
    else { barajaJugador = barajaJugador + carta }

    if (barajaJugador > 7.5){ gameOver() }
    
    mostrarPuntuacion()
}

/** 4. Game over
Si el usuario se pasa de 7,5 puntos, el juego termina y se muestra un mensaje de Game Over, ✅
a demás el usuario no puede seguir pidiendo cartas. ✅
*/
const btnCogerCarta = document.getElementById("cogerCarta")

function gameOver() {
    if(prfResultado){
        prfResultado.innerHTML = "Game Over"
    }

    btnCogerCarta?.removeEventListener('click', pideCarta)
}


/**5. Me planto
Añadir un botón para que el usuario pueda plantarse, si el usuario se planta, el juego termina, el usuario no puede pedir más cartas y:
    - Si su puntuación es menor que 4, mostrar un mensaje que diga "Has sido muy conservador".
    - Si la puntuación ha sido 5, mostrar un mensaje que diga "Te ha entrado el canguelo eh?".
    - Si la puntuación ha sido 6 o 7, mostrar un mensaje que diga... "Casi casi...".
    - Si la puntuación es 7.5, mostrar un mensaje que diga "¡ Lo has clavado! ¡Enhorabuena!" */


// función para obtener carta

const prfResultado = document.getElementById("resultado")
const btnPlantarse = document.getElementById("plantarse")
btnPlantarse?.addEventListener('click', plantarse)

type Resultado = 
    | "Has sido muy conservador" 
    | "Te ha entrado el canguelo eh?"
    | "Casi"
    | "¡Lo has clavado! ¡Enhorabuena!"
    | "Número de carta indefinido";

function plantarse(){
    gameOver()

    if(prfResultado) {
        prfResultado.innerHTML = mensajeResultado()
    }
}

function mensajeResultado() : Resultado{
    if(barajaJugador < 4){
        return "Has sido muy conservador"
    } else if(barajaJugador ==  5){
        return "Te ha entrado el canguelo eh?"
    } else if(barajaJugador ==  6 || barajaJugador ==  7){
        return "Casi"
    } else if(barajaJugador ==  7.5){
        return "¡Lo has clavado! ¡Enhorabuena!"
    } else {
        return "Número de carta indefinido"
    }
}


/**6. Nueva partida
Una vez que el usuario ha terminado la partida (sea porque se ha plantado o porque ha perdido), 
se le muestra un botón para que pueda empezar una nueva partida. 
*/

function reset(){
    barajaJugador=0

    if(prfNumJugador){
        prfNumJugador.innerHTML = ""
    }
    mostrarPuntuacion()

    if(divBarajaJugador){
       divBarajaJugador.innerHTML="" 
    } 

    if(txtCogeCarta){
        txtCogeCarta.innerHTML = ''
    }
    

    btnInicio?.addEventListener('click', inicio)
    btnCogerCarta?.removeEventListener('click', pideCarta)
    
    if(btnInicio) {
        btnInicio.style.display = 'inline'
    }
}


const btnReset = document.getElementById("reset")
btnReset?.addEventListener('click', reset)
