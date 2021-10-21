import styled from "styled-components";
export const ContainerPrincipal = styled.div`
  display: flex;
  margin: 0 auto;

  align-items: center;
  justify-content: center;
  width: 1200px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const Container = styled.div`
  .groupdetailscontainer {
    display: flex;
    height: 670px;
    @media (max-width: 1100px) {
      flex-direction: column;
      .metaScroll {
        margin-top: 20px;
      }
    }
    @media (max-width: 850px) {
      .actScroll {
        margin-top: 20px;
      }
      .metaScroll {
        margin-bottom: 10px;
      }
    }
    .actScroll,
    .metaScroll {
      overflow-y: auto;
    }

    .actScroll {
      width: 408px;
    }
    div {
      text-align: center;
      width: 390px;
    }
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .minicard {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      width: 320px;
      margin-left: 30px;
      height: 112px;
      border-radius: 8px;
      background-color: #ffff;
      border: 1px solid transparent;
      cursor: pointer;
      margin-top: 5px;
      :hover {
        border: 1px solid var(--color-blacksmoky);
        transition: 0.5s;
      }
      p {
        width: 100%;
        color: var(--color-blacksmoky);
        text-align: left;
        line-height: 30px;
        margin-left: 10px;
      }
    }
  }
`;
export const Content = styled.div`
  .details {
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    background-color: var(--color-gray50);
    height: 30%;
    border: 1px solid #ffff;
    h1 {
      margin-left: 15px;
      margin-top: 6px;
      width: 100%;
      text-align: left;
      font-size: 20px;
      color: black;
      font-family: var(--font-primary);
    }
    .button {
      width: 40%;
      height: 40px;
      font-size: 12px;
    }
  }
  /* display: flex;
max-width: 100%;
flex-direction: column;
align-items: center;
justify-content: flex-start;
ul{
  display: flex;
  flex-direction: column;
  li{
    width: 100%;
  }
}
.details{
  display: block;
  float: left;
  width: 100%;
  h1{
    color: var(--color-blacksmoky);
    text-align: left;
    display: block;
    float: left;
    width: 100%;
    margin-bottom: 20px;
}
}
div{
  width: 300px;
  height: 60px;
  margin-bottom: 30px;
}
.groupdetailscontainer {
  display: flex;
  width: 1000px;
  flex-direction: row;
  justify-content: space-evenly;
} */
`;
