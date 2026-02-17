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
    //Mostrar jugada
    mostrar_jugada[0].textContent = eleccionUsuario;
    mostrar_jugada[1].textContent = eleccionCPU;
    const resultado = calcularResultadoJugada(eleccionUsuario, eleccionCPU);
    console.log(resultado);
}
function obtenerEleccionCPU() {
    const numero = Math.floor(Math.random() * 5);

    if (numero === 0) {
        return "Piedra";
    } else if (numero === 1) {
        return "Papel";
    } else if (numero === 2) {
        return "Tijera";
    } else if (numero === 3) {
        return "Lagarto";
    } else {
        return "Spock";
    }
}
function mostrarEleccion(display, eleccion, jugador) {

}
function reiniciarDisplays() {

}
function calcularResultadoJugada(usuario, cpu) {
    if (usuario == cpu) {
        return "empate";
    }

    if (usuario == "Piedra" && cpu == "Tijera") {
        return "ganador";
    }

    if (usuario == "Piedra" && cpu == "Lagarto") {
        return "ganador";
    }

    if (usuario == "Papel" && cpu == "Piedra") {
        return "ganador";
    }

    if (usuario == "Papel" && cpu == "Spock") {
        return "ganador";
    }

    if (usuario == "Tijera" && cpu == "Papel") {
        return "ganador";
    }

    if (usuario == "Tijera" && cpu == "Lagarto") {
        return "ganador";
    }

    if (usuario == "Lagarto" && cpu == "Papel") {
        return "ganador";
    }

    if (usuario == "Lagarto" && cpu == "Spock") {
        return "ganador";
    }

    if (usuario == "Spock" && cpu == "Piedra") {
        return "ganador";
    }

    if (usuario == "Spock" && cpu == "Tijera") {
        return "ganador";
    }
    return "perdedor";
}
function mostrarResultadoJugada(resultado, usuario, cpu) {

}
function actualizarContadores() {

}


/**
 * Hasta que no se haga lo demás al completo no comienzo esta parte
 */
function mostrarReglas() {

}
function resetearJuego() {
}
document.addEventListener('keydown', (event) => {
});


    