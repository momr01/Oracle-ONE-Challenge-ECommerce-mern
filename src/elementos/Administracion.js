import styled from "styled-components";

//.main__all__productos {
const Main = styled.div`
  background-color: #f5f5f5;
`;

//.section__all__productos__container {
const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

//.section__all__productos__titulos {
const TituloContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

//.section__all__productos__titulos h3 {
const TituloAdm = styled.h3`
  font-size: 1.5rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

// .section__all__productos__titulos button {
const Boton = styled.button`
  background-color: #2a7ae4;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  height: 3rem;

  &:hover {
    background-color: #162f50;
  }
`;

// .section__all__productos__titulos button a {
//   color: #fff;
//   font-weight: bold;
//   text-decoration: none;
// }

//  .section__all__productos__cards {
const ProductoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin: 1rem 0;
`;

//  .section__all__productos__cards__card__container {
const CardContainer = styled.div`
  box-shadow: 0.5rem 0.5rem 0.5rem #676666;
  margin: 1rem;
  padding-bottom: 1rem;
  width: 20%;

  @media (max-width: 480px) {
    box-shadow: 1rem 1rem 1rem #676666;
    width: 40%;
    word-wrap: break-word;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    box-shadow: 1rem 1rem 1rem #676666;
    width: 28%;
    word-wrap: break-word;
  }
`;

//.section__all__productos__cards__card {
const ImgContainer = styled.div`
  position: relative;
  width: 100%;
`;

//.section__all__products__cards__card__delete,
//.section__all__products__cards__card__edit {
const IconDelete = styled.img`
  color: #fff;
  cursor: pointer;
  right: 0;
  position: absolute;
  width: 2rem;

  &:hover {
    background-color: #162f50;
  }
`;

const IconEdit = styled.img`
  color: #fff;
  position: absolute;
  width: 2rem;
  right: 2rem;

  &:hover {
    background-color: #162f50;
  }
`;

// .section__all__products__cards__card__img {
const Img = styled.img`
  width: 100%;
`;

const LineaSeparadora = styled.div`
  border-bottom: 0.1rem solid #000;
  margin: 5rem 0;
`;

export {
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
};
