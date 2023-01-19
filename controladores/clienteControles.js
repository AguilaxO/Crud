import { servicioClientes} from "../service/cliente-servidor.js"


const crearElemento = (nombre, email, id) => {
    const elemento = document.createElement("tr");
    const contenido = 
            `<td class="td" data-td>${nombre}</td>
            <td>${email}</td>
            <td>
              <ul class="table__button-control">
                <li>
                  <a
                    href="../screens/editar_cliente.html?id=${id}"
                    class="simple-button simple-button--edit"
                    >Editar</a
                  >
                </li>
                <li>
                  <button
                    class="simple-button simple-button--delete"
                    type="button" id="${id}"
                  >
                    Eliminar
                  </button>
                </li>
              </ul>
            </td>`
    elemento.innerHTML = contenido;
    const boton = elemento.querySelector("button");
    boton.addEventListener("click", () => {
      const idBoton = boton.id;
      servicioClientes.elminarCliente(idBoton).then((respuesta) => {
        console.log(respuesta)
      }).catch(error => {alert("Ocurrio el error" + error)})
    })
    return elemento;
}

const tabla = document.querySelector("[data-table]");

servicioClientes.listaClientes().then((clientes) => {
    clientes.forEach(({nombre, email, id}) => {
      tabla.appendChild(crearElemento(nombre, email, id));
    });
    
  }).catch((error) => {
    alert("Ocurrio un error");
  })
  