import { servicioClientes} from "../service/cliente-servidor.js"

console.log(servicioClientes);

const crearElemento = (nombre, email) => {
    const elemento = document.createElement("tr");
    const contenido = 
            `<td class="td" data-td>${nombre}</td>
            <td>${email}</td>
            <td>
              <ul class="table__button-control">
                <li>
                  <a
                    href="../screens/editar_cliente.html"
                    class="simple-button simple-button--edit"
                    >Editar</a
                  >
                </li>
                <li>
                  <button
                    class="simple-button simple-button--delete"
                    type="button"
                  >
                    Eliminar
                  </button>
                </li>
              </ul>
            </td>`
    elemento.innerHTML = contenido;
    return elemento;
}

const tabla = document.querySelector("[data-table]");

servicioClientes.listaClientes().then((clientes) => {
    clientes.forEach(perfil => {
      tabla.appendChild(crearElemento(perfil.nombre, perfil.email));
    });
    
  }).catch((error) => {
    alert("Ocurrio un error");
  })
  