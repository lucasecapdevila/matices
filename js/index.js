// Creamos una constante para manejar la grilla de productos
const grillaProductos = document.getElementById("grillaProductos");

// Traemos la lista de producto del Local Storage
const listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];

// Creamos un constante para manejar el input del buscador
let inputBuscador = document.getElementById("inputBuscar");

// Creamos un constante para manejar el formulario del buscador
let buscador = document.getElementById("buscador");

// Funcion para crear el producto
function crearProducto(producto) {
  grillaProductos.innerHTML += `
  <div class="card cardProducto rounded-5 shadow mb-4 mb-lg-5 mx-0">
  <img
    src="${producto.urlImagen}"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body d-flex flex-column align-items-center pb-4">
    <h5 class="card-title text-center">${producto.nombre}</h5>
    <h5 class="fs-5 tx-RosaMatices tx-intermedio text-center">
    ${producto.categoria}
    </h5>
    <h5
      class="tx-titulo text-center bg-verdePrecio w-50 px-1 py-2 rounded-4 text-light"
    >
      $${producto.precio}
    </h5>
    <a
      href="/pages/detalleProducto.html?id=${producto.id}"
      class="btn btn-verProducto rounded-4 p-2 px-4 tx-parrafo fs-6 mt-2"
      >Ver Detalles</a
    >
  </div>
</div>
`;
}

// Funcion para generar la grilla al entrar a inicio
function generarGrilla() {
  listaProductos.forEach((producto) => {
    crearProducto(producto);
  });
}

generarGrilla();

// Función para realizar la busqueda
buscador.addEventListener("submit", (e) => {
  e.preventDefault();
  // Limpiamos la grilla
  grillaProductos.innerHTML = "";

  // Recorremos el arreglo de productos
  listaProductos.forEach((producto) => {
    // Convertimos a minusculas el nombre y la categoria del producto
    let nombreProducto = producto.nombre.toLowerCase();
    let categoriaProducto = producto.categoria.toLowerCase();

    // Si se ingreso texto en la busqueda, se busca esa entrada en el nombre o la categoria de cada producto
    if (
      nombreProducto.includes(inputBuscador.value.toLowerCase()) ||
      categoriaProducto.includes(inputBuscador.value.toLowerCase())
    ) {
      crearProducto(producto);
    }
  });
});

inputBuscador.addEventListener("input", () => {
  // Si no se busco nada, se genera la grilla completa nuevamente
  if (inputBuscador.value == "") {
    grillaProductos.innerHTML = "";
    generarGrilla();
  }
});
