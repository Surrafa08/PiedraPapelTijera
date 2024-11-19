        const input_nombre = document.getElementById("nombre");
        const nombreMensaje = document.getElementById("nombre_mensaje");

        const input_contraseña = document.getElementById("contraseña");
        const contraMensaje = document.getElementById("contra_mensaje");

        function validarNombre() {
            const letras_nombre = input_nombre.value.trim();
            if (letras_nombre === "") {
                nombreMensaje.textContent = "Por favor, ingrese su nombre.";
                input_nombre.style.backgroundColor = "red";
                return false;
            } else if (letras_nombre.length < 6) {
                nombreMensaje.textContent = "El nombre debe tener al menos 6 caracteres.";
                input_nombre.style.backgroundColor = "red";
                return false;
            } else {
                nombreMensaje.textContent = "";
                input_nombre.style.backgroundColor = "lightGreen";
                return true;
            }
        }

        function validarContraseña() {
            const letras_contraseña = input_contraseña.value.trim();
            if (letras_contraseña === "") {
                contraMensaje.textContent = "Por favor, ingrese su contraseña.";
                input_contraseña.style.backgroundColor = "red";
                return false;
            } else if (letras_contraseña.length < 6) {
                contraMensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
                input_contraseña.style.backgroundColor = "red";
                return false;
            } else {
                contraMensaje.textContent = "";
                input_contraseña.style.backgroundColor = "lightGreen";
                return true;
            }
        }

        function validarYRedirigir() {
            const nombreValido = validarNombre();
            const contraseñaValida = validarContraseña();

            if (nombreValido && contraseñaValida) {
                localStorage.setItem("nombreUsuario", input_nombre.value.trim());
                location.href = '2_juegos.html';
            } else {
                alert("Por favor, complete correctamente todos los campos.");
            }
        }

        input_nombre.addEventListener("input", validarNombre);
        input_contraseña.addEventListener("input", validarContraseña);