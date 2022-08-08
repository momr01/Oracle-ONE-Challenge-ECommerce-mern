import { Routes, Route } from "react-router-dom";

//pages
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Producto from "../pages/Producto";
import VerCategoriaEntera from "../pages/VerCategoriaEntera";
import Administracion from "../pages/Administracion";
import AgregarProducto from "../pages/AgregarProducto";
import EditarProducto from "../pages/EditarProducto";
import Logout from "../pages/Logout";
import Register from "../pages/Register";
// import NotFoundPage from "../pages/NotFoundPage";
// import SeePdf from "../pages/SeePdf";

//helpers
import routes from "../helpers/routes";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import ClientePage from "../pages/ClientePage";
import AgregarEditarCliente from "../pages/AgregarEditarCliente";
import Promociones from "../pages/Promociones";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<HomePage />}></Route>
        <Route path={routes.producto()} element={<Producto />}></Route>
        <Route
          path={routes.categoria()}
          element={<VerCategoriaEntera />}
        ></Route>
        <Route path={routes.promociones} element={<Promociones />}></Route>
        <Route path={routes.access} element={<PublicRoute />}>
          <Route path={routes.login} element={<Login />}></Route>
          <Route path={routes.register} element={<Register />}></Route>
        </Route>
        <Route path={routes.admin} element={<PrivateRoute />}>
          <Route index element={<Administracion />}></Route>
          <Route path={routes.agregar} element={<AgregarProducto />}></Route>
          <Route path={routes.editar()} element={<EditarProducto />}></Route>
          <Route path={routes.logout} element={<Logout />}></Route>
        </Route>
        <Route path={routes.cliente} element={<PrivateRoute />}>
          <Route path={routes.clienteMain()} element={<ClientePage />}></Route>
          <Route
            path={routes.gestionarCliente()}
            element={<AgregarEditarCliente />}
          ></Route>
        </Route>
        <Route path="*" element={<h1>404</h1>}></Route>

        {/* <Route exact path={routes.pdf} element={<SeePdf />} />
        <Route exact path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </>
  );
}
