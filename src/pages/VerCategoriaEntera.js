//react
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

//componentes, pages, js
import Categoria from "../components/Categoria";

//estilos
import { MainProductos, SectionProductos } from "../elementos/Categoria";

export default function VerCategoriaEntera() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useLocation();

  const getCategoria = () => {
    const pathname = history.pathname;
    const array = pathname.split("/");
    const categoria = array[2];
    return categoria;
  };

  const categoria = getCategoria();

  return (
    <MainProductos>
      <SectionProductos>
        <Categoria categoria={categoria} index={false} />
      </SectionProductos>
    </MainProductos>
  );
}
