//react
import { useEffect } from "react";

//componentes, pages, js
import Banner from "../components/Banner.js";
import Categoria from "../components/Categoria.js";

//estilos
import { SectionProductos } from "../elementos/Categoria.js";

export default function HomePage() {
  const categorias = ["TV-Series", "Movies", "Music"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <SectionProductos>
        {categorias.map((categoria) => (
          <Categoria key={categoria} categoria={categoria} home={true} />
        ))}
      </SectionProductos>
    </>
  );
}
