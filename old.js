document.addEventListener('DOMContentLoaded', function () {
    try {
        //const form = document.querySelector('form');
        //form.addEventListener('submit', function(event){
        event.preventDefault();

        // Toma los elementos por sus IDs
        const inputNombre = document.getElementById('nombre');
        const spanNombreCheckeo = document.getElementById('nombreCheckeo');

        // Función para actualizar el contenido del span con el valor de entrada
        const updateNombreCheckeo = () => {
            // Tomar el valor del campo de entrada
            const nombreValor = inputNombre.value;
            // Actualizar el contenido del span con el valor de entrada
            spanNombreCheckeo.textContent = nombreValor;
        }

        // Agregar un escuchador de eventos al elemento de entrada para activar la actualización del cambio de entrada
        inputNombre.addEventListener('input', updateNombreCheckeo);

        // Toma datos y actualiza nombre
        const inputNombre2 = document.getElementById('nombre');
        const spanNombreCheckeo2 = document.getElementById('nombreCheckeo2');

        const updateNombreCheckeo2 = () => {
            const nombreValor = inputNombre2.value;
            spanNombreCheckeo2.textContent = nombreValor;
        }

        inputNombre2.addEventListener('input', updateNombreCheckeo2);

        // Toma datos y actualiza apellido
        const inputApellido = document.getElementById('apellido');
        const spanApellidoCheckeo = document.getElementById('apellidoCheckeo');

        const updateApellidoCheckeo = () => {
            const apellidoValor = inputApellido.value;
            spanApellidoCheckeo.textContent = apellidoValor;
        }

        inputApellido.addEventListener('input', updateApellidoCheckeo);

        // Toma datos y actualiza correo
        const inputCorreo = document.getElementById('correo');
        const spanCorreoCheckeo = document.getElementById('correoCheckeo');

        const updateCorreoCheckeo = () => {
            const correoValor = inputCorreo.value;
            spanCorreoCheckeo.textContent = correoValor;
        }

        inputCorreo.addEventListener('input', updateCorreoCheckeo);

        // Toma datos y actualiza telefono
        const inputTelefono = document.getElementById('telefono');
        const spanTelefonoCheckeo = document.getElementById('telefonoCheckeo');

        const updateTelefonoCheckeo = () => {
            const telefonoValor = inputTelefono.value;
            spanTelefonoCheckeo.textContent = telefonoValor;
        }

        inputTelefono.addEventListener('input', updateTelefonoCheckeo);

        // Toma datos de los radio buttons
        const musica = document.querySelector('input[name="musica"]:checked');
        const estilo = document.querySelector('input[name="estilo"]:checked');
        const gorra = document.querySelector('input[name="gorra"]:checked');
        const color = document.querySelector('input[name="color"]:checked');
        const insignia = document.querySelector('input[name="insignia"]:checked');

        console.log("esto trae nombre:", inputNombre.value);
        console.log("esto trae apellido:", inputApellido.value);
        console.log("esto trae correo:", inputCorreo.value);
        console.log("esto trae telefono:", inputTelefono.value);
        console.log("esto trae musica:", musica ? musica.value : null);
        console.log("esto trae estilo:", estilo ? estilo.value : null);
        console.log("esto trae gorra:", gorra ? gorra.value : null);
        console.log("esto trae color:", color ? color.value : null);
        console.log("esto trae insignia:", insignia ? insignia.value : null);
        //});
    } catch (error) {
        console.error("ERROR: ", error);
    }
});
