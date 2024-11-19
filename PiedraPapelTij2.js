function jugar(eleccionUsuario) {
    var botones = document.querySelectorAll('button');
    botones.forEach(function(boton) {
        boton.classList.remove('clicked'); 
    });
    document.getElementById(eleccionUsuario.toLowerCase()).classList.add('clicked'); 

    var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
    var eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

    var resultado = "";

    if (eleccionUsuario === eleccionComputadora) {
        resultado = "Es un empate! Dairon y tu eligieron " + eleccionUsuario + ".";
    } else if (
        (eleccionUsuario === "Piedra" && (eleccionComputadora === "Tijera" || eleccionComputadora === "Lagarto")) ||
        (eleccionUsuario === "Papel" && (eleccionComputadora === "Piedra" || eleccionComputadora === "Spock")) ||
        (eleccionUsuario === "Tijera" && (eleccionComputadora === "Papel" || eleccionComputadora === "Lagarto")) ||
        (eleccionUsuario === "Lagarto" && (eleccionComputadora === "Papel" || eleccionComputadora === "Spock")) ||
        (eleccionUsuario === "Spock" && (eleccionComputadora === "Piedra" || eleccionComputadora === "Tijera"))
    ) {
        resultado = "le Ganastes a Dairon! " + eleccionUsuario + " vence a " + eleccionComputadora + ".";
    } else {
        resultado = "Perdiste por putit@, " + eleccionComputadora + " vence a " + eleccionUsuario + ".";
    }

    document.getElementById("resultado").textContent = resultado;
    document.getElementById("reiniciar").style.display = 'block';
}

function reiniciarJuego() {
    document.getElementById("resultado").textContent = '';
    document.getElementById("reiniciar").style.display = 'none';

    var botones = document.querySelectorAll('button');
    botones.forEach(function(boton) {
        boton.classList.remove('clicked'); 
    });

    var opciones = document.querySelectorAll('#piedra, #papel, #tijera, #lagarto, #spock');
    opciones.forEach(function(boton) {
        boton.disabled = false;
    });
}

function mostrarReglas() {
    document.getElementById("textoReglas").style.display = 'block';
}

function ocultarReglas() {
    document.getElementById("textoReglas").style.display = 'none';
}
