// Este código controla la forma en la que se autocompleta la información en la página de editar
import { servicioClientes } from "../service/cliente-servidor.js";

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const idCliente = url.searchParams.get("id");
    if (idCliente === null) {
        window.location.href = "../screens/error.html"
    }
    const campoNombre = document.querySelector("[data-nombre]");
    const campoemail = document.querySelector("[data-email]");
    servicioClientes.obtenerCliente(idCliente).then(perfil => {
        campoNombre.value = perfil.nombre;
        campoemail.value = perfil.email;
    });
}

const guardarInformacion = () => {
    const formularioEditar = document.querySelector("[data-form]");
    formularioEditar.addEventListener("submit", (evento) => {
        evento.preventDefault()
        const url = new URL(window.location);
        const idCliente = url.searchParams.get("id");
        const nombre = document.querySelector("[data-nombre]").value;
        const email = document.querySelector("[data-email]").value;

        servicioClientes.actualizarCliente(nombre, email, idCliente).then(() => window.location.href = "../screens/edicion_concluida.html")
    })
}

obtenerInformacion();
guardarInformacion();

