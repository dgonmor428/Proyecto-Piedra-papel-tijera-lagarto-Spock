//DOM
const btnVariables = document.querySelectorAll(".boton-eleccion-jugada");
const mostrar_jugada = document.querySelectorAll(".mostrar-jugada");
const mensaje_resultado = document.querySelectorAll(".mensaje-resultado");
const valor_estadisticas = document.querySelectorAll(".valor-estadistica");
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

function inicializarJuego() {
    btnVariables.forEach(boton => {
        boton.addEventListener("click", () => {
            const eleccion = boton.dataset.eleccion;
            jugar(eleccion);

        });
    });
}
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
function obtenerEleccionCPU() {
    const numero = Math.floor(Math.random() * 5);

    let numero = ["🪨","📄","✂️","🦎","🖖"]

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
function mostrarEleccion(mostrar_jugada, eleccion, jugador) {
    mostrar_jugada.textContent = eleccion;
}
function reiniciarDisplays() {

}
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
function mostrarResultadoJugada(resultado, usuario, cpu) {

}
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
function inicializarTooltips() {
    
}


/**
 * Hasta que no se haga lo demás al completo no comienzo esta parte
 */
/*function mostrarReglas() {

}
function resetearJuego() {
}
document.addEventListener('keydown', (event) => {
});*/


    