import styled from "styled-components";

import svg from "../../assets/img/fundoHome.png";
export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: linear-gradient(-30deg, var(--color-goals), var(--color-group));
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  display: flex;
  align-items: center;
  .mobile {
    display: none;
  }

  /* background-image: url({${svg}}) no-repeat; */
  @media (max-width: 700px) {
    div h1 span {
      color: var(--color-black);
    }
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 11px;
  width: 500px;
  height: 430px;
  max-width: 499px;
  /* position: relative;
  top: calc(50vh - 250px); */
  /* left: 14vw; */

  h1 {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
  }
  h2 {
    color: var(--color-black);
    font-family: Roboto, sans-serif;
    font-weight: 900;
    font-size: 28px;
    text-align: center;
    margin: 10px 10px;
  }
  .formulario {
    background: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 11px;
  }
  .loginInput {
    background: inherit;
    width: 95%;
    height: 60px;
    text-decoration: none;
    border-radius: 8px;
  }
  .loginInput div {
    border-radius: 8px;
    margin: 0;
    height: 60px;
  }
  .btnBox {
    width: 95%;

    button {
      background: #6ad980;
      color: #fff;
      width: 100%;
      font-size: 16px;
      font-weight: 700;
      padding: 20px 40px;
      font-family: Roboto, sans-serif;
      border: 0;
      border-radius: 12px;
      cursor: pointer;
    }
    button:hover {
      background-color: #8092ed;
      border: 2px solid var(--color-gray50);
      color: var(--color-gray50);
      transition: 0.5s;
    }
  }
  .btnBox-cadastrar button {
    background: var(--color-gray50);
    color: var(--color-gray100);

    :hover {
      background: #6ad980;
      border: 2px solid var(--color-gray50);
      color: var(--color-gray50);
      transition: 0.5s;
    }
  }

  @media (max-width: 700px) {
    .formulario {
      background: inherit;
    }
    .formulario-title {
      display: none;
    }
    .header {
      display: none;
    }
  }
`;
