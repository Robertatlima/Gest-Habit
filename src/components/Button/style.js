import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 40px;
  cursor: pointer;
  font-size: 18px;
  background-color: ${(props) => (props.schema ? "#8092ED" : "#6AD980")};
  color: var(--color-gray50);
  font-weight: normal;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: ${(props) => (props.schema ? "#6AD980" : "#8092ED")};
    border: 2px solid var(--color-gray50);
    color: var(--color-gray50);
    transition: 0.5s;
  }
`;