function playGame(eleccionUsuario) {
    var botones = document.querySelectorAll('button');
    var botonesOpciones = document.querySelectorAll('#piedra, #papel, #tijera');
    botonesOpciones.forEach(function(boton) {
        boton.disabled = true;
    });

    var opciones = ['piedra', 'papel', 'tijera'];
    var eleccionBot = opciones[Math.floor(Math.random() * opciones.length)];
    var resultado = '';

    botones.forEach(function(boton) {
        boton.classList.remove('clicked');
    });
    document.getElementById(eleccionUsuario).classList.add('clicked');

    if (eleccionUsuario === eleccionBot) {
        resultado = 'Es un empate. Dairon y tú eligieron lo mismo, ' + eleccionBot + '.';
    } else if (
        (eleccionUsuario === 'piedra' && eleccionBot === 'tijera') ||
        (eleccionUsuario === 'papel' && eleccionBot === 'piedra') ||
        (eleccionUsuario === 'tijera' && eleccionBot === 'papel')
    ) {
        resultado = '¡Ganaste! Elegiste ' + eleccionUsuario + ' y Dairon eligió ' + eleccionBot + '.';
    } else {
        resultado = 'Perdiste. Elegiste ' + eleccionUsuario + ' y Dairon eligió ' + eleccionBot + '.';
    }

    document.getElementById('resultado').innerText = resultado;
    document.getElementById('reiniciar').style.display = 'block';
}

function reiniciarJuego() {
    document.getElementById('resultado').innerText = '';
    document.getElementById('reiniciar').style.display = 'none';

    var botonesOpciones = document.querySelectorAll('#piedra, #papel, #tijera');
    botonesOpciones.forEach(function(boton) {
        boton.disabled = false;
    });

    var botones = document.querySelectorAll('button');
    botones.forEach(function(boton) {
        boton.classList.remove('clicked');
    });
}

function mostrarReglas() {
    var reglas = document.getElementById('reglas');
    reglas.style.display = reglas.style.display === 'none' ? 'block' : 'none';
}

function cerrarReglas() {
    var reglas = document.getElementById('reglas');
    reglas.style.display = 'none';
}
