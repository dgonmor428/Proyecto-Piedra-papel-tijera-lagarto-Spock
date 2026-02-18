//DOM
const btnVariables = document.querySelectorAll(".boton-eleccion-jugada");
const mostrar_jugada = document.querySelectorAll(".mostrar-jugada");
const mensaje_resultado = document.querySelectorAll(".mensaje-resultado");
const valor_estadisticas = document.querySelectorAll(".valor-estadistica");
const Piedra = document.querySelectorAll(".Piedra");
const Papel = document.querySelectorAll(".Papel");
const Tijera = document.querySelectorAll(".Tijera");
const Lagarto = document.querySelectorAll(".Lagarto");
const Spock = document.querySelectorAll(".Spock");
// Variables
let victorias = 0;
let derrotas = 0;
let empates = 0;

//FUNCIONAMIENTO PARA JUGAR
document.addEventListener("DOMContentLoaded", () => {
    inicializarJuego();
});

// Efecto de carga inicial suave
setTimeout(() => {
const contenedor = document.querySelector('main');
if (contenedor) contenedor.style.opacity = '1';
}, 100);

/**
* @brief Inicializa el juego configurando los elementos, estados y eventos necesarios.
*
* Esta función prepara todo lo necesario para que el juego pueda comenzar,
* incluyendo la configuración de la interfaz, los valores iniciales de los
* jugadores y la vinculación de eventos a los controles.
*
* @return {void} No devuelve ningún valor.
*/
function inicializarJuego() {
    btnVariables.forEach(boton => {
        boton.addEventListener("click", () => {
            const eleccion = boton.dataset.eleccion;
            jugar(eleccion);

        });
    });
}

/**
* @brief Ejecuta una ronda del juego con la elección del usuario.
*
* Esta función realiza los siguientes pasos:
* 1. Reinicia los displays del juego.
* 2. Genera la elección de la CPU de forma aleatoria.
* 3. Muestra la elección del usuario y de la CPU con animaciones.
* 4. Calcula el resultado de la ronda.
* 5. Muestra el resultado y actualiza los contadores correspondientes.
*
* @param {string} eleccionUsuario - La elección realizada por el usuario (por ejemplo: "piedra", "papel", "tijera"...).
* @return {void} No devuelve ningún valor.
*/
function jugar(eleccionUsuario) {
    const eleccionCPU = obtenerEleccionCPU();
    console.log(eleccionUsuario);
    console.log(eleccionCPU);
    mostrar_jugada[0].textContent = eleccionUsuario;
    mostrar_jugada[1].textContent = eleccionCPU;
    const resultado = calcularResultadoJugada(eleccionUsuario, eleccionCPU);
    console.log(resultado);
    console.log(victorias);

}

/**
* @brief Genera aleatoriamente la elección de la CPU.
*
* Esta función selecciona una opción al azar entre las disponibles y la devuelve.
*
* @return {string} La elección de la CPU (por ejemplo: "piedra", "papel" o "tijera"...).
*/
function obtenerEleccionCPU() {
    const numero = Math.floor(Math.random() * 5);

    if (numero === 0) {
        return "🪨";
    } else if (numero === 1) {
        return "📄";
    } else if (numero === 2) {
        return "✂️";
    } else if (numero === 3) {
        return "🦎";
    } else {
        return "🖖";
    }
}

/**
* @brief Muestra la elección de un jugador (jugador humano o CPU) en un display con icono y texto.
*
* Esta función limpia el contenido del display, aplica la clase
* para animación/estilo y agrega los elementos que representan
* la jugada seleccionada (emoji y texto) del jugador indicado.
*
* @param {HTMLElement} display - El contenedor donde se mostrará la elección.
* @param {string} eleccion - La clave de la elección (por ejemplo: "piedra", "papel", "tijera"...).
* @param {string} jugador - Nombre del jugador que realizó la elección (por ejemplo: "JUGADOR" o "CPU").
* @return {void} No devuelve ningún valor.
*/
function mostrarEleccion(mostrar_jugada, eleccion, jugador) {
    mostrar_jugada.textContent = eleccion;
}

/**
* @brief Reinicia los displays del juego a su estado inicial.
*
* Esta función restablece el contenido de los displays del usuario y de la CPU,
* elimina cualquier clase de animación activa y restablece el mensaje de resultado
* al texto predeterminado "¡Batalla!".
*
* @return {void} No devuelve ningún valor.
*/
function reiniciarDisplays() {

}

