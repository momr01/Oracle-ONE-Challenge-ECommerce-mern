import { Navigate, Outlet } from "react-router-dom";
import routes from "../helpers/routes";
import { useAuth } from "../auth/authProvider";

export default function PublicRoute() {
  //consumimos el contexto, nos quedamos solo con isAuthenticated
  const { isAuthenticated, admin, id } = useAuth();

  if (isAuthenticated) {
    if (admin) return <Navigate to={routes.admin} />;
    else return <Navigate to={routes.clienteMain(id)} />;
  }

  //con outlet se pintara el componente mas cercano, dentro del mismo grupo
  return (
    <div>
      <Outlet />
    </div>
  );
}
