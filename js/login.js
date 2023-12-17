/* Login */
/* Validación Email */
let email = document.getElementById("inputEmail");
let errorEmail = document.getElementById("errorEmail");
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let validationMail = false;

email.addEventListener("input", () => {
  let valorCampo = email.value;

  if (!regexEmail.test(email.value)) {
    errorEmail.innerText = "Correo electrónico inválido.";
    validationMail = false;
  } else {
    errorEmail.innerText = "";
    validationMail = true;
  }
});

/*Validación Password */
let password = document.getElementById("inputPassword");
let errorPassword = document.getElementById("errorPassword");
let validationPassword = false;

password.addEventListener("input", () => {
  if (password.value.length < 8) {
    errorPassword.innerText = "Contraseña Inválida.";
    validationPassword = false;
  } else {
    errorPassword.innerText = "";
    validationPassword = true;
  }
});

/* Array de usuarios almacenado en local storage */
class Usuario {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

let admin1 = new Usuario("superadmin1@admin.com", "admin@404_2qwe");
let admin2 = new Usuario("superadmin2@admin.com", "12345678");

// Obtenemos usuarios existentes del local storage
let usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];

// Verificamos si los usuarios existentes son diferentes de los nuevos usuarios
const usuariosDiferentes =
  !usuariosGuardados.some(
    (usuario) =>
      usuario.email === admin1.email && usuario.password === admin1.password
  ) ||
  !usuariosGuardados.some(
    (usuario) =>
      usuario.email === admin2.email && usuario.password === admin2.password
  );

// Si hay usuarios diferentes, actualizar el local storage
if (usuariosDiferentes) {
  usuariosGuardados.push(admin1);
  usuariosGuardados.push(admin2);
  localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));
}

console.log("Usuarios Guardados:");
usuariosGuardados.forEach((usuario) => {
  console.log(`Email: ${usuario.email}, Password: ${usuario.password}`);
});

/* Formulario validación */
formulario = document.getElementById("form");

formulario.addEventListener("submit", (e) => {
  let token = false;
  e.preventDefault();
  if (validationMail && validationPassword) {
    // Traemos los datos del local storage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    // Verificamos si hay usuarios almacenados
    if (usuarios.length > 0) {
      // Imprimimos el array en consola
      console.log("Array de usuarios recuperado:", usuariosGuardados);

      // Iteramos sobre el array y validamos
      usuariosGuardados.forEach(function (usuario) {
        if (
          usuario.email === email.value &&
          usuario.password === password.value
        ) {
          Swal.fire({
            title: '<h2 class="tx-titulo text-center">¡Bienvenido!</h2>',
            text: "¡Iniciaste sesión!",
            icon: "success",
            confirmButtonText: "Continuar",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,

            customClass: {
              popup: "rounded-5",
              confirmButton: "btn-modal",
            },
          }).then((result) => {
            if (result.isConfirmed) {
              console.log("Ingresando al sistema.");
              window.location.href = "../pages/administracion.html";
            }
          });
          token = true;
          localStorage.setItem("logged", 1);
        }
      });

      if (token === false) {
        Swal.fire({
          title:
            '<h2 class="tx-titulo text-center">¡No pudimos iniciar sesión!</h2>',
          text: "Los datos que ingresaste son incorrectos...",
          icon: "error",
          confirmButtonText: "Reintentar",
          confirmButtonColor: "#f12b2b",

          customClass: {
            popup: "rounded-5",
          },
        });
      }
    } else {
      console.log("No hay usuarios almacenados en el localStorage.");
    }
  }
});

/* Navbar logica */
const navbar = document.getElementById("lista-navbar");

function navbar_admin() {
  let logged = localStorage.getItem("logged");

  if (logged == 1) {
    navbar.innerHTML += `<li class="nav-item ms-auto mb-2" id="administracion-navbar">
    <a
      class="hvr-underline-from-left nav-link tx-RosaMatices fs-5"
      href="./administracion.html"
      >Administración</a
    >
  </li>`;
  }
}

navbar_admin();

/* Loggin desactivado */
const contenedorLogin = document.getElementById("container-login");
const admin_navbar = document.getElementById("administracion-navbar");

function desactivarLogin() {
  let logged = localStorage.getItem("logged");

  if (logged == 1) {
    Swal.fire({
      icon: "success",
      title: '<h2 class="tx-titulo text-center">¡Ya iniciaste sesión!</h2>',
      text: "¿Quierés cerrar la sesión actual?",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Cancelar",
      denyButtonText: "Cerrar Sesión",
      customClass: {
        popup: "rounded-5",
        confirmButton: "btn-modal rounded-4",
        denyButton: "rounded-4",
      },
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        window.location.href = "../pages/administracion.html";
      } else if (result.isDenied) {
        localStorage.setItem("logged", 0);
        admin_navbar.remove();
      }
    });
  } else {
  }
}

desactivarLogin();
