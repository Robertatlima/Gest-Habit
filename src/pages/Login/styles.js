import styled from "styled-components";

import svg from "../../assets/img/fundoHome.png";
export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: var(--color-primary);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid;
  width: 500px;
  height: 430px;
  background: #fff;
  max-width: 499px;
  position: relative;
  top: calc(50vh - 250px);
  left: 14vw;

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
  }
  .loginInput {
  }

  .loginInput-field {
    background: var(--color-gray50);
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
`;