/**
* @brief Calcula el resultado de una ronda entre el usuario y la CPU.
*
* Esta función compara la elección del usuario con la elección de la CPU
* y determina si la ronda termina en victoria, derrota o empate según
* las reglas del juego.
*
* @param {string} usuario - La elección del usuario (por ejemplo: "piedra", "papel", "tijera"...).
* @param {string} cpu - La elección de la CPU (por ejemplo: "piedra", "papel", "tijera"...).
* @return {string} El resultado de la ronda: "victoria", "derrota" o "empate".
*/
function calcularResultadoJugada(usuario, cpu) {
    if (usuario == cpu) {
        return "empate";
    } else if (usuario === "🪨" && cpu === "✂️") {
        return "gana";
    } else if (usuario === "🪨" && cpu === "🦎") {
        return "gana";
    } else if (usuario === "📄" && cpu === "🪨") {
        return "gana";
    } else if (usuario === "📄" && cpu === "🖖") {
        return "gana";
    } else if (usuario === "✂️" && cpu === "📄") {
        return "gana";
    } else if (usuario === "✂️" && cpu === "🦎") {
        return "gana";
    } else if (usuario === "🦎" && cpu === "📄") {
        return "gana";
    } else if (usuario === "🦎" && cpu === "🖖") {
        return "gana";
    } else if (usuario === "🖖" && cpu === "🪨") {
        return "gana";
    } else if (usuario === "🖖" && cpu === "✂️") {
        return "gana";
    }
    return "pierde";
}

/**
* @brief Muestra el resultado de una ronda en la interfaz del juego.
*
* Esta función actualiza el mensaje de resultado según si el usuario ganó,
* perdió o empató, aplica la clase correspondiente para estilos y
* actualiza los contadores de victorias, derrotas o empates.
*
* @param {string} resultado - Resultado de la ronda: "victoria", "derrota" o "empate".
* @param {string} usuario - Elección del usuario (por ejemplo: "piedra", "papel", "tijera"...).
* @param {string} cpu - Elección de la CPU (por ejemplo: "piedra", "papel", "tijera"...).
* @return {void} No devuelve ningún valor.
*/
function mostrarResultadoJugada(resultado, usuario, cpu) {

}

/**
* @brief Actualiza los contadores de victorias, derrotas y empates en la interfaz.
*
* Esta función refleja los valores actuales de las variables globales
* `victorias`, `derrotas` y `empates` en los elementos del DOM correspondientes.
*
* @return {void} No devuelve ningún valor.
*/
function actualizarContadores() {
    /*for(let i; i < valor_estadisticas.length; i++ ){
        
    }*/

    if(resultado === "gana"){
        victorias++
    }
    else if (resultado === "pierde"){
        derrotas++
    }
    else if (resultado === "empate"){
        empates++
    }
}

/**
* @brief Inicializa los tooltips de los botones de elección.
*
* Esta función recorre todos los botones de elección, obtiene la jugada
* asociada a cada uno y configura el atributo `title` para mostrar
* un tooltip indicando qué opciones vence esa jugada.
*
* @return {void} No devuelve ningún valor.
*/
function inicializarTooltips() {

}

/**
* Hasta que no se haga lo demás al completo no comienzo esta parte
*/
/**
* @brief Muestra las reglas completas del juego en la consola.
*
* Esta función imprime un resumen de todas las reglas del juego,
* indicando qué jugada vence a cuáles otras.
*
* @return {void} No devuelve ningún valor.
*/
function mostrarReglas() {

}

/**
* @brief Reinicia el juego a su estado inicial.
*
* Esta función realiza las siguientes acciones:
* - Restablece los contadores de victorias, derrotas y empates a cero.
* - Reinicia los displays del juego.
* - Actualiza los contadores en la interfaz.
* - Muestra un mensaje temporal indicando que el juego ha sido reiniciado.
*
* @return {void} No devuelve ningún valor.
*/

function resetearJuego() {

}

/**
* @brief Maneja las pulsaciones de teclas para jugar o reiniciar el juego.
*
* Este listener escucha los eventos de teclado (`keydown`) y realiza las siguientes acciones:
* - Asocia las teclas numéricas '1' a '5' a las elecciones del juego: "piedra", "papel", "tijera", "lagarto" o "spock".
* - La tecla 'r' reinicia el juego.
* - La tecla 's' muestra las reglas del juego.
*
* @param {KeyboardEvent} event - El evento de pulsación de tecla.
*/
document.addEventListener('keydown', (event) => {
 
});


    