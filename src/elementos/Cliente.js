import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup";

const Main = styled.main`
  background-color: #f5f5f5;
  padding: 2rem 0;
`;

const Article = styled.article`
  width: 80%;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Section = styled.section`
  padding: 2rem 0;
  margin-bottom: 4rem;
  box-shadow: 1rem 1rem 1rem grey;
`;

const TituloSection = styled.h3`
  padding-left: 2rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const NombreCliente = styled.span`
  font-style: italic;
`;

const DivDatosTitulo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BtnContainer = styled.div`
  margin-right: 2rem;

  @media (max-width: 480px) {
    width: 5rem;
    font-size: 0.8rem;
  }
`;

const SectionImg = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

const ImgContainer = styled.div`
  margin: 0 auto;
  width: 20%;

  @media (max-width: 480px) {
    width: 40%;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    width: 30%;
  }
`;

const ImgPerfil = styled.img`
  width: 100%;
  border-radius: 100%;
`;

const Lista = styled(ListGroup)`
  width: 50%;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    width: 100%;
  }
`;

const ListaItem = styled(ListGroup.Item)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ListaItemContainer = styled.div`
  margin-right: auto;
  margin-left: 1rem;
`;

const ListaItemBold = styled.div`
  font-weight: bold;
`;

export {
  Main,
  Article,
  Section,
  TituloSection,
  NombreCliente,
  DivDatosTitulo,
  BtnContainer,
  SectionImg,
  ImgContainer,
  ImgPerfil,
  Lista,
  ListaItem,
  ListaItemContainer,
  ListaItemBold,
};
