import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: var(--color-primary);
  display: flex;
  align-items: center;

  .title-register {
    text-align: initial;
    max-width: 500px;
  }
  .title-register h1 {
    max-width: 450px;
  }
  .title-register h1 span {
    color: var(--color-black);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 500px;
  height: 600px;
  background: #fff;
  max-width: 499px;

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
  }
  .registerInput {
    width: 95%;
    height: 60px;
    text-decoration: none;
    border-radius: 8px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .registerInput div {
    border-radius: 8px;
    height: 60px;
  }

  h2 {
    color: var(--color-black);
    text-align: center;
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
  .btnBox-login button {
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
