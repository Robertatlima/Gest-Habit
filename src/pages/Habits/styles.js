import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  @media (max-width: 850px) {
    flex-direction: column;
    width: 320px;
  }
`;
export const ContainerPrincipal = styled.div`
  width: 750px;
  .button {
    margin-top: 20px;
    width: 190px;
    height: 59px;
    @media (max-width: 850px) {
      font-size: 15px;
      width: 150px;
    }
  }
`;

export const ButtonsContainer = styled.div``;
export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 451px;
  overflow-y: auto;
  margin-top: 20px;
  max-width: 95%;
  li {
    align-items: center;
    padding: 20px;
    justify-content: center;
    list-style-type: none;
    width: 100%;
    height: 112px;
    cursor: pointer;
    background-color: #5472bf;
    color: white;
    margin-top: 5px;
    border-radius: 10px;
    text-align: center;
  }
  @media (max-width: 1050px) {
    max-width: 60%;
    margin-left: 20px;
  }
  @media (max-width: 850px) {
    width: 320px;
  }
`;
