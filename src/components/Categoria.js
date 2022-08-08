//react
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//componentes, pages, js
import Card from "./Card";
import Loading from "./Loading";
import routes from "../helpers/routes";
import { readAllProducts } from "../db/productos";

//estilos
import {
  TituloContainer,
  Titulo,
  Enlace,
  Boton,
  DivProductos,
} from "../elementos/Categoria";

export default function Categoria({ categoria, home }) {
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const array = [];
      const res = await readAllProducts();

      if (res.statusText === "OK") {
        res.data.forEach((prod) => {
          if (prod.categoria === categoria) {
            array.push(prod);
          }
        });
        setProductos(array);
      }
    };
    getProducts();
  }, [categoria]);

  return (
    <>
      <TituloContainer>
        <Titulo>{categoria}</Titulo>
        {home ? (
          <Enlace to={routes.categoria(categoria)}>Ver todo</Enlace>
        ) : (
          <Link to={routes.home}>
            <Boton>Volver</Boton>
          </Link>
        )}
      </TituloContainer>

      <DivProductos>
        {productos === null ? (
          <Loading />
        ) : (
          productos.map((each) => <Card each={each} key={each._id} />)
        )}
      </DivProductos>
    </>
  );
}
