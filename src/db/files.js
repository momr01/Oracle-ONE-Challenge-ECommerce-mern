import axios from "axios";
import urlDB from "../helpers/url";

const createOneFile = async (type, data) => {
  //const res = await axios.post(`${urlDB.postFiles}/users`, data);
  const res = await axios.post(`${urlDB.postFiles}/${type}`, data);

  return res;
};

const readOneFile = () => {};

const readAllFiles = () => {};

const updateOneFile = () => {};

const deleteOneFile = () => {};

export {
  createOneFile,
  readAllFiles,
  readOneFile,
  updateOneFile,
  deleteOneFile,
};
