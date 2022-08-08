//componentes, pages, js
import routes from "../helpers/routes";

import {
  Section,
  Article,
  Titulo,
  Subtitulo,
  Boton,
} from "../elementos/Banner";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <Section>
      <Article>
        <Titulo>Promociones</Titulo>
        <Subtitulo>Productos seleccionados con 50% de descuento</Subtitulo>
        <Link to={routes.promociones}>
          <Boton>Ver productos</Boton>
        </Link>
      </Article>
    </Section>
  );
}
