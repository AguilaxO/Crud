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

const elminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`,
  {
    method: "DELETE"
  })
}

const obtenerCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then(respuesta => respuesta.json())
}

const actualizarCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`,
  {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({nombre, email})
  }).then(respuesta => respuesta).catch((error) => console.log(error))
}
export const servicioClientes = {
  listaClientes,
  crearCliente,
  elminarCliente,
  obtenerCliente,
  actualizarCliente
}