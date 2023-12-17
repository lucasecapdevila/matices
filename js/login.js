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

let admin1 = new Usuario("superadmin1@admin.com", "12345678");
let admin2 = new Usuario("superadmin2@admin.com", "12345678");

// Obtener usuarios existentes del local storage
let usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];

// Verificar si los usuarios existentes son diferentes de los nuevos usuarios
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
          console.log("Ingresando al sistema.");
          window.location.href = "../pages/administracion.html";
        }
      });
    } else {
      console.log("No hay usuarios almacenados en el localStorage.");
    }
  }
});
