import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  width: 33vw;
  height: 40vh;
  background: #fff;
  max-width: 499px;
  position: relative;
  top: 32vh;
  left: 14vw;

  h2 {
    color: #8092ed;
    text-align: center;
    color: var(--color-black);
    margin-bottom: 10px;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 30vh;
  }
  form div {
    width: 95%;
    margin: auto;
  }
  input {
    display: block;
    margin-top: 7px;
    box-sizing: border-box;
    padding: 20px 10px;
    border: 2px solid #25cd89;
    border-radius: 10px;
    width: 100%;
    outline: 0;
    font-size: 15px;
    background: var(--color-gray50);
  }

  button {
    background-color: #25cd89;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;

    border: 0;
    border-radius: 12px;
    cursor: pointer;
    margin-top: 30px;
  }
`;
