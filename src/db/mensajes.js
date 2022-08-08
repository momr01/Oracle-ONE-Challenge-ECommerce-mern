import axios from "axios";
import urlDB from "../helpers/url";

const createOneMensaje = async (data) => {
  const res = await axios.post(urlDB.mensajes, data);

  return res;
};

const readOneMensaje = () => {};

const readAllMensajes = async () => {
  const res = await axios.get(urlDB.mensajes);

  return res;
};

const updateOneMensaje = () => {};

const deleteOneMensaje = () => {};

export {
  createOneMensaje,
  readAllMensajes,
  readOneMensaje,
  updateOneMensaje,
  deleteOneMensaje,
};
