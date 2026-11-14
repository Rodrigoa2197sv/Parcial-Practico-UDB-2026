const formulario = document.getElementById("formulario-contacto");
const resultado = document.getElementById("resultado-formulario");
const archivo = document.getElementById("archivo");
const clave = document.getElementById("clave");
const botonValidar = document.getElementById("boton-validar");

archivo.addEventListener("change", function () {
    archivo.setCustomValidity("");
    if (archivo.files.length > 0) {
        const nombre = archivo.files[0].name.toLowerCase();
        const permitido = nombre.endsWith(".pdf") || nombre.endsWith(".png") || nombre.endsWith(".jpg") || nombre.endsWith(".jpeg");
        if (!permitido) {
            archivo.setCustomValidity("Selecciona un archivo PDF, PNG o JPG de prueba.");
        }
    }
});

formulario.addEventListener("input", function () {
    resultado.textContent = "";
});

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    if (formulario.reportValidity()) {
        clave.value = "";
        archivo.value = "";
        resultado.textContent = "Validaciones completadas. Los datos NO fueron enviados ni guardados. Se limpiaron la contraseña temporal y el archivo seleccionado.";
    }
});

formulario.addEventListener("reset", function () {
    archivo.setCustomValidity("");
    resultado.textContent = "Formulario restablecido. No se enviaron datos.";
});

botonValidar.disabled = false;
