import ReactWhatsapp from "react-whatsapp";
import styled from "styled-components";

const Section = styled.section`
  background-color: #eaf2fd;
  padding: 4rem 0;
  width: 100%;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;

  @media (max-width: 480px) {
    display: block;
    width: 90%;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const LogoContainer = styled.div`
  width: 20%;

  @media (max-width: 480px) {
    margin-bottom: 2rem;
    text-align: center;
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    width: 50%;
  }
`;

const NavContainer = styled.div`
  width: 20%;

  @media (max-width: 480px) {
    margin-bottom: 2rem;
    text-align: center;
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    width: 50%;
  }
`;

const UlNav = styled.ul`
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const LiNav = styled.li`
  font-size: 1.3rem;
  margin-bottom: 1.3rem;
  cursor: pointer;

  &:hover {
    color: #2a7ae4;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const FormContainer = styled.div`
  width: 45%;
  @media (max-width: 480px) {
    width: 100%;
  }
  @media (min-width: 481px) and (max-width: 800px) {
    width: 100%;
  }
`;

//.section__contacto__form {
const Form = styled.form`
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const FormTituloContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const FormTitulo = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: auto 0;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const FormInput = styled.input`
  border-radius: 0.625rem;
  height: 3.5rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
  width: 100%;

  @media (max-width: 480px) {
    padding: 0;
    outline: none;
  }
`;

const FormTextArea = styled.textarea`
  border-radius: 0.625rem;
  height: 5.125rem;
  margin-bottom: 1rem;
  padding: 1rem 1rem;
  resize: none;
  width: 100%;

  @media (max-width: 480px) {
    padding: 0;
    outline: none;
    padding-top: 1rem;
  }
`;

const FormBoton = styled.button`
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

const WhatsappContainer = styled(ReactWhatsapp)`
  border: none;
`;

const WhatsappLogo = styled.img`
  width: 3.5rem;
`;

export {
  Section,
  Container,
  LogoContainer,
  NavContainer,
  UlNav,
  LiNav,
  FormContainer,
  Form,
  FormInput,
  FormTituloContainer,
  FormTitulo,
  FormTextArea,
  FormBoton,
  WhatsappContainer,
  WhatsappLogo,
};
