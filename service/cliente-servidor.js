// CRUD     - Métodos
// create   - POST
// red      - GET
// update   - PUT, PATCH
// delete   - DELETE

const listaClientes = () => fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre, email, id: uuid.v4()})
  })
}

export const servicioClientes = {
  listaClientes,
  crearCliente,
}