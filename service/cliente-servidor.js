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

// CRUD     - Métodos
// create   - POST
// red      - GET
// update   - PUT, PATCH
// delete   - DELETE

const listaClientes = () => fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json());

listaClientes().then((clientes) => {
  clientes.forEach(perfil => {
    tabla.appendChild(crearElemento(perfil.nombre, perfil.email));
  });
  
}).catch((error) => {
  alert("Ocurrio un error");
})


