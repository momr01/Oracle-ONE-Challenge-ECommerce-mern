import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Offcanvas from "react-bootstrap/Offcanvas";

//.section__ingreso {
const Section = styled.section`
  background-color: #f5f5f5;
`;

//.section__form__container {
const FormContainer = styled.div`
  margin: 0 auto;
  padding: 5rem 0;
  width: 80%;
  @media (max-width: 480px) {
    width: 90%;
  }
`;

//.section__form {
const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  @media (max-width: 480px) {
    width: 90%;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    width: 80%;
  }
`;

//.section__form__titulo {
const Titulo = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

//.section__form__btn {
const BotonEnviar = styled.button`
  background-color: #2a7ae4;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  height: 3rem;

  &:hover {
    background-color: #162f50;
  }
`;

const BotonNoGuardar = styled.button`
  background-color: #85929E;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  height: 3rem;
  margin-top: 1rem;

  &:hover {
    background-color: #34495E;
  }
`;

//.section__form__email,
// .section__form__password,
// .section__form__url,
// .section__form__categoria,
// .section__form__producto,
// .section__form__precio {
//
const Input = styled.input`
  border-radius: 0.6rem;
  box-sizing: border-box;
  height: 3rem;
  margin: 0.5rem 0;
  outline: none;
  padding: 0 0.5rem;
  width: 100%;

  ${(props) =>
    props.valido === "true" &&
    css`
      border: 0.2rem solid green !important;
    `}

  ${(props) =>
    props.valido === "false" &&
    css`
      border: 0.2rem solid red !important;
    `}
`;

//.section__form__descripcion {
const TextArea = styled.textarea`
  border-radius: 0.6rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  outline: none;
  padding: 1rem 0.5rem 0 0.5rem;
  resize: none;
  width: 100%;

  ${(props) =>
    props.valido === "true" &&
    css`
      border: 0.2rem solid green !important;
    `}

  ${(props) =>
    props.valido === "false" &&
    css`
      border: 0.2rem solid red !important;
    `}
`;

// margin-bottom: 1rem;
const Select = styled.select`
  border-radius: 0.6rem;
  box-sizing: border-box;
  height: 3rem;
  margin: 0.5rem 0;
  outline: none;
  padding: 0 0.5rem;

  ${(props) =>
    props.valido === "true" &&
    css`
      border: 0.2rem solid green !important;
    `}

  ${(props) =>
    props.valido === "false" &&
    css`
      border: 0.2rem solid red !important;
    `}
`;

// .mensaje__error__login,
// .div__error__agregar__producto,
// .div__error__editar__producto {
const LeyendaError = styled.div`
  margin-bottom: 1rem;
  color: red;
  font-weight: bold;
  display: none;

  ${(props) =>
    props.valido === "true" &&
    css`
      display: none;
    `}

  ${(props) =>
    props.valido === "false" &&
    css`
      display: block;
    `}
`;

const MensajesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const MensajesPregunta = styled.h3`
  font-size: 1.3rem;
  margin: auto 1rem;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Enlace = styled(Link)`
  font-size: 1.3rem;
  text-decoration: none;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Canvas = styled(Offcanvas)`
  @media (max-width: 480px) {
    width: 80%;
  }
`;

const CanvasTitulo = styled(Offcanvas.Title)`
  padding-left: 5rem;
`;

const CanvasBody = styled(Offcanvas.Body)`
  text-align: center;
  padding-left: 4rem;
`;

export {
  Section,
  FormContainer,
  Formulario,
  BotonEnviar,
  BotonNoGuardar,
  LeyendaError,
  Input,
  TextArea,
  Select,
  Titulo,
  MensajesContainer,
  MensajesPregunta,
  Enlace,
  Canvas,
  CanvasTitulo,
  CanvasBody,
};
