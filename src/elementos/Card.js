import { Link } from "react-router-dom";
import styled from "styled-components";

//.section__productos__cards__card
const DivContainer = styled.div`
  margin: 1.5rem 0.9rem 1rem 0;
  width: 13rem;
  box-shadow: 0.5rem 0.5rem 0.5rem #676666;

  @media (max-width: 480px) {
    width: 40%;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    width: 30%;
  }
`;
//.section__productos__cards__card img {
const Img = styled.img`
  width: 100%;
`;

//.section__productos__cards__card__titulo {
const Titulo = styled.h5`
  font-size: 1.3rem;
  margin: 0.5rem 0;
`;

//.section__productos__cards__card__precio {
const Precio = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

//.section__productos__cards__card__enlace {
const Enlace = styled(Link)`
  color: #2a7ae4;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

//styles.section__productos__cards__card__id
const IdTexto = styled.p`
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export { DivContainer, Img, Titulo, Precio, Enlace, IdTexto };
