import styled from "styled-components";

// .section__product__data__container {
//     align-items: center;
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 3rem;
//   }

// .section__product__data__img {
const ImgContainer = styled.div`
  box-shadow: 1rem 1rem 1rem #676666;
  width: 50%;

  @media (max-width: 480px) {
    margin-bottom: 3rem;
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    width: 40%;
  }
`;

// .section__product__data__img__img {
const Img = styled.img`
  width: 100%;
`;

//.section__product__data__texto {
const InfoContainer = styled.div`
  width: 45%;
  @media (max-width: 480px) {
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    width: 55%;
  }
`;

//.section__product__data__texto__h3 {
const Nombre = styled.h3`
  font-size: 3rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

//.section__product__data__texto__h5 {
const Precio = styled.h5`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

// .section__product__data__texto__p {
const Descripcion = styled.p`
  font-size: 1.3rem;
  line-height: 2rem;

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

//.section__product__similares__titulo {
const SimilaresTitulo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    font-size: 1.3rem;
  }
`;

export {
  ImgContainer,
  Img,
  InfoContainer,
  Nombre,
  Precio,
  Descripcion,
  SimilaresTitulo,
};
