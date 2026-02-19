//DOM
const mostrar_jugada = document.querySelectorAll(".mostrar-jugada");
const mensaje_resultado = document.querySelectorAll(".mensaje-resultado");
const valor_estadisticas = document.querySelectorAll(".valor-estadistica");
const Piedra = document.querySelector(".btnPiedra");
const Papel = document.querySelector(".btnPapel");
const Tijera = document.querySelector(".btnTijera");
const Lagarto = document.querySelector(".btnLagarto");
const Spock = document.querySelector(".btnSpock");
const Reseteo = document.querySelector(".btn-reset");
const Reglas = document.querySelector(".btn-reglas");

// Variables
let victorias = 0;
let derrotas = 0;
let empates = 0;
let emoji = "";

//FUNCIONAMIENTO PARA JUGAR
document.addEventListener("DOMContentLoaded", () => {
    inicializarJuego();
    inicializarTooltips();
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
    console.log("Juego inicializado correctamente");
    console.log("================================");
    console.log("Juego de Piedra, Papel, Tijera, Lagarto, Spock cargado correctamente");
    console.log("Usa las teclas 1-5 para jugar rápidamente, o R para resetear");
    //Botones
    Piedra.addEventListener("click", () => jugar("Piedra"));
    Papel.addEventListener("click", () => jugar("Papel"));
    Tijera.addEventListener("click", () => jugar("Tijera"));
    Lagarto.addEventListener("click", () => jugar("Lagarto"));
    Spock.addEventListener("click", () => jugar("Spock"));
    Reglas.addEventListener("click", mostrarReglas);
    Reseteo.addEventListener("click", resetearJuego);
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
    reiniciarDisplays();

    const eleccionCPU = obtenerEleccionCPU();

    mostrarEleccion(mostrar_jugada[0], eleccionUsuario);
    mostrarEleccion(mostrar_jugada[1], eleccionCPU);

    const resultado = calcularResultadoJugada(eleccionUsuario, eleccionCPU);

    mostrarResultadoJugada(resultado, eleccionUsuario, eleccionCPU);
    actualizarContadores(resultado);

}

/**
* @brief Genera aleatoriamente la elección de la CPU.
*
* Esta función selecciona una opción al azar entre las disponibles y la devuelve.
*
* @return {string} La elección de la CPU (por ejemplo: "piedra", "papel" o "tijera"...).
*/
function obtenerEleccionCPU() {
    //Para que la CPU escoja un numero del 0 al 4 aleatorio con la libreria de matematicas. El "floor" sirve para redondear, si no escoge un numero que no es entero.
    const numero = Math.floor(Math.random() * 5);
    if (numero === 0) {
        return "Piedra";
    } else if (numero === 1) {
        return "Papel";
    } else if (numero === 2) {
        return "Tijera";
    } else if (numero === 3) {
        return "Lagarto";
    } else if (numero === 4){
        return "Spock";
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

    if (eleccion === "Piedra") emoji = "🪨";
    else if (eleccion === "Papel") emoji = "📄";
    else if (eleccion === "Tijera") emoji = "✂️";
    else if (eleccion === "Lagarto") emoji = "🦎";
    else if (eleccion === "Spock") emoji = "🖖";

    mostrar_jugada.innerHTML = 
        `<div class="icono-jugada-grande">${emoji}</div>
        <div class="texto-jugada">${eleccion}</div>`;

    mostrar_jugada.classList.add("active");
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
    } else if (usuario === "Piedra" && cpu === "Tijera") {
        return "gana";
    } else if (usuario === "Piedra" && cpu === "Lagarto") {
        return "gana";
    } else if (usuario === "Papel" && cpu === "Piedra") {
        return "gana";
    } else if (usuario === "Papel" && cpu === "Spock") {
        return "gana";
    } else if (usuario === "Tijera" && cpu === "Papel") {
        return "gana";
    } else if (usuario === "Tijera" && cpu === "Lagarto") {
        return "gana";
    } else if (usuario === "Lagarto" && cpu === "Papel") {
        return "gana";
    } else if (usuario === "Lagarto" && cpu === "Spock") {
        return "gana";
    } else if (usuario === "Spock" && cpu === "Piedra") {
        return "gana";
    } else if (usuario === "Spock" && cpu === "Tijera") {
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
    const panelMensaje = mensaje_resultado[0];
    //Como no elimine los datos anteriores los colores no se modifican
    panelMensaje.classList.remove("ganador", "perdedor", "empate");

        switch (resultado) {
        case "gana":
            panelMensaje.textContent = `¡Has ganado! ${usuario} vence a ${cpu}`;
            panelMensaje.classList.add("ganador");
            break;

        case "pierde":
            panelMensaje.textContent = `¡Has perdido! ${cpu} vence a ${usuario}`;
            panelMensaje.classList.add("perdedor");
            break;

        case "empate":
            panelMensaje.textContent = `¡Empate! Ambos habéis elegido ${usuario}`;
            panelMensaje.classList.add("empate");
            break;
    }
}

/**
* @brief Actualiza los contadores de victorias, derrotas y empates en la interfaz.
*
* Esta función refleja los valores actuales de las variables globales
* `victorias`, `derrotas` y `empates` en los elementos del DOM correspondientes.
*
* @return {void} No devuelve ningún valor.
*/
function actualizarContadores(resultado) {

    if (resultado === "gana") {
        victorias++;
    } else if (resultado === "pierde") {
        derrotas++;
    } else if (resultado === "empate") {
        empates++;
    }
    valor_estadisticas[0].textContent = victorias;
    valor_estadisticas[1].textContent = empates; 
    valor_estadisticas[2].textContent = derrotas;
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
    Piedra.title = "Piedra vence a: Tijera y Lagarto";
    Papel.title = "Papel vence a: Piedra y Spock";
    Tijera.title = "Tijera vence a: Papel y Lagarto";
    Lagarto.title = "Lagarto vence a: Papel y Spock";
    Spock.title = "Spock vence a: Piedra y Tijera";
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
    console.log("=============================================");
    console.log("Reglas del juego:");
    console.log("- Piedra aplasta a Tijera y Lagarto");
    console.log("- Papel cubre a Piedra y desautoriza a Spock");
    console.log("- Tijera corta a Papel y decapita a Lagarto");
    console.log("- Lagarto envenena a Spock y devora a Papel");
    console.log("- Spock vaporiza a Piedra y rompe a Tijera");
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
    victorias = 0;
    derrotas = 0;
    empates = 0; 
    valor_estadisticas[0].textContent = victorias;
    valor_estadisticas[1].textContent = empates;
    valor_estadisticas[2].textContent = derrotas;
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
    switch(event.key.toLowerCase()) {
        case '1':
            jugar("Piedra");
            break;
        case '2':
            jugar("Papel");
            break;
        case '3':
            jugar("Tijera");
            break;
        case '4':
            jugar("Lagarto");
            break;
        case '5':
            jugar("Spock");
            break;
        case 'r':
            resetearJuego();
            break;
        case 's':
            mostrarReglas();
            break;
    }
});


    