import styled from "styled-components";
export const Container = styled.div`
  margin: 0 auto;
`;
export const ContainerTop = styled.div`
  background-color: var(--color-primary);
  height: 600px;
  width: 100%;
  main {
    max-width: 1440px;
    padding: 30px;
    height: 100%;
    width: 100%;
  }
  aside,
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
  }
  h1,
  p {
    margin-bottom: 20px;
  }
  img {
    display: none;
    text-align: center;
  }
  @media (min-width: 700px) {
    img {
      display: inherit;
    }
    main {
      flex-direction: row;
      justify-content: flex-start;
      padding-left: 0;
    }
    aside {
      align-items: flex-start;
      text-align: left;
      width: 500px;
      margin-left: 100px;
    }
    .startbutton {
      margin-left: 0;
    }
  }
`;
export const ContainerMiddle = styled.div`
  background-color: var(--color-goals);
  height: 600px;
  main {
    max-width: 1440px;
    padding: 30px;
    height: 100%;
    width: 100%;
  }
  aside,
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  h1,
  p {
    margin-bottom: 20px;
  }
  img {
    display: none;
    text-align: center;
  }
  @media (min-width: 700px) {
    img {
      display: inherit;
    }
    main {
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-end;
      padding-bottom: 0;
    }
    aside {
      align-self: flex-start;
      align-items: flex-start;
      text-align: left;
      width: 500px;
      margin-left: 150px;
      margin-top: 75px;
    }
    .startbutton {
      margin-left: 0;
    }
  }
`;
export const ContainerFooter = styled.div`
  background-color: var(--color-group);
  height: 1050px;
  padding-top: 25px;
  text-align: center;
  main,
  aside {
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    margin: 10px;
  }
  p {
    margin-bottom: 20px;
  }
  img {
    width: 180px;
    border-radius: 50%;
    border: 2px solid var(--color-gray50);
    margin-bottom: 20px;
  }
  @media (min-width: 700px) {
    height: 550px;
    main {
      flex-direction: row;
      justify-content: center;
      div:nth-child(1) {
        /* margin: 0; */
      }
    }
    aside {
      width: 75%;
      flex-direction: row-reverse;
      margin: 0;
    }
    figcaption {
      margin: 75px;
    }
    h1 {
      margin: 0;
    }
    p {
      width: 400px;
      margin: 50px;
    }
    .centerContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
    }
    .centerBottomContainer {
      display: flex;
      flex-direction: row;
      figcaption {
        margin-top: 0;
      }
    }
  }
`;
