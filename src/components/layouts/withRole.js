//react
import { Navigate } from "react-router-dom";

//componentes, pages, js
import routes from "../../helpers/routes";
import { useAuth } from "../../auth/authProvider";

const withRole =
  (Component, type) =>
  ({ ...props }) => {
    const { admin } = useAuth();

    if (type === "admin" && admin) return <Component {...props} />;

    if (type === "cliente" && !admin) return <Component {...props} />;

    if (type === "admin" && !admin) return <Navigate to={routes.home} />;

    if (type === "cliente" && admin) return <Navigate to={routes.admin} />;
  };

export default withRole;
