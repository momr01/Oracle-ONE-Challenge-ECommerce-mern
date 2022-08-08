//react
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//componentes, pages, js
import InputComponent from "./InputComponent";
import TextAreaComponent from "./TextAreaComponent";
import SelectComponent from "./SelectComponent";
import { Error, Exito, Advertencia } from "./Alertas";
import routes from "../helpers/routes";
import { leyendasProducto } from "../helpers/leyendasError";
import { expresionesProducto } from "../helpers/expresionesRegulares";
import { createOneFile } from "../db/files";
import { createOneProduct, updateOneProduct } from "../db/productos";

//estilos
import { Formulario, BotonEnviar } from "../elementos/Formularios";

export default function ProductoForm({ agregar, producto }) {
  const navigate = useNavigate();

  const [file, setFile] = useState({
    campo: agregar ? "" : producto.file,
    data: null,
    valido: agregar ? null : "true",
  });
  const [categoria, setCategoria] = useState({
    campo: agregar ? "" : producto.categoria,
    valido: agregar ? null : "true",
  });
  const [nombre, setNombre] = useState({
    campo: agregar ? "" : producto.nombre,
    valido: agregar ? null : "true",
  });
  const [precio, setPrecio] = useState({
    campo: agregar ? "" : producto.precio,
    valido: agregar ? null : "true",
  });
  const [descripcion, setDescripcion] = useState({
    campo: agregar ? "" : producto.descripcion,
    valido: agregar ? null : "true",
  });
  const [form, setForm] = useState([]);

  useEffect(() => {
    const setValues = () => {
      setForm({
        file: file.campo,
        categoria: categoria.campo,
        nombre: nombre.campo,
        precio: precio.campo,
        descripcion: descripcion.campo,
      });
    };
    setValues();
  }, [categoria, nombre, precio, descripcion, file]);

  const grabarFile = async () => {
    const formdata = new FormData();
    formdata.append("file", file.data);

    try {
      const result = await createOneFile("products", formdata);
      return result;
    } catch (error) {
      return error;
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (
      file.valido === "true" &&
      categoria.valido === "true" &&
      nombre.valido === "true" &&
      precio.valido === "true" &&
      descripcion.valido === "true"
    ) {
      grabarDatos();
    } else {
      await Error("Los datos ingresados no son válidos.");
    }
  };

  const grabarDatos = async () => {
    let result;
    const alertaOpciones = await Advertencia(
      agregar ? "crear un nuevo producto" : "editar el producto"
    );

    if (alertaOpciones.isConfirmed) {
      const fileSaved = await grabarFile();

      if (fileSaved.statusText === "OK") {
        if (agregar) {
          result = await createOneProduct(form);
        } else {
          result = await updateOneProduct(producto._id, form);
        }
      }

      if (result?.statusText === "OK") {
        const alertaExito = await Exito(
          agregar ? "creó" : "modificó",
          "producto"
        );
        if (alertaExito.isConfirmed) {
          navigate(routes.admin);
        }
      } else {
        await Error("Ocurrió un error. Los datos no se guardaron.");
      }
    }
  };

  return (
    <>
      <Formulario onSubmit={submitForm}>
        <InputComponent
          type="file"
          name="file"
          id="file"
          placeholder=""
          error={leyendasProducto.file}
          regex={expresionesProducto.file}
          state={file}
          setState={setFile}
        />

        <SelectComponent
          name="categoria"
          id="categoria"
          error={leyendasProducto.categoria}
          state={categoria}
          setState={setCategoria}
        />
        <InputComponent
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Nombre de producto"
          error={leyendasProducto.nombre}
          regex={expresionesProducto.nombre}
          state={nombre}
          setState={setNombre}
        />
        <InputComponent
          type="number"
          name="precio"
          id="precio"
          placeholder="Precio del producto"
          error={leyendasProducto.precio}
          regex={expresionesProducto.precio}
          state={precio}
          setState={setPrecio}
        />

        <TextAreaComponent
          name="descripcion"
          id="descripcion"
          cols="30"
          rows="10"
          placeholder="Descripcion del producto"
          error={leyendasProducto.descripcion}
          regex={expresionesProducto.descripcion}
          state={descripcion}
          setState={setDescripcion}
        />
        {agregar ? (
          <BotonEnviar type="submit">Agregar producto</BotonEnviar>
        ) : (
          <BotonEnviar type="submit">Editar producto</BotonEnviar>
        )}
      </Formulario>
    </>
  );
}
