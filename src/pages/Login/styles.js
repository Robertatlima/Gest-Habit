import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: #8092ed;
    text-align: center;
  }
  .input {
    display: block;
    margin-top: 7px;
    box-sizing: border-box;
    padding: 20px 10px;
    border: 2px solid #25cd89;
    border-radius: 10px;
    width: 400px;
    outline: 0;
    font-size: 15px;
    background-color: white;
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
