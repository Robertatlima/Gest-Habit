import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const ContainerPrincipal = styled.div`
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 15px;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  @media (min-width: 700px){
    display: flex;
    width: 100%;
    margin-left: 8px;
    padding: 0;
    background-color: var(--color-gray50);
  }
  margin-left: 0px;
  width:100%;
 
  .link {
    text-decoration: none;
  }
  .button {
    @media (min-width: 1000px){
      width: 200px;
      position: sticky;
      text-align: center;
      
    }
      width: 100%;
      font-size: 14px;
      margin-bottom: 20px;
  }
  div {
    height: 60px;
    font-weight: bold;
  }
`;
export const ListContainer = styled.ul`
 @media (min-width: 700px){
  display: flex;
  flex-wrap: wrap;
  max-width: 774px;
  max-height: 451px;
  overflow-y: auto;
  margin-top: 20px;

  /* align-items: center;
  justify-content:center; */
  margin-left: 20px;

  li {
    list-style-type: none;
    width: 50vw;
    margin-top: 5px;
    border-radius: 10px;
    text-align: center;
    /* height: 30%; */
  }
  width: 100%;
  li{
    width: 100%;
  }
}

`;
