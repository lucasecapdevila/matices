import Producto from "./classProducto.js";

// Modal de Bootstrap
const modalAdminProductos = new bootstrap.Modal(
  document.getElementById("adminProductos")
);

//* Variables que se usarán
//  Traigo item de LS
const listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];

const formulario = document.getElementById('formularioProducto')
const btnNuevoProducto = document.getElementById('btnNuevoProducto')

//  Formulario de creación/edición
const nombre = document.getElementById('nombreProducto'),
      precio = document.getElementById('precioProducto'),
      categoria = document.getElementById('categoriaProducto'),
      urlImagen = document.getElementById('imagenProducto'),
      descripcion = document.getElementById('descripcionProducto'),
      stock = document.getElementById('stockDeProducto')

const cuerpoTablaProductos = document.getElementById('cuerpoTablaProductos')

//* Funciones
const cargaInicial = () => {
  if(listaProductos.length > 0){
    listaProductos.map((producto, orden) => crearFila(producto, orden + 1))
  }
}

const crearFila = (producto, fila) => {
  cuerpoTablaProductos.innerHTML += `
  <tr>
    <th scope="row">${fila}</th>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td>${producto.categoria}</td>
    <td>${producto.stock}</td>
    <td>
      <button class="btn btn-primary">Ver detalle</button>
      <button class="btn btn-warning mx-2" onclick="editarContacto('${producto.id}')">Editar</button>
      <button class="btn btn-danger">Borrar</button>
    </td>
  </tr>
  `;
}

//  Función para mostrar Modal
const mostrarModal = () => {
  limpiarFormulario()
  modalAdminProductos.show()
}

const limpiarFormulario = () => {
  formulario.reset();
};

const guardarEnLS = () => {
  localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos))
}

// Función para agregar un nuevo producto
function crearProducto(e) {
e.preventDefault()

//! Agregar validaciones JS
//! Agregar validaciones JS
//! Agregar validaciones JS
//! Agregar validaciones JS
//! Agregar validaciones JS




const nuevoProducto = new Producto(
  undefined,
  nombre.value,
  precio.value,
  categoria.value,
  urlImagen.value,
  descripcion.value,
  stock.value,
  )

  listaProductos.push(nuevoProducto)
  limpiarFormulario()

  guardarEnLS()

  crearFila(nuevoProducto, listaProductos.length)

  //! Agregar sweet alert
  //! Agregar sweet alert
  //! Agregar sweet alert
  //! Agregar sweet alert
  //! Agregar sweet alert
}

btnNuevoProducto.addEventListener('click', mostrarModal)
formulario.addEventListener('submit', crearProducto)

cargaInicial()