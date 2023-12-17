export const validarNombreProducto = (texto, min, max) => {
    if (texto.length >= min && texto.length <= max) {
      return true;
    } else {
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

export const validarImgProd = (texto) => {
    const patron =
    /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

   if (patron.test(texto)) {
     return true;
   } else {
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
