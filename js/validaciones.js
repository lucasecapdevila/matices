export const validarNombreProducto = (texto, min, max) => {
  if (texto.length >= min && texto.length <= max) {
    return true;
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `El nombre debe tener entre ${min} y ${max} caracteres.`,
    });
    return false;
  }
};

export const validarPrecio = (precio, min, max) => {
  if (isNaN(precio) || precio <= 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, ingrese un valor numérico y que sea mayor que cero.",
    });
    return false;
  } else if ((precio < min || precio > max)){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `El precio debe estar entre ${min} y ${max}.`,
    });
    return false;
  } else {
    return true;
  }
};

export const validarCategoria = (texto, min, max) => {
  if (texto.length >= min && texto.length <= max) {
    return true;
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `La categoría debe tener entre ${min} y ${max} caracteres.`,
    });
    return false;
  }
};

export const validarImgProd = (url) => {
  const patronURL =
    /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/;
  const patronIMG = /\.(png|jpg|jpeg|gif)$/i;

  if (patronURL.test(url) && patronIMG.test(url)) {
    return true;
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, ingrese una URL válida.",
    });
    return false;
  }
};

export const validarDescripcionProd = (texto, min, max) => {
  if (texto.length >= min && texto.length <= max) {
    return true;
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `La descripción debe tener entre ${min} y ${max} caracteres.`,
    });
    return false;
  }
};

export const validarCantStock = (cantidad) => {
  if (isNaN(cantidad) || cantidad <= 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, ingrese un valor numérico mayor que cero.",
    });
    return false;
  } else {
    return true;
  }
};
