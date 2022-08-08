//react
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//componentes, pages, js
import Card from "../components/Card";
import Loading from "../components/Loading";
import { readAllProducts } from "../db/productos";
import routes from "../helpers/routes";

//estilos
import {
  MainProductos,
  Boton,
  DivProductos,
  SectionProductos,
  Titulo,
  TituloContainer,
} from "../elementos/Categoria";

export default function Promociones() {
  const [productos, setProductos] = useState({ campo: "", valido: null });

  useEffect(() => {
    const getData = async () => {
      const enPromo = [];
      const results = await readAllProducts();

      if (results.statusText === "OK") {
        results.data.forEach((res) => {
          if (res.promocion) {
            enPromo.push(res);
          }
        });
      }
      setProductos({ campo: enPromo, valido: "true" });
    };
    getData();
  }, []);

  if (productos.valido === "true")
    return (
      <MainProductos>
        <SectionProductos>
          <TituloContainer>
            <Titulo>Promociones</Titulo>
            <Link to={routes.home}>
              <Boton>Volver</Boton>
            </Link>
          </TituloContainer>
          <DivProductos>
            {productos.campo.map((each) => (
              <Card each={each} key={each._id} />
            ))}
          </DivProductos>
        </SectionProductos>
      </MainProductos>
    );
  else return <Loading />;
}
