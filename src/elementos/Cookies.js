import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #2a7ae4;
  position: fixed;
  top: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 90%;

  @media (max-width: 480px) {
    height: 100px;
    top: calc(100vh - 100px);
  }
`;

const Texto = styled.p`
  margin: auto 1rem;
  color: #fff;
`;

const Boton = styled.button`
  background-color: #162f50;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 1rem;
`;

export { Container, Texto, Boton };
