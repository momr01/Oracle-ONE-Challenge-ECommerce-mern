const expresionesLogin = {
  email: /^([a-z0-9]+)[._-]?([a-z0-9]?)+[@][a-z]+[.][a-z]+[.]?[a-z]+$/,
  password: /^[a-z]{5}[0-9]{2}[\W]{1}$/,
};

const expresionesProducto = {
  file: /.(jpe?g|gif|png)$/i,
  nombre: /^[a-zA-Z\s]{5,40}$/,
  precio: /^\d{4,10}$/,
  descripcion: /^[\W\w]{10,1000}$/,
};

const expresionesUsuario = {
  foto: /.(jpe?g|gif|png)$/i,
  nombres: /^[a-zA-Z\s]{3,40}$/,
  apellidos: /^[a-zA-Z\s]{5,40}$/,
  email: /^([a-z0-9]+)[._-]?([a-z0-9]?)+[@][a-z]+[.][a-z]+[.]?[a-z]+$/,
  nombreUser: /^[a-zA-Z\s]{5,40}$/,
  password: /^[a-z]{5}[0-9]{2}[\W]{1}$/,
  domicilio: /^[a-zA-Z\s]{5,40}$/,
  dni: /^[0-9]{7,8}$/,
  celular: /^[0-9]{10,11}$/,
  fechaNac: /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/,
};

const expresionesContacto = {
  nombre: /^[a-zA-Zñ\s]{5,40}$/,
  email: /^([a-z0-9]+)[._-]?([a-z0-9]?)+[@][a-z]+[.][a-z]+[.]?[a-z]+$/,
  mensaje: /^[a-zA-Z\s]{10,500}$/,
};
export {
  expresionesLogin,
  expresionesProducto,
  expresionesUsuario,
  expresionesContacto,
};
