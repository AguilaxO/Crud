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

const listaClientes = () => {
  const promesa = new Promise((resolve, reject) => {
    const htpp = new XMLHttpRequest();
    htpp.open("GET", "http://localhost:3000/perfil");
    htpp.send();

    htpp.onload = () => {
    const respuesta = JSON.parse(htpp.response);
    if(htpp.status > 400) {
      reject(respuesta);
    }
    else {
      resolve(respuesta);
    }
    }
  })

  return promesa;
}

listaClientes().then((clientes) => {
  clientes.forEach(perfil => {
    tabla.appendChild(crearElemento(perfil.nombre, perfil.email));
  });
  
}).catch((error) => {
  alert("Ocurrio un error");
})


