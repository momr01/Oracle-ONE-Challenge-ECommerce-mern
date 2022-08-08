//dependencias
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Error = async (text) => {
  return await MySwal.fire({
    title: "Error!",
    text: text,
    icon: "error",
    confirmButtonText: "Volver",
    confirmButtonColor: "#F74923",
  });
};

const Exito = async (verb, text) => {
  return await MySwal.fire({
    title: "Exito!",
    text: `Se ${verb} el ${text}.`,
    icon: "success",
    confirmButtonText: "Ok",
    confirmButtonColor: "#8AE46B",
  });
};

const Advertencia = async (text) => {
  return await MySwal.fire({
    title: "Atención!",
    text: `Está seguro que desea ${text}?`,
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    cancelButtonColor: "#F74923",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#8AE46B",
  });
};

export { Error, Exito, Advertencia };
