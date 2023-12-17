export const validarNombreProducto = (texto, min, max) => {
    if (texto.length >= min && texto.length <= max) {
      return true;
    } else {
      alert('Por favor, ingrese una nombre válido.');
      return false;
    }
};
  
export const validarPrecio = (precio) => {
    if (isNaN(precio) || precio <= 0) {
      return false;
    } else {
      return true;
    }
};

export const validarCategoria = (texto, min, max) => {
    if (texto.length >= min && texto.length <= max) {
      return true;
    } else {
      return false;
    }
};

export const validarImgProd = (url) => {
    const patron =
    /^(ftp|http|https):\/\/[^ "]+$/;

   if (patron.test(url)) {
     return true;
   } else {
     alert('Por favor, ingrese una URL válida.');
     return false;
   }
};

export const validarDescripcionProd = (texto, min, max) => {
    if (texto.length >= min && texto.length <= max) {
      return true;
    } else {
      return false;
    }
};

export const validarCantStock = () => {
    if (isNaN(precio) || precio <= 0) {
      return false;
    } else {
      return true;
    }
};
