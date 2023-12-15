export default class Producto {
  #id;
  #nombre;
  #precio;
  #categoria;
  #urlImagen;
  #descripcion;
  #stock;

  constructor (id = crypto.randomUUID(), nombre, precio, categoria, urlImagen, descripcion, stock) {
    this.#id = id
    this.#nombre = nombre
    this.#precio = precio
    this.#categoria = categoria
    this.#urlImagen = urlImagen
    this.#descripcion = descripcion
    this.#stock = stock
  }

  get id() {
    return this.#id
  }

  get nombre() {
    return this.#nombre
  }

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre
  }
  
  get precio() {
    return this.#precio
  }
  
  set precio(nuevoPrecio) {
    this.#precio = nuevoPrecio
  }

  get categoria() {
    return this.#categoria
  }
  
  set categoria(nuevoCategoria) {
    this.#categoria = nuevoCategoria
  }
  
  get urlImagen() {
    return this.#urlImagen
  }
  
  set urlImagen(nuevoUrlImagen) {
    this.#urlImagen = nuevoUrlImagen
  }
  
  get descripcion() {
    return this.#descripcion
  }
  
  set descripcion(nuevaDescripcion) {
    this.#descripcion = nuevaDescripcion
  }
  
  get stock() {
    return this.#stock
  }
  
  set stock(nuevoStock) {
    this.#stock = nuevoStock
  }

  //  Método para el objeto JSON.stringify
  toJSON(){
    return{
      id: this.id,
      nombre: this.nombre,
      precio: this.precio,
      categoria: this.categoria,
      urlImagen: this.urlImagen,
      descripcion: this.descripcion,
      stock: this.stock
    }
  }
}