//react
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//componentes, pages, js
import ProductoForm from "../components/ProductoForm";
import Loading from "../components/Loading";
import { readOneProduct } from "../db/productos";

//estilos
import { Section, FormContainer, Titulo } from "../elementos/Formularios";

export default function EditarProducto() {
  const history = useLocation();

  const getId = () => {
    const pathname = history.pathname;
    const array = pathname.split("/");
    const id = array[3];
    return id;
  };

  const id = getId();

  const [producto, setProducto] = useState({
    campo: "",
    valido: null,
  });

  useEffect(() => {
    const getProduct = async () => {
      const data = await readOneProduct(id);
      if (data.statusText === "OK") {
        setProducto({ campo: data.data, valido: "true" });
      }
    };
    window.scrollTo(0, 0);
    getProduct();
  }, [id]);

  return (
    <Section>
      <FormContainer>
        <Titulo>Editar producto</Titulo>
        {producto.valido === "true" ? (
          <ProductoForm agregar={false} producto={producto.campo} />
        ) : (
          <Loading />
        )}
      </FormContainer>
    </Section>
  );
}
