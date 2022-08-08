//react
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//componentes, pages, js
import InputComponent from "./InputComponent";
import { Error, Exito, Advertencia } from "./Alertas";
import routes from "../helpers/routes";
import { leyendasUsuario } from "../helpers/leyendasError";
import { expresionesUsuario } from "../helpers/expresionesRegulares";
import { createOneFile } from "../db/files";
import { updateOneUser } from "../db/users";

//estilos
import {
  Formulario,
  BotonEnviar,
  BotonNoGuardar,
} from "../elementos/Formularios";

export default function ClienteDatosForm({ usuario }) {
  const navigate = useNavigate();

  const [foto, setFoto] = useState({
    campo: usuario.foto || undefined,
    data: null,
    valido: usuario.foto ? "true" : null,
  });
  const [nombres, setNombres] = useState({
    campo: usuario.nombres || "",
    valido: usuario.nombres ? "true" : null,
  });
  const [apellidos, setApellidos] = useState({
    campo: usuario.apellidos || "",
    valido: usuario.apellidos ? "true" : null,
  });
  const [email, setEmail] = useState({ campo: usuario.email, valido: "true" });
  const [nombreUser, setNombreUsuario] = useState({
    campo: usuario.nombreUser || "",
    valido: usuario.nombreUser ? "true" : null,
  });
  const [password, setPassword] = useState({
    campo: usuario.password,
    valido: "true",
  });
  const [domicilio, setDomicilio] = useState({
    campo: usuario.domicilio || "",
    valido: usuario.domicilio ? "true" : null,
  });
  const [dni, setDni] = useState({
    campo: usuario.dni || "",
    valido: usuario.dni ? "true" : null,
  });
  const [celular, setCelular] = useState({
    campo: usuario.celular || "",
    valido: usuario.celular ? "true" : null,
  });
  const [fechaNac, setFechaNac] = useState({
    campo: usuario.fechaNac || "",
    valido: usuario.fechaNac ? "true" : null,
  });
  const [form, setForm] = useState([]);
  const [esValido, setEsValido] = useState([]);

  useEffect(() => {
    const setValues = () => {
      setForm({
        foto: foto.campo,
        nombres: nombres.campo,
        apellidos: apellidos.campo,
        email: email.campo,
        nombreUser: nombreUser.campo,
        password: password.campo,
        domicilio: domicilio.campo,
        dni: dni.campo,
        celular: celular.campo,
        fechaNac: fechaNac.campo,
      });
    };
    setValues();
  }, [
    foto,
    nombres,
    apellidos,
    email,
    nombreUser,
    password,
    domicilio,
    dni,
    celular,
    fechaNac,
  ]);

  useEffect(() => {
    const setValidez = () => {
      setEsValido({
        foto: foto.valido,
        nombres: nombres.valido,
        apellidos: apellidos.valido,
        email: email.valido,
        nombreUser: nombreUser.valido,
        password: password.valido,
        domicilio: domicilio.valido,
        dni: dni.valido,
        celular: celular.valido,
        fechaNac: fechaNac.valido,
      });
    };
    setValidez();
  }, [
    foto,
    nombres,
    apellidos,
    email,
    nombreUser,
    password,
    domicilio,
    dni,
    celular,
    fechaNac,
  ]);

  const grabarFile = async () => {
    const formdata = new FormData();
    formdata.append("file", foto.data);

    try {
      const result = await createOneFile("users", formdata);
      return result;
    } catch (error) {
      return error;
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const keys = Object.keys(form);
    const cambios = [];

    if (email.valido === "true" && password.valido === "true") {
      keys.forEach((key) => {
        if (usuario[key] !== form[key] && esValido[key] === "true") {
          cambios.push(key);
        }
      });

      if (cambios.length > 0) editarDatos(cambios);
      else await Error("No existen cambios para actualizar.");
    } else {
      await Error("Los datos ingresados no son válidos.");
    }
  };

  const editarDatos = async (cambios) => {
    const alertaOpciones = await Advertencia("modificar sus datos");

    if (alertaOpciones.isConfirmed) {
      if (cambios.includes("foto")) await grabarFile();

      const result = await updateOneUser(usuario._id, form);

      if (result?.statusText === "OK") {
        const alertaExito = await Exito("actualizó", "usuario");
        if (alertaExito.isConfirmed) {
          navigate(routes.clienteMain(usuario._id));
        }
      } else {
        await Error("Ocurrió un error. Los datos no se guardaron.");
      }
    }
  };

  return (
    <>
      <Formulario onSubmit={submitForm}>
        <InputComponent
          type="file"
          name="foto"
          id="foto"
          placeholder=""
          error={leyendasUsuario.foto}
          regex={expresionesUsuario.foto}
          state={foto}
          setState={setFoto}
        />
        <InputComponent
          type="text"
          name="nombres"
          id="nombres"
          placeholder="Nombres"
          error={leyendasUsuario.nombres}
          regex={expresionesUsuario.nombres}
          state={nombres}
          setState={setNombres}
        />
        <InputComponent
          type="text"
          name="apellidos"
          id="apellidos"
          placeholder="Apellidos"
          error={leyendasUsuario.apellidos}
          regex={expresionesUsuario.apellidos}
          state={apellidos}
          setState={setApellidos}
        />
        <InputComponent
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          error={leyendasUsuario.email}
          regex={expresionesUsuario.email}
          state={email}
          setState={setEmail}
          isDisabled={true}
        />
        <InputComponent
          type="text"
          name="nombreUsuario"
          id="nombreUsuario"
          placeholder="Usuario"
          error={leyendasUsuario.nombreUser}
          regex={expresionesUsuario.nombreUser}
          state={nombreUser}
          setState={setNombreUsuario}
        />
        <InputComponent
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          error={leyendasUsuario.password}
          regex={expresionesUsuario.password}
          state={password}
          setState={setPassword}
        />
        <InputComponent
          type="text"
          name="domicilio"
          id="domicilio"
          placeholder="Domicilio"
          error={leyendasUsuario.domicilio}
          regex={expresionesUsuario.domicilio}
          state={domicilio}
          setState={setDomicilio}
        />
        <InputComponent
          type="number"
          name="dni"
          id="dni"
          placeholder="DNI"
          error={leyendasUsuario.dni}
          regex={expresionesUsuario.dni}
          state={dni}
          setState={setDni}
        />
        <InputComponent
          type="number"
          name="celular"
          id="celular"
          placeholder="Celular"
          error={leyendasUsuario.celular}
          regex={expresionesUsuario.celular}
          state={celular}
          setState={setCelular}
        />
        <InputComponent
          type="date"
          name="fechaNacimiento"
          id="fechaNacimiento"
          placeholder=""
          error={leyendasUsuario.fechaNac}
          regex={expresionesUsuario.fechaNac}
          state={fechaNac}
          setState={setFechaNac}
        />

        <BotonEnviar type="submit">Guardar cambios</BotonEnviar>
        <BotonNoGuardar
          onClick={() => navigate(routes.clienteMain(usuario._id))}
        >
          Continuar sin guardar cambios
        </BotonNoGuardar>
      </Formulario>
    </>
  );
}
