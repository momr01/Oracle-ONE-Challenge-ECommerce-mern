//componentes, pages, js
import routes from "../helpers/routes";
import urlDB from "../helpers/url";

//estilos
import { DivContainer, Img, Titulo, Precio, Enlace } from "../elementos/Card";

export default function Card({ each }) {
  return (
    <>
      <DivContainer>
        <Img
          src={`${urlDB.getFiles}/products/${each.file}`}
          alt={`${each.nombre}`}
        />
        <Titulo>{each.nombre}</Titulo>
        <Precio>$ {each.precio}</Precio>
        <Enlace to={routes.producto(each._id)}>Ver producto</Enlace>
      </DivContainer>
    </>
  );
}
