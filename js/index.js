// Creamos un objeto para manejar la grilla de productos
const grillaProductos = document.getElementById("grillaProductos");

// Traemos la lista de producto del Local Storage
const listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];

console.log(listaProductos);

function generarGrilla() {
  listaProductos.forEach((producto) => {
    grillaProductos.innerHTML += `
    <div class="card cardProducto rounded-5 shadow mb-4">
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
        href="#"
        class="btn btn-verProducto rounded-4 p-2 px-4 tx-parrafo fs-6 mt-2"
        >Ver Detalles</a
      >
    </div>
  </div>
  `;
  });
}

generarGrilla();
