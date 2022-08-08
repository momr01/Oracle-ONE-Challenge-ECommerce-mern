const leyendasLogin = {
  email: "El email ingresado no es válido",
  password:
    "La contraseña ingresada no es válida. Debe respetar el orden: 5 letras + 2 números + 1 símbolo.",
};

const leyendasProducto = {
  file: "Debe seleccionar una imagen",
  categoria: "Debe seleccionar una categoría",
  nombre: "Debe ingresar el nombre del producto",
  precio: "Debe ingresar el precio del producto",
  descripcion: "Debe ingresar una descripción del producto",
};

const leyendasUsuario = {
  foto: "Debe seleccionar una imagen válida",
  nombres: "Los nombres ingresados deben tener como mínimo 3 caracteres",
  apellidos: "Los apellidos ingresados deben tener como mínimo 5 caracteres",
  email: "El email ingresado no es válido",
  nombreUser: "El nombre de usuario debe tener 8 caracteres y ningún espacio",
  password:
    "La contraseña ingresada no es válida. Debe respetar el orden: 5 letras + 2 números + 1 símbolo.",
  domicilio: "El domicilio debe tener como mínimo 5 caracteres",
  dni: "Debe ingresar un DNI válido, sólo números, sin puntos ni espacios, y debe tener de 7 a 8 caracteres",
  celular:
    "Debe ingresar un número de celular válido, sin 0 y sin 15. Ejemplo: 2615555555",
  fechaNac: "Debe ingresar una fecha válida",
};

const leyendasContacto = {
  nombre: "Por favor ingrese un nombre válido.",
  email: "Por favor ingrese un email válido.",
  mensaje:
    "Por favor ingrese un mensaje que contenga 10 caracteres como mínimo y hasta 500 caracteres como máximo.",
};

export { leyendasLogin, leyendasProducto, leyendasUsuario, leyendasContacto };
