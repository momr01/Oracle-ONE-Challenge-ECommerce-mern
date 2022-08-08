//const DB = "http://localhost:3034";
const DB = "https://alura-ecommerce-db.herokuapp.com";

const urlDB = {
  //productos: "https://alura-ecommerce-db.herokuapp.com/api/products",
  productos: `${DB}/api/products`,
  users: `${DB}/api/users`,
  mensajes: `${DB}/api/mensajes`,
  postFiles: `${DB}/api/files`,
  getFiles: `${DB}/img`,
  recaptcha: `${DB}/api/recaptcha`,
};

export default urlDB;
