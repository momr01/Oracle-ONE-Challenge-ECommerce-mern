//react
import { useEffect } from "react";

//componentes, pages, js
import { useAuth } from "../auth/authProvider";

export default function Logout() {
  const { logout } = useAuth();

  useEffect(() => logout());
  return null;
}
