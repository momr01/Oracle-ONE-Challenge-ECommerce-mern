//react
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

//componentes, pages, js
import routes from "../helpers/routes";
import InputComponent from "./InputComponent";
import TextAreaComponent from "./TextAreaComponent";
import { Error, Exito } from "./Alertas";
import { readAllUsers } from "../db/users";
import { createOneMensaje } from "../db/mensajes";
import { expresionesContacto } from "../helpers/expresionesRegulares";
import { leyendasContacto } from "../helpers/leyendasError";

//dependencias
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

//estilos
import {
  Section,
  Container,
  LogoContainer,
  NavContainer,
  UlNav,
  LiNav,
  FormContainer,
  Form,
  FormTitulo,
  FormBoton,
  FormTituloContainer,
  WhatsappContainer,
  WhatsappLogo,
} from "../elementos/Contacto";

export default function Contacto() {
  return <FormComponent />;
}

const FormComponent = () => {
  const location = useLocation();
  const path = location.pathname;

  const [nombre, setNombre] = useState({ campo: "", valido: null });
  const [email, setEmail] = useState({ campo: "", valido: null });
  const [mensaje, setMensaje] = useState({ campo: "", valido: null });
  const [idUser, setIdUser] = useState({ campo: "", valido: null });
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (reload) {
      const getUsers = async () => {
        const found = [];
        const users = await readAllUsers();
        if (users.statusText === "OK") {
          users.data.forEach((user) => {
            if (email.campo === user.email) {
              found.push(user._id);
            } else {
              found.push();
            }
          });
        }
        setIdUser({ campo: found, valido: "true" });
        setReload(false);
      };
      getUsers();
    }
  }, [nombre, email, mensaje, idUser, reload]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setReload(true);
    if (
      email.valido === "true" &&
      nombre.valido === "true" &&
      mensaje.valido === "true"
    ) {
      grabarEnBD();
    } else {
      await Error("Por favor revise los datos ingresados.");
    }
  };
  const grabarEnBD = async () => {
    const result = await createOneMensaje({
      nombre: nombre.campo,
      email: email.campo,
      mensaje: mensaje.campo,
      idUser: idUser.campo.toString(),
    });
    if (result.statusText === "OK") {
      const exito = await Exito("envió", "mensaje");
      if (exito.isConfirmed) {
        window.location.href = `${routes.home}`;
      }
    }
  };
  return (
    <Section>
      <Container>
        <LogoContainer>
          {path === "/" ? (
            <img
              onClick={() => window.scrollTo(0, 0)}
              src="/assets/Logo.png"
              alt="logo"
              style={{ cursor: "pointer" }}
            />
          ) : (
            <Link to={routes.home}>
              <img src="/assets/Logo.png" alt="logo" />
            </Link>
          )}
        </LogoContainer>
        <NavContainer>
          <nav>
            <UlNav>
              <LiNav>Quienes somos</LiNav>
              <LiNav>Política de privacidad</LiNav>
              <LiNav>Programa de fidelidad</LiNav>
              <LiNav>Nuestras Tiendas</LiNav>
              <LiNav>Quiero ser franquiciado</LiNav>
              <LiNav>Anuncie aquí</LiNav>
            </UlNav>
          </nav>
        </NavContainer>
        <FormContainer>
          <FormTituloContainer>
            <FormTitulo>Hable con nosotros</FormTitulo>
            <BtnWhatsapp />
          </FormTituloContainer>
          <Form onSubmit={onSubmit}>
            <InputComponent
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
              error={leyendasContacto.nombre}
              regex={expresionesContacto.nombre}
              state={nombre}
              setState={setNombre}
            />
            <InputComponent
              type="email"
              name="email"
              id="email2"
              placeholder="Correo electrónico"
              error={leyendasContacto.email}
              regex={expresionesContacto.email}
              state={email}
              setState={setEmail}
            />
            <TextAreaComponent
              name="mensaje"
              id="mensaje"
              cols="30"
              rows="10"
              placeholder="Escriba su mensaje"
              error={leyendasContacto.mensaje}
              regex={expresionesContacto.mensaje}
              state={mensaje}
              setState={setMensaje}
            />
            <FormBoton type="submit">Enviar mensaje</FormBoton>
          </Form>
        </FormContainer>
      </Container>
    </Section>
  );
};

const BtnWhatsapp = () => {
  const overlayWhatsapp = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Enviame un whatsapp
    </Tooltip>
  );

  return (
    <>
      <WhatsappContainer
        number="+54 9 2613 01-6290"
        message="Hola! Quiero ponerme en contacto. Muchas gracias!"
      >
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={overlayWhatsapp}
        >
          <WhatsappLogo src="/assets/whatsapp.png" alt="whatsapp" />
        </OverlayTrigger>
      </WhatsappContainer>
    </>
  );
};
