let cantidad = 1

const parametroURL = new URLSearchParams(window.location.search)
const idProducto = parametroURL.get('id')

const listaProductos = JSON.parse(localStorage.getItem('listaProductosKey'))

const productoBuscado = listaProductos.find((iteProducto) => iteProducto.id === idProducto)

const mainDetalleProducto = document.querySelector('main')
mainDetalleProducto.innerHTML += `
  <section class="row mx-0">
    <!-- Contenedor imágen del producto -->
    <div class="col-md-6 px-0">
      <img
        src="${productoBuscado.urlImagen}"
        class="w-100 h-auto"
        alt="${productoBuscado.nombre}"
      />
    </div>

    <!-- Título y precio -->
    <div
      class="col-md-6 mx-0 px-0 d-flex flex-column align-items-center align-items-lg-start fondoAzul d-lg-none"
    >
      <p
        class="w-50 text-center text-uppercase fw-bold px-2 my-2 mx-auto mx-lg-0 text-light fw-lighter rounded-2 tx-parrafo bg-RosaOscuro"
      >
        Hotsale
      </p>
      <p
        class="text-center text-lg-start col-lg-4 my-2 my-md-4 text-uppercase text-secondary"
      >
        Código: ${productoBuscado.id}
      </p>
      <h1 class="col-10 text-center text-lg-start text-uppercase tx-titulo">
        ${productoBuscado.nombre}
      </h1>
      <p
        class="my-2 my-md-4 text-center text-lg-start text-uppercase tx-RosaMatices"
      >
        ${productoBuscado.categoria}
      </p>
      <button
        class="btn col-4 text-light rounded-5 mt-2 px-3 fw-medium bg-verdePrecio"
        type="button"
      >
        $${productoBuscado.precio}
      </button>
    </div>

    <!-- Descripción -->
    <div
      class="mt-2 mt-md-5 col-12 col-md-6 mt-5 mx-0 d-lg-none ps-md-4 px-4"
    >
      <h2 class="col-12 text-md-start text-center text-uppercase tx-titulo">
        Descripción
      </h2>
      <p class="col-12 tx-parrafo lh-lg textoDescripcion">
        ${productoBuscado.descripcion}
      </p>
    </div>

    <!-- Comprar -->
    <div class="col-12 col-md-6 mb-4 mt-md-5 d-lg-none">
      <div class="d-flex justify-content-center align-items-center">
        <p class="mb-0 me-5 fs-4">Cantidad:</p>
        <button
          type="button"
          class="fs-3 lh-1 rounded-2 px-2 pb-1 btnCantidad"
        >
          -
        </button>
        <input
          class="border-0 rounded-2 text-center mx-4 px-2 py-2 inputCantidad"
          value="${cantidad}"
        />
        <button
          type="button"
          class="fs-3 lh-1 rounded-2 px-1 pb-1 btnCantidad"
          onclick="incrementarCantidad()"
        >
          +
        </button>
      </div>
      <p class="col-12 my-3 my-md-4 text-center text-secondary tx-parrafo">
        (${productoBuscado.stock} Disponibles)
      </p>
      <div
        class="col-9 d-flex flex-column flex-lg-row align-items-lg-center mx-auto mb-lg-5 pb-lg-5"
      >
        <button
          class="btn w-100 my-3 mx-lg-2 text-light fw-medium btnAgregarAlCarrito"
        >
          Agregar al Carrito
        </button>
        <button class="btn w-100 fw-medium btnAgregarAListaDeDeseos">
          Agregar a Lista de Deseos
        </button>
      </div>
    </div>

    <!-- Pantalla en Desktops -->
    <article
      class="col-6 d-none d-lg-flex flex-column px-5 py-0 fondoAzul justify-content-center"
    >
      <!-- Título y precio -->
      <div class="align-items-lg-start mb-4">
        <p
          class="w-25 text-center text-uppercase fw-bold py-1 text-light fw-lighter rounded-2 tx-parrafo bg-RosaOscuro"
        >
          Hotsale
        </p>
        <p
          class="text-center text-lg-start text-uppercase text-secondary mb-2"
        >
          Código: ${productoBuscado.id}
        </p>
        <h1
          class="col-10 text-center text-lg-start text-uppercase tx-titulo"
        >
          ${productoBuscado.nombre}
        </h1>
        <p class="text-center text-lg-start text-uppercase tx-RosaMatices">
          ${productoBuscado.categoria}
        </p>
        <button
          class="btn col-4 text-light rounded-5 mt-2 px-3 fw-medium bg-verdePrecio fs-4"
          type="button"
        >
          $${productoBuscado.precio}
        </button>
      </div>

      <!-- Descripción -->
      <div class="">
        <h2
          class="col-12 text-md-start text-center text-uppercase tx-titulo"
        >
          Descripción
        </h2>
        <p class="col-12 tx-parrafo lh-lg textoDescripcion">
          ${productoBuscado.descripcion}
        </p>
      </div>

      <!-- Comprar -->
      <div class="">
        <div class="d-flex justify-content-center align-items-center">
          <p class="mb-0 me-5 fs-4">Cantidad:</p>
          <button
            type="button"
            class="fs-3 lh-1 rounded-2 px-2 pb-1 btnCantidad"
          >
            -
          </button>
          <input
            class="border-0 rounded-2 text-center mx-4 px-2 py-2 inputCantidad"
            value="${cantidad}"
          />
          <button
            type="button"
            class="fs-3 lh-1 rounded-2 px-1 pb-1 btnCantidad"
            onclick="incrementarCantidad()"
          >
            +
          </button>
        </div>
        <p
          class="col-12 my-3 my-md-4 text-center text-secondary tx-parrafo"
        >
          (${productoBuscado.stock} Disponibles)
        </p>
        <div class="text-center">
          <button class="btn mx-2 text-light fw-medium btnAgregarAlCarrito">
            Agregar al Carrito
          </button>
          <button class="btn fw-medium btnAgregarAListaDeDeseos">
            Agregar a Lista de Deseos
          </button>
        </div>
      </div>
    </article>
  </section>`

  window.incrementarCantidad = () => {
    const cantidadAComprar = document.querySelectorAll('.inputCantidad')
    
    for (let i = 1; i < cantidadAComprar.length; i++){
      console.log(cantidad++);
    }
  }