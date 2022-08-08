import axios from "axios";
import urlDB from "../helpers/url";

const createOneUser = async (data) => {
  const res = await axios.post(urlDB.users, data);

  return res;
};

const readOneUser = async (id) => {
  const res = await axios.get(`${urlDB.users}/${id}`);

  return res;
};

const readAllUsers = async () => {
  const res = await axios.get(urlDB.users);

  return res;
};

const updateOneUser = async (id, data) => {
  const res = await axios.put(`${urlDB.users}/${id}`, data);

  return res;
};

const deleteOneUser = () => {};

export {
  createOneUser,
  readAllUsers,
  readOneUser,
  updateOneUser,
  deleteOneUser,
};
