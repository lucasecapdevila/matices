export const validarNombreProducto = (texto, min, max) => {
  if (texto.length >= min && texto.length <= max) {
    return true;
  } else {
    alert(`El nombre debe tener entre ${min} y ${max} caracteres.`);
    return false;
  }
};

export const validarPrecio = (precio) => {
  if (isNaN(precio) || precio <= 0) {
    alert("Por favor, ingrese un valor numérico mayor que cero.");
    return false;
  } else {
    return true;
  }
};

export const validarCategoria = (texto, min, max) => {
  if (texto.length >= min && texto.length <= max) {
    return true;
  } else {
    alert(`La categoría debe tener entre ${min} y ${max} caracteres.`);
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
    alert("Por favor, ingrese una URL válida.");
    return false;
  }
};

export const validarDescripcionProd = (texto, min, max) => {
  if (texto.length >= min && texto.length <= max) {
    return true;
  } else {
    alert(`La descripción debe tener entre ${min} y ${max} caracteres.`);
    return false;
  }
};

export const validarCantStock = (precio) => {
  if (isNaN(precio) || precio <= 0) {
    alert("Por favor, ingrese un valor numérico mayor que cero.");
    return false;
  } else {
    return true;
  }
};
