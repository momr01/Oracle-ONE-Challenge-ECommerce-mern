//react
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//componentes, pages, js
import routes from "../helpers/routes";
import urlDB from "../helpers/url";
import Loading from "../components/Loading";
import withRole from "../components/layouts/withRole";
import { readOneUser } from "../db/users";
import { readAllMensajes } from "../db/mensajes";

//estilos
import { BotonEnviar } from "../elementos/Formularios";
import {
  Article,
  BtnContainer,
  DivDatosTitulo,
  ImgContainer,
  ImgPerfil,
  Lista,
  ListaItem,
  ListaItemBold,
  ListaItemContainer,
  Main,
  NombreCliente,
  Section,
  SectionImg,
  TituloSection,
} from "../elementos/Cliente";

const ClientePage = () => {
  return <Cliente />;
};

const Cliente = () => {
  const navigate = useNavigate();
  const history = useLocation();

  const getId = () => {
    const pathname = history.pathname;
    const array = pathname.split("/");
    const id = array[3];
    return id;
  };

  const id = getId();

  const [user, setUser] = useState({
    campo: "",
    valido: null,
  });
  const [mensajes, setMensajes] = useState({ campo: [], valido: null });

  const keys = [
    "nombres",
    "apellidos",
    "email",
    "nombreUser",
    "password",
    "domicilio",
    "dni",
    "celular",
    "fechaNac",
  ];

  useEffect(() => {
    const getUser = async () => {
      const data = await readOneUser(id);
      if (data.statusText === "OK") {
        setUser({ campo: data.data, valido: "true" });
      }
    };
    window.scrollTo(0, 0);
    getUser();
  }, [id]);

  useEffect(() => {
    const allMsjs = [];
    const getMensajes = async () => {
      const data = await readAllMensajes();

      if (data.statusText === "OK") {
        data.data.forEach((msj) => {
          if (msj.idUser === id) {
            allMsjs.push(msj);
          }
        });
      }

      setMensajes({ campo: allMsjs, valido: "true" });
    };
    getMensajes();
  }, [id]);

  const formatearFecha = (campo) => {
    if (campo === "") {
      return "-";
    } else {
      const array = campo.split("-");

      const day = array[2];
      const month = array[1];
      const year = array[0];

      const final = `${day}/${month}/${year}`;

      return final;
    }
  };

  return (
    <Main>
      <Article>
        <Section>
          <TituloSection>
            Cliente:{" "}
            {user.valido && (
              <NombreCliente>
                {user.campo.nombres} {user.campo.apellidos}
              </NombreCliente>
            )}
          </TituloSection>
        </Section>
        <Section>
          <DivDatosTitulo>
            <TituloSection>Datos personales</TituloSection>
            <BtnContainer>
              <BotonEnviar
                onClick={() => navigate(routes.gestionarCliente(id))}
              >
                Editar datos
              </BotonEnviar>
            </BtnContainer>
          </DivDatosTitulo>

          {user.valido ? (
            <>
              <SectionImg>
                <ImgContainer>
                  <ImgPerfil
                    src={`${urlDB.getFiles}/users/${user.campo.foto}`}
                    alt={`${user.campo.foto}`}
                  />
                </ImgContainer>
              </SectionImg>
              <Lista>
                {keys.map((key, index) => (
                  <ListaItem key={index}>
                    <ListaItemContainer>
                      <ListaItemBold>{key}</ListaItemBold>
                    </ListaItemContainer>
                    {key === "fechaNac"
                      ? formatearFecha(user.campo[key])
                      : user.campo[key]}
                  </ListaItem>
                ))}
              </Lista>
            </>
          ) : (
            <Loading />
          )}
        </Section>

        <Section>
          <TituloSection>Compras realizadas</TituloSection>
        </Section>
        <Section>
          <TituloSection>Mensajes enviados</TituloSection>
          {mensajes.valido ? (
            <>
              <Lista>
                {mensajes.campo.map((mensaje, index) => (
                  <ListaItem key={index}>
                    <ListaItemContainer>
                      <ListaItemBold>{mensaje.mensaje}</ListaItemBold>
                    </ListaItemContainer>
                  </ListaItem>
                ))}
              </Lista>
            </>
          ) : (
            <Loading />
          )}
        </Section>
      </Article>
    </Main>
  );
};

export default withRole(ClientePage, "cliente");
