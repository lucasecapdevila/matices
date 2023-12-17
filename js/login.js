/* Validación Email */
let email = document.getElementById("inputEmail");
let errorEmail = document.getElementById("errorEmail");
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

email.addEventListener("input", () => {
  let valorCampo = email.value;

  if (!regexEmail.test(email.value)) {
    errorEmail.innerText = "Correo electrónico inválido.";
  } else errorEmail.innerText = "";
});

/*Validación Password */
let password = document.getElementById("inputPassword");
let errorPassword = document.getElementById("errorPassword");
console.log(password.length);

password.addEventListener("input", () => {
  if (password.value.length < 8) {
    errorPassword.innerText = "Contraseña Inválida.";
  } else errorPassword.innerText = "";
});
