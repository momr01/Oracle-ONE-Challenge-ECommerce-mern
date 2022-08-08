//react
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

//componentes, pages, js
import { useAuth } from "../auth/authProvider";
import ClienteDatosForm from "../components/ClienteDatosForm";
import Loading from "../components/Loading";
import routes from "../helpers/routes";
import { readOneUser } from "../db/users";

//estilos
import { Section, FormContainer, Titulo } from "../elementos/Formularios";

export default function AgregarEditarCliente() {
  const { admin } = useAuth();

  const history = useLocation();

  const getId = () => {
    const pathname = history.pathname;
    const array = pathname.split("/");
    const id = array[3];
    return id;
  };

  const id = getId();

  const [usuario, setUsuario] = useState({
    campo: "",
    valido: null,
  });

  useEffect(() => {
    const getProduct = async () => {
      const data = await readOneUser(id);
      if (data.statusText === "OK") {
        setUsuario({ campo: data.data, valido: "true" });
      }
    };
    window.scrollTo(0, 0);
    getProduct();
  }, [id]);

  return (
    <>
      {admin === "true" ? (
        <Navigate to={routes.admin} />
      ) : (
        <Section>
          <FormContainer>
            <Titulo>Modificar datos cliente</Titulo>
            {usuario.valido === "true" ? (
              <ClienteDatosForm usuario={usuario.campo} />
            ) : (
              <Loading />
            )}
          </FormContainer>
        </Section>
      )}
    </>
  );
}
