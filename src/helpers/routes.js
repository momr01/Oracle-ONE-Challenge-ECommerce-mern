const routes = {
  home: "/",
  producto: (id) => (id ? `/producto/${id}` : "/producto/:id"),
  categoria: (categoria) =>
    categoria ? `/categoria/${categoria}` : "/categoria/:categoria",
  promociones: "/promociones",
  access: "/access",
  login: "/access/login",
  register: "/access/register",
  admin: "/admin",
  logout: "/admin/logout",
  agregar: "/admin/agregar",
  editar: (id) => (id ? `/admin/editar/${id}` : "/admin/editar/:id"),
  clienteMain: (id) => (id ? `/cliente/main/${id}` : "/cliente/main/:id"),
  cliente: "/cliente",
  //addCliente: "/cliente/agregar",
  gestionarCliente: (id) =>
    id ? `/cliente/gestionar/${id}` : "/cliente/gestionar/:id",
};

export default routes;
