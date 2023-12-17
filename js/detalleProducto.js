const parametroURL = new URLSearchParams(window.location.search)
const idProducto = parametroURL.get('id')

const listaProductos = JSON.parse(localStorage.getItem('listaProductosKey'))

const productoBuscado = listaProductos.find((iteProducto) => iteProducto.id === idProducto)

const mainDetalleProducto = document.querySelector('main')
mainDetalleProducto.innerHTML += `
  <article class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="https://images.pexels.com/photos/5797908/pexels-photo-5797908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="img-fluid rounded-start"
          alt="${productoBuscado.nombre}"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Producto: ${productoBuscado.nombre}</h5>
          <ul>
            <li>Precio: ${productoBuscado.precio}</li>
            <li>Descripción: ${productoBuscado.descripcion}</li>
          </ul>
        </div>
      </div>
    </div>
  </article>`