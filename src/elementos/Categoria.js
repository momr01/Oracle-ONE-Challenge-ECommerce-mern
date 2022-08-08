import { Link } from "react-router-dom";
import styled from "styled-components";

// .section__productos {
//     background-color: #f5f5f5;
//     display: flex;
//     flex-direction: column;
//     margin: 1rem auto;
//     width: 80%;

// @media (min-width: 481px) and (max-width: 800px) {
//   width: 80%;
//   }

//.section__productos__cards {
const DivProductos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

// .section__productos__titulo__container {
const TituloContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  width: 100%;
`;

//.section__productos__titulo__titulo {
const Titulo = styled.h3`
  font-size: 2rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

//.section__productos__titulo__enlace {
const Enlace = styled(Link)`
  color: #2a7ae4;
  float: left;
  font-size: 1.3rem;
  text-decoration: none;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

//.section__all__productos__titulos__button {
const Boton = styled.button`
  background-color: #2a7ae4;
  border-radius: 0.5rem;
  color: #fff;
  height: 3rem;
  width: 6rem;

  &:hover {
    background-color: #162f50;
  }
`;

//section__productos__main
const MainProductos = styled.main`
  background-color: #f5f5f5;
  padding-bottom: 3rem;
`;

//.section__productos {
const SectionProductos = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  width: 80%;

  @media (max-width: 480px) {
    margin: 0 auto;
    width: 90%;
  }
`;

//   .section__all__productos__titulos__button__a {
//     color: #fff;
//     font-weight: bold;
//     text-decoration: none;
//   }

export {
  TituloContainer,
  Titulo,
  Enlace,
  Boton,
  DivProductos,
  MainProductos,
  SectionProductos,
};
