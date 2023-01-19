
import { servicioClientes } from "../service/cliente-servidor.js";
const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    servicioClientes.crearCliente(nombre, email).then( respuesta => {
        window.location.href = "/screens/registro_completado.html"
    }).catch(error => {
        console.log(error);
    });
})