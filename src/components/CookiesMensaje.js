//react
import { useState, useEffect } from "react";

//estilos
import { Boton, Container, Texto } from "../elementos/Cookies";

export default function CookiesMensaje() {
  const KEY = "COOKIES_ACCEPTED";

  const [item, setItem] = useState(localStorage.getItem(KEY));

  useEffect(() => {
    const getItemFromLS = () => {
      const data = localStorage.getItem(KEY);
      setItem(data);
    };
    getItemFromLS();
  }, [item]);

  const entendido = () => {
    localStorage.setItem(KEY, "accepted");
    setItem(localStorage.getItem(KEY));
  };

  return (
    <>
      {item === null && (
        <Container>
          <Texto>
            Al navegar por este sitio{" "}
            <span style={{ fontWeight: "bold" }}>
              aceptás el uso de cookies
            </span>{" "}
            para agilizar tu experiencia.
          </Texto>
          <Boton onClick={entendido}>ENTENDIDO</Boton>
        </Container>
      )}
    </>
  );
}
