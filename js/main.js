import Producto from "./classProducto.js";

// Validaciones JS para formulario de administración
import { validarNombreProducto, validarPrecio, validarCategoria, validarImgProd, validarDescripcionProd, validarCantStock } from "./validaciones.js";

// Modal de Bootstrap
const modalAdminProductos = new bootstrap.Modal(
  document.getElementById("adminProductos")
);

//* Variables que se usarán
let creandoProducto = true;

//  Traigo item de LS
const listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];

const tablaProductos = document.getElementById("tabla");
const tituloSinProductos = document.getElementById("sinProductos");
const formulario = document.getElementById("formularioProducto");
const btnNuevoProducto = document.getElementById("btnNuevoProducto");
const btnConfirmar = document.getElementById("confirmarEdicionProducto");

//  Formulario de creación/edición
const nombre = document.getElementById("nombreProducto"),
  precio = document.getElementById("precioProducto"),
  categoria = document.getElementById("categoriaProducto"),
  urlImagen = document.getElementById("imagenProducto"),
  descripcion = document.getElementById("descripcionProducto"),
  stock = document.getElementById("stockDeProducto");

const cuerpoTablaProductos = document.getElementById("cuerpoTablaProductos");

//* Funciones
const cargaInicial = () => {
  if (listaProductos.length > 0) {
    listaProductos.map((producto, orden) => crearFila(producto, orden + 1));
    tituloSinProductos.classList.add("d-none");
    tablaProductos.classList.add("d-table");
  } else {
    tablaProductos.classList.add("d-none");
  }
};

const crearFila = (producto, fila) => {
  cuerpoTablaProductos.innerHTML += `
  <tr>
    <th scope="row">${fila}</th>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td>${producto.categoria}</td>
    <td>${producto.stock}</td>
    <td class="d-flex justify-content-center">
      <button class="btn btn-primary">Ver detalle</button>
      <button class="btn btn-warning mx-2" onclick="editarProducto('${producto.id}')">Editar</button>
      <button class="btn btn-danger">Borrar</button>
    </td>
  </tr>
  `;
};

//  Función para mostrar Modal
const mostrarModal = () => {
  limpiarFormulario();
  modalAdminProductos.show();
};

const ocultarModal = () => {
  modalAdminProductos.hide();
};

const limpiarFormulario = () => {
  formulario.reset();
};

const guardarEnLS = () => {
  localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos));
};

// Función para agregar un nuevo producto
function crearProducto(e) {
  e.preventDefault();

  if (creandoProducto) {
    //Validaciones JS
    if (validarNombreProducto(nombreProducto.value, 3, 30) && 
        validarPrecio(precioProducto.value, 1, 2000) &&
        validarCategoria(categoriaProducto.value, 3, 20) &&
        validarImgProd(imagenProducto.value) &&
        validarDescripcionProd(descripcionProducto.value, 10, 100) &&
        validarCantStock(stockDeProducto.value, 1, 1000)){

    const nuevoProducto = new Producto(
      undefined,
      nombre.value,
      precio.value,
      categoria.value,
      urlImagen.value,
      descripcion.value,
      stock.value
    );

    listaProductos.push(nuevoProducto);
    limpiarFormulario();

    guardarEnLS();

    tablaProductos.classList.remove("d-none");
    crearFila(nuevoProducto, listaProductos.length);
    tituloSinProductos.classList.add("d-none");

    //  Mostrar Sweet Alert
    Swal.fire({
      title: "Se agregó el producto exitosamente",
      text: `El producto ${nuevoProducto.nombre} fue creado exitosamente.`,
      icon: "success",
    });
    }else alert('Hay errores en el formulario');
  }
}

window.editarProducto = (idProducto) => {
  const posicionProductoAEditar = listaProductos.findIndex(
    (item) => item.id === idProducto
  );

  //  Variables necesarias
  const producto = listaProductos[posicionProductoAEditar];
  const filaProducto = cuerpoTablaProductos.children[0];
  const nombreTabla = filaProducto.children[1];
  const precioTabla = filaProducto.children[2];
  const categoriaTabla = filaProducto.children[3];
  const stockTabla = filaProducto.children[4];
  creandoProducto = false;

  if (!creandoProducto) {
    mostrarModal();
    nombre.value = producto.nombre;
    precio.value = producto.precio;
    categoria.value = producto.categoria;
    urlImagen.value = producto.urlImagen;
    descripcion.value = producto.descripcion;
    stock.value = producto.stock;

    btnConfirmar.addEventListener("click", () => {
      Swal.fire({
        title: "¿Deseas guardar los cambios?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonColor: "green",
        confirmButtonText: "Guardar",
        denyButtonText: `No guardar`,
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          //  Dibujo datos en la tabla
          nombreTabla.innerText = nombre.value;
          precioTabla.innerText = precio.value;
          categoriaTabla.innerText = categoria.value;
          stockTabla.innerText = stock.value;

          //  Guardo los nuevos datos en LS
          producto.nombre = nombre.value;
          producto.precio = precio.value;
          producto.categoria = categoria.value;
          producto.urlImagen = urlImagen.value;
          producto.descripcion = descripcion.value;
          producto.stock = stock.value;
          guardarEnLS();

          Swal.fire("Guardado exitosamente!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("No se realizaron cambios.", "", "info");
        }
      });
      ocultarModal();
    });
  }
};

btnNuevoProducto.addEventListener("click", mostrarModal);
formulario.addEventListener("submit", crearProducto);

cargaInicial();
