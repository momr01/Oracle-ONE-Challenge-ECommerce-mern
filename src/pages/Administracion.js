//react
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

//componentes, pages, js
import { Advertencia, Error, Exito } from "../components/Alertas";
import Loading from "../components/Loading";
import routes from "../helpers/routes";
import urlDB from "../helpers/url";
import withRole from "../components/layouts/withRole";
import { IdTexto, Precio, Titulo } from "../elementos/Card";
import { deleteOneProduct, readAllProducts } from "../db/productos";
import { readAllMensajes } from "../db/mensajes";

//dependencias
import { Table } from "antd";

//estilos
import {
  Main,
  Section,
  TituloContainer,
  TituloAdm,
  Boton,
  ProductoContainer,
  CardContainer,
  ImgContainer,
  IconDelete,
  IconEdit,
  Img,
  LineaSeparadora,
} from "../elementos/Administracion";
import { TituloSection } from "../elementos/Cliente";

const Administracion = () => {
  const [productos, setProductos] = useState({ campo: [], valido: null });
  const [reload, setReload] = useState(false);
  const [mensajes, setMensajes] = useState({ campo: "", valido: null });

  useEffect(() => {
    const getData = async () => {
      const data = await readAllProducts();
      if (data.statusText === "OK") {
        setProductos({ campo: data.data, valido: "true" });
      }
    };
    getData();
    setReload(false);
  }, [reload]);

  useEffect(() => {
    const getMensajes = async () => {
      const data = await readAllMensajes();
      if (data.statusText === "OK") {
        setMensajes({ campo: data.data, valido: "true" });
      }
    };
    getMensajes();
    //console.log(mensajes);
  }, []);

  return (
    <>
      <Main>
        <Section>
          <TituloContainer>
            <TituloAdm>Todos los productos</TituloAdm>
            <Link to={routes.agregar}>
              <Boton>Agregar producto</Boton>
            </Link>
          </TituloContainer>
          {productos.valido === "true" ? (
            <ProductoContainer>
              {productos.campo.map((each, index) => (
                <Producto key={index} each={each} setReload={setReload} />
              ))}
            </ProductoContainer>
          ) : (
            <Loading />
          )}
        </Section>

        <Section>
          <LineaSeparadora />
        </Section>

        <Section>
          <TituloSection>Mensajes recibidos</TituloSection>
          {mensajes.valido === "true" ? (
            <Tabla mensajes={mensajes.campo} />
          ) : (
            <Loading />
          )}
        </Section>
      </Main>
    </>
  );
};

const Producto = ({ each, setReload }) => {
  const navigate = useNavigate();

  const eliminarProducto = async (id) => {
    console.log(id);
    const warning = await Advertencia("eliminar el producto");

    if (warning.isConfirmed) {
      const eliminar = await deleteOneProduct(id);
      if (eliminar.statusText === "OK") {
        const exito = await Exito("eliminó", "producto");

        if (exito.isConfirmed) {
          setReload(true);
          navigate(routes.admin);
        }
      } else {
        await Error("Ocurrió un error. El producto no se pudo eliminar.");
      }
    }
  };

  return (
    <CardContainer>
      <ImgContainer>
        <IconDelete
          src="/assets/delete.svg"
          alt=""
          onClick={() => eliminarProducto(each._id)}
        />
        <Link to={routes.editar(each._id)}>
          <IconEdit src="../assets/edit.svg" alt="" />
        </Link>
        <Img
          src={`${urlDB.getFiles}/products/${each.file}`}
          alt={each.nombre}
        />
      </ImgContainer>

      <Titulo>{each.nombre}</Titulo>
      <Precio>$ {each.precio}</Precio>
      <IdTexto>{each._id}</IdTexto>
    </CardContainer>
  );
};

const Tabla = ({ mensajes }) => {
  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Mensaje",
      dataIndex: "mensaje",
      key: "mensaje",
    },
  ];

  const dataSource = [];

  mensajes.forEach((mensaje) => {
    const newRow = {
      key: mensaje._id,
      nombre: mensaje.nombre,
      email: mensaje.email,
      mensaje: mensaje.mensaje,
    };

    dataSource.push(newRow);
  });

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={{ pageSize: 5 }}
    />
  );
};

export default withRole(Administracion, "admin");
