//react
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//componentes, pages, js
import Card from "../components/Card";
import Loading from "../components/Loading";
import { readAllProducts, readOneProduct } from "../db/productos";
import urlDB from "../helpers/url";

//estilos
import { Main, DivContainer, Section } from "../elementos/Producto";
import {
  ImgContainer,
  Img,
  InfoContainer,
  Nombre,
  Precio,
  Descripcion,
} from "../elementos/MainProduct";
import { SimilaresTitulo } from "../elementos/MainProduct";
import { CardsContainer } from "../elementos/Producto";

export default function Producto() {
  const history = useLocation();

  const getId = () => {
    const pathname = history.pathname;
    const array = pathname.split("/");
    const id = array[2];
    return id;
  };

  const id = getId();

  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const datos = await readOneProduct(id);

      if (datos.data) {
        setProducto(datos.data);
      }
    };

    window.scrollTo(0, 0);
    getProduct();
  }, [id]);

  return (
    <>
      <Main>
        <DivContainer>
          <Section>
            {producto === null ? (
              <Loading />
            ) : (
              <MainProduct key={producto._id} producto={producto} />
            )}
          </Section>
          {producto === null ? (
            <Loading />
          ) : (
            <ResSimilares categoria={producto.categoria} id={id} />
          )}
        </DivContainer>
      </Main>
    </>
  );
}

const MainProduct = ({ producto }) => {
  return (
    <>
      <ImgContainer>
        <Img
          src={`${urlDB.getFiles}/products/${producto.file}`}
          alt={`${producto.nombre}`}
        />
      </ImgContainer>
      <InfoContainer>
        <Nombre>{producto.nombre}</Nombre>
        <Precio>$ {producto.precio}</Precio>
        <Descripcion>{producto.descripcion}</Descripcion>
      </InfoContainer>
    </>
  );
};

const ResSimilares = (props) => {
  const { categoria, id } = props;

  const [productos, setProductos] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const array = [];
      const res = await readAllProducts();

      res.data.forEach((prod) => {
        if (prod.categoria === categoria && prod._id !== id) {
          array.push(prod);
        }
      });
      setProductos(array);
    };

    getProducts();
  }, [categoria, id]);

  return (
    <>
      <SimilaresTitulo>Productos similares</SimilaresTitulo>
      <CardsContainer>
        {productos === null ? (
          <Loading />
        ) : (
          productos.map((prod, index) => <Card key={index} each={prod} />)
        )}
      </CardsContainer>
    </>
  );
};
