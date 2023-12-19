/* Navbar logica */
const navbar = document.getElementById("lista-navbar");

function navbar_admin() {
  let logged = localStorage.getItem("logged");

  if (logged == 1) {
    navbar.innerHTML += `<li class="nav-item ms-auto mb-2" id="administracion-navbar">
    <a
      class="hvr-underline-from-left nav-link tx-RosaMatices fs-5"
      href="/pages/administracion.html"
      >Administración</a
    >
  </li>`;
  }
}

navbar_admin();
