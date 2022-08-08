import styled, { css } from "styled-components";
import { Menu } from "antd";

//.section__titulo
const Section = styled.section`
  background-color: #fff;
  padding: 1.5rem 0;
  width: 100%;

  @media (min-width: 481px) and (max-width: 800px) {
  }
`;

// const MenuItemLogin = styled(Menu.Item)`
//   width: 100%;
//   text-align: center;
//   background-color: #2a7ae4;
//   border-radius: 0.625rem;
//   > * {
//     color: #fff;
//   }

//   &:hover {
//     background-color: #162f50;
//   }
// `;

const MenuLogin = styled(Menu)`
  font-size: 1.3rem;
  width: 10rem;
  text-align: center;
  > * {
    width: 100%;
  }
`;

// const MenuSubmenu = styled(Menu.SubMenu)`
//   width: 100%;
//   text-align: center;
// `;

// const MenuItem = styled(Menu.Item)`
//   color: #162f50;
//   &:hover {
//     background-color: #162f50;
//   }
// `;

//.section__titulo__container
const Article = styled.article`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;

  @media (max-width: 480px) {
    flex-wrap: wrap;
    width: 90%;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
  }
`;
// .section__titulo__img__container
const ImageContainer = styled.div`
  @media (max-width: 480px) {
    order: 1;
    width: 45%;

    img {
      width: 100%;
    }
  }

  @media (min-width: 481px) and (max-width: 800px) {
    order: 1;
    padding: 0 auto;
    width: 20%;
  }
`;

// .section__titulo__form__container {
const FormContainer = styled.div`
  @media (max-width: 480px) {
    order: 3;
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    padding: 1rem 0;
    text-align: center;
    order: 2;
    width: 40%;
  }
`;

//  .section__titulo__form__input__container {
const InputContainer = styled.div`
  align-items: center;
  background-color: #f5f5f5;
  border: 1px solid black;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
  width: 15rem;

  @media (min-width: 481px) and (max-width: 800px) {
    width: 90%;
  }
`;

// .section__titulo__form__input__ingreso {
const Input = styled.input`
  background-color: #f5f5f5;
  border: none;
  outline: none;
  width: 100%;

  @media (max-width: 480px) {
    margin: 0.5rem auto;
    width: 60%;
  }

  @media (min-width: 481px) and (max-width: 800px) {
  }
`;

//   .section__titulo__form__input__img {
//     height: 1rem;
//     width: 1rem;
//   }

//   .section__titulo__form__input__img:hover {
//     cursor: pointer;
//   }

//   .section__titulo__form__search__container {
//     display: none;
//   }

// .section__titulo__btn__container {
const BotonContainer = styled.div`
  @media (max-width: 480px) {
    order: 2;
    width: 40%;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    order: 3;
    width: 20%;
  }
`;

//.section__titulo__btn {
const Boton = styled.button`
  background-color: #2a7ae4;
  border-radius: 0.625rem;
  color: #fff;
  height: 3rem;
  width: 10rem;

  &:hover {
    background-color: #162f50;
    cursor: pointer;
  }
  @media (max-width: 480px) {
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    width: 100%;

    button {
      height: 2rem;
      margin: 0;
    }
  }
`;

//.resultados__busqueda__container{
const BusquedaContainer = styled.div`
  @media (max-width: 480px) {
    left: 0;
    top: 8rem;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    left: 8rem;
  }
`;

//section__titulo__form__form
const Form = styled.form`
  @media (min-width: 481px) and (max-width: 800px) {
    display: flex;
    flex-direction: column;

    button {
      margin: 0 auto;
      width: 100%;
    }
  }
`;

//   .section__titulo__btn:hover {

//   }

//   .section__titulo__btn:hover {

//   }
/*
      .section__titulo__form__logo__container{
        height: 1rem;
        width: 1rem;
      }
      
      .section__titulo__form__logo__container img{
        width: 100%;
      }*/

/* media queries */

/* Celular */
//@media (max-width: 480px) {
/* header */
//  .section__titulo__container {
//   flex-wrap: wrap;
//   width: 90%;
//  }

// .section__titulo__img__container {
//   order: 1;
//   width: 45%;
//  }

//   .section__titulo__img__container img {
//   width: 100%;
// }

// .section__titulo__form__container {
//   order: 3;
//   width: 100%;
// }

//   .section__titulo__form__input__container{
//   margin: 0.5rem auto;
//   width: 60%;
//  }

//   .resultados__busqueda__container{
//   left: 0;
//   top: 8rem;
//   }

// .section__titulo__btn__container {
//   order: 2;
//   width: 40%;
// }

//  .section__titulo__btn {
//   width: 100%;
//  }

/*NO BORRAR
  
    .section__titulo__form__search__container {
      display: block;
      height: 1rem;
      width: 1rem;
    }
  
    .section__titulo__form__search__container img {
      width: 100%;
    }
  }
  /*
  
  
  @media (min-width: 481px) and (max-width: 800px) {
    //   .section__titulo__container {
    //       flex-wrap: wrap;
    //       justify-content: space-between;
    //       width: 80%;
    //     }
      
   //     .section__titulo__img__container {
        //   order: 1;
        //   padding: 0 auto;
        //   width: 20%;
     //   }
      
        .section__titulo__img__container img {
          width: 100%;
        }
      
    //    .section__titulo__form__container {
          /*border: 1px solid green;*/
//   padding: 1rem 0;
//   text-align: center;
//   order: 2;
//   width: 40%;
//   }

// .resultados__busqueda__container{
//   left: 8rem;
// }

// .section__titulo__form__form {
//   display: flex;
//   flex-direction: column;
// }

// .section__titulo__form__form button {
//   margin: 0 auto;
//   width: 100%;
// }

//  .section__titulo__btn__container{
//   order: 3;
//   width: 20%;
//   }

// .section__titulo__form__input__container{
//   width: 90%;
// }
// .section__titulo__btn {
//   width: 100%;
// }

// .section__titulo__btn button {
//   height: 2rem;
//   margin: 0;
// }

//  }

export { Section, Article, MenuLogin };
