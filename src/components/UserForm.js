//react
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

//componentes, pages, js
import routes from "../helpers/routes";
import { useAuth } from "../auth/authProvider";
import { Error, Exito } from "./Alertas";
import InputComponent from "./InputComponent";
import { leyendasLogin } from "../helpers/leyendasError";
import { expresionesLogin } from "../helpers/expresionesRegulares";
import { createOneUser, readAllUsers } from "../db/users";

//dependencies
import ReCAPTCHA from "react-google-recaptcha";

//estilos
import {
  BotonEnviar,
  Enlace,
  FormContainer,
  Formulario,
  MensajesContainer,
  MensajesPregunta,
  Section,
  Titulo,
} from "../elementos/Formularios";
import axios from "axios";
import urlDB from "../helpers/url";

export default function LoginForm({ isLogin }) {
  const captchaRef = useRef(null);

  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState({ campo: "", valido: null });
  const [password, setPassword] = useState({ campo: "", valido: null });
  const [form, setForm] = useState([]);

  useEffect(() => {
    const setValues = () => {
      setForm({
        email: email.campo,
        password: password.campo,
      });
    };
    setValues();
  }, [email, password]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const isVerified = await verificarRecaptcha();

    if (isVerified === "humano") {
      if (email.valido === "true" && password.valido === "true") {
        conectarBD();
      } else {
        await Error("Los datos ingresados no son válidos.");
      }
    } else {
      await Error("Los datos ingresados no son válidos.");
    }
  };

  const verificarRecaptcha = async () => {
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();

    const response = await axios.post(urlDB.recaptcha, { token });

    if (response.statusText === "OK") {
      return response.data;
    }
  };

  const conectarBD = async () => {
    const idEncontrado = [];
    const usuarios = await readAllUsers();

    if (usuarios.statusText === "OK") {
      usuarios.data.forEach((user) => {
        if (isLogin) {
          if (user.email === form.email && user.password === form.password) {
            idEncontrado.push(user);
          }
        } else {
          if (user.email === form.email) {
            idEncontrado.push(user);
          }
        }
      });
    } else {
      await Error("Error al intentar conectarse con la base de datos.");
    }
    validarDatos(idEncontrado);
  };

  const validarDatos = async (array) => {
    if (isLogin) {
      if (array.length === 1) {
        login(array[0].rol, array[0]._id);
      } else {
        await Error("Por favor revise los datos ingresados.");
      }
    } else {
      if (array.length > 0) {
        await Error("El mail ingresado ya corresponde a un usuario activo.");
      } else {
        crearUsuario();
      }
    }
  };

  const crearUsuario = async () => {
    console.log(form);
    const result = await createOneUser(form);

    if (result.statusText === "OK") {
      const exito = await Exito("creó", "usuario");
      if (exito.isConfirmed) {
        login(result.data.rol, result.data._id);
        navigate(routes.gestionarCliente(result.data._id));
      }
    } else {
      await Error(
        "No se creó el nuevo usuario. Por favor, intente nuevamente."
      );
    }
  };

  return (
    <Section>
      <FormContainer>
        <Titulo>{isLogin ? "Iniciar Sesión" : "Registrarse"}</Titulo>
        <Formulario onSubmit={onSubmit}>
          <InputComponent
            type="email"
            name="email"
            id="email"
            placeholder="Escriba su correo electrónico"
            error={leyendasLogin.email}
            regex={expresionesLogin.email}
            state={email}
            setState={setEmail}
          />
          <InputComponent
            type="password"
            name="password"
            id="password"
            placeholder="Escriba su contraseña"
            error={leyendasLogin.password}
            regex={expresionesLogin.password}
            state={password}
            setState={setPassword}
          />
          <div style={{ margin: "1rem auto" }}>
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_SITE_KEY}
              ref={captchaRef}
              size={window.innerWidth > 400 ? "normal" : "compact"}
            />
          </div>

          <BotonEnviar>{isLogin ? "Entrar" : "Crear usuario"}</BotonEnviar>
        </Formulario>
        {isLogin ? (
          <MensajesContainer>
            <MensajesPregunta>No tienes una cuenta?</MensajesPregunta>
            <Enlace to={routes.register}>Registrarse</Enlace>
          </MensajesContainer>
        ) : (
          <MensajesContainer>
            <MensajesPregunta>Ya tienes una cuenta?</MensajesPregunta>
            <Enlace to={routes.login}>Iniciar Sesión</Enlace>
          </MensajesContainer>
        )}
      </FormContainer>
    </Section>
  );
}
