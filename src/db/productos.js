import axios from "axios";
import urlDB from "../helpers/url";

const createOneProduct = async (data) => {
  const res = await axios.post(`${urlDB.productos}`, data);

  return res;
};

const readOneProduct = async (id) => {
  const res = await axios.get(`${urlDB.productos}/${id}`);

  return res;
};

const readAllProducts = async () => {
  const res = await axios.get(urlDB.productos);

  return res;
};

const updateOneProduct = async (id, data) => {
  const res = await axios.put(`${urlDB.productos}/${id}`, data);

  return res;
};

const deleteOneProduct = async (id) => {
  const res = await axios.delete(`${urlDB.productos}/${id}`);

  return res;
};

export {
  createOneProduct,
  readAllProducts,
  readOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
