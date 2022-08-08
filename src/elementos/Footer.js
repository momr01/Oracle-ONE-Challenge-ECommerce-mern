import styled from "styled-components";

//.section__footer {
const Section = styled.footer`
  background-color: #f5f5f5;
  padding: 3rem 0;

  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`;
//.section__footer__container {
const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 0 auto;
  width: 80%;
`;

//.section__footer__texto {
const Principal = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  width: 100%;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

//.section__footer__year {
const Year = styled.p`
  text-align: center;
  width: 100%;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export { Section, DivContainer, Principal, Year };
