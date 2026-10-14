// ===============================
// CAMBIAR ENTRE LAS SECCIONES
// ===============================

function mostrar(nombre) {

    let paginas = document.querySelectorAll(".pagina");

    paginas.forEach(function(pagina) {
        pagina.classList.remove("activa");
    });

    let seleccion = document.getElementById(nombre);

    if (seleccion) {
        seleccion.classList.add("activa");
    }

    cerrarMenu();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    return false;
}


// ===============================
// MENÚ PARA CELULAR
// ===============================

function abrirMenu() {

    let menu = document.getElementById("menu");

    menu.classList.toggle("mostrar-menu");
}


function cerrarMenu() {

    let menu = document.getElementById("menu");

    menu.classList.remove("mostrar-menu");
}


// ===============================
// VENTANA DE INFORMACIÓN
// ===============================

function mensaje(producto) {

    let ventana = document.getElementById("ventana");

    let titulo = document.getElementById("tituloVentana");

    let texto = document.getElementById("textoVentana");


    titulo.innerHTML = producto;


    texto.innerHTML =
        "Esta es una demostración del proyecto Banco NovaRD. " +
        "En una página bancaria real, aquí aparecerían " +
        "los requisitos, condiciones y detalles relacionados " +
        "con el producto seleccionado.";


    ventana.classList.add("mostrar");
}


function cerrarVentana() {

    let ventana = document.getElementById("ventana");

    ventana.classList.remove("mostrar");
}


// ===============================
// FORMULARIO DE CONTACTO
// ===============================

document.getElementById("formulario").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        let nombre =
            document.getElementById("nombre").value;


        let correo =
            document.getElementById("correo").value;


        if (nombre !== "" && correo !== "") {

            mensaje("Consulta enviada");

            document.getElementById("textoVentana").innerHTML =
                "Gracias, " + nombre +
                ". Tu consulta fue registrada correctamente " +
                "en esta demostración.";

            document.getElementById("formulario").reset();
        }

    }
);


// ===============================
// CERRAR VENTANA AL HACER CLIC
// FUERA DEL CONTENIDO
// ===============================

window.addEventListener("click", function(event) {

    let ventana = document.getElementById("ventana");

    if (event.target === ventana) {
        cerrarVentana();
    }

});