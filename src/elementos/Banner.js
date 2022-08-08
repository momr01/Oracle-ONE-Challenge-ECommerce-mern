import styled from "styled-components";

const Section = styled.div`
  background-image: url("/assets/banner-image.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  height: 22rem;
  justify-content: end;
  width: 100%;
`;

const Article = styled.div`
  margin: 0 auto;
  width: 80%;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 3.25rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitulo = styled.h3`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const Boton = styled.button`
  background-color: #2a7ae4;
  border-radius: 0.625rem;
  color: #fff;
  height: 3rem;
  margin-bottom: 2rem;
  width: 10rem;
  cursor: pointer;

  &:hover {
    background-color: #162f50;
  }
`;

export { Section, Article, Titulo, Subtitulo, Boton };
