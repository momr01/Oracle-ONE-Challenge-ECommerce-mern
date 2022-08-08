//componentes, pages, js
import withRole from "../components/layouts/withRole";
import ProductoForm from "../components/ProductoForm";

//estilos
import { Section, FormContainer, Titulo } from "../elementos/Formularios";

const AgregarProducto = () => {
  return (
    <Section>
      <FormContainer>
        <Titulo>Agregar nuevo producto</Titulo>
        <ProductoForm agregar={true} />
      </FormContainer>
    </Section>
  );
};

export default withRole(AgregarProducto, "admin");
