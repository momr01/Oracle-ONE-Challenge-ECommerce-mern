import styled from "styled-components";

//.main__each__product {
const Main = styled.main`
  background-color: #f5f5f5;
  width: 100%;
`;

//.section__each__product__container {
const DivContainer = styled.div`
  margin: 0 auto;
  padding: 3rem 0;
  width: 80%;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

//.section__product__data__container {
const Section = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

//.section__productos__cards {
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;

  @media (max-width: 480px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

export { Main, DivContainer, Section, CardsContainer };
