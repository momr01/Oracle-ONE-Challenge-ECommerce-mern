import { Navigate, Outlet } from "react-router-dom";
import routes from "../helpers/routes";
import { useAuth } from "../auth/authProvider";

export default function PrivateRoute() {
  //consumimos el contexto, nos quedamos solo con isAuthenticated
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={routes.login} />;
  }

  //con outlet se pintara el componente mas cercano, dentro del mismo grupo
  return (
    <div>
      <Outlet />
    </div>
  );
}
