import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  background: linear-gradient(-30deg, var(--color-group), var(--color-primary));
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  .title {
    display: none;
  }
  .title-register {
    text-align: initial;
    max-width: 500px;
    position: relative;
    bottom: 25%;
    margin-left: 50px;
  }

  .title-register h1 {
    max-width: 450px;
  }
  .title-register h1 span {
    color: var(--color-black);
  }
  @media (max-width: 700px) {
    .title {
      display: initial;
    }
    .title h1 span {
      color: var(--color-black);
    }
    .title-register {
      display: none;
    }
    flex-direction: column;
    justify-content: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 95%;
  height: 600px;
  max-width: 499px;
  min-width: 300px;
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
