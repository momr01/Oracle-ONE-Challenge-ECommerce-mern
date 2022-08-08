//react
import { useState } from "react";

//componentes, pages, js
import Card from "./Card";
import InputComponent from "./InputComponent";
import { readAllProducts } from "../db/productos";

//dependencias
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";

//estilos
import { Canvas, CanvasBody, CanvasTitulo } from "../elementos/Formularios";

export default function SearchForm() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({ campo: "", valido: null });
  const [exito, setExito] = useState(false);
  const [resultados, setResultados] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (e) => {
    e.preventDefault();
    handleShow();
    if (input.campo.length > 3) comenzarBusqueda(input.campo);
    else setExito(false);
  };

  const comenzarBusqueda = async (text) => {
    const res = [];
    const datos = await readAllProducts();

    if (datos.statusText === "OK") {
      datos.data.forEach((prod) => {
        if (
          prod.categoria.toLowerCase().includes(text) ||
          prod.descripcion.toLowerCase().includes(text) ||
          prod.nombre.toLowerCase().includes(text)
        ) {
          res.push(prod);
        } else {
        }
      });
    }

    if (res.length > 0) setExito(true);
    else setExito(false);

    setResultados(res);
  };
  return (
    <>
      <Form
        className="d-flex"
        onSubmit={onSubmit}
        style={{ alignItems: "center" }}
      >
        <InputComponent
          type="text"
          name="search"
          id="search"
          placeholder="Qué desea buscar?"
          error=""
          regex={/^[a-zA-Z]{4,20}$/}
          state={input}
          setState={setInput}
        />
        <Button
          style={{ height: "auto" }}
          type="submit"
          variant="outline-success"
        >
          Search
        </Button>
      </Form>
      <Canvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <CanvasTitulo>Resultados</CanvasTitulo>
        </Offcanvas.Header>
        <CanvasBody>
          {!exito
            ? "Sin resultados"
            : resultados.map((each, index) => <Card key={index} each={each} />)}
        </CanvasBody>
      </Canvas>
    </>
  );
}
