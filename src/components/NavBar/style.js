import styled from "styled-components";

export const NavBarConteiner = styled.div`
  background-color: #ffffff;

  width: 100%;

  .header-conteudo {
    max-width: 1200px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    display: flex;
    align-items: center;
    .img-logo {
      width: 120px;
    }
  }
  .header-mobile {
    display: none;
  }
  .navBar {
    margin: 0;
    color: #fff;
    text-decoration: none;
    display: flex;

    text-transform: uppercase;
    line-height: 18px;
    text-decoration: none;

    h3 {
      color: var(--color-gray100);
      margin: 5px;
      text-decoration: none;
      font-family: roboto, sans-serif;
    }
    .link-navBar--login {
      color: var(--color-black);
    }
  }
  .logo-name {
    margin: 0;
  }
  .link-navBar {
    text-decoration: none;
  }
  .link-navBar-logout {
    margin: 0;
    text-decoration: none;
    display: flex;
    color: var(--color-gray100);
    font-weight: bold;
    font-size: 18px;
    p {
      margin-left: 5px;
      color: var(--color-gray100);
    }
  }
  @media (max-width: 650px) {
    .header-mobile {
      display: flex;
      h3 {
        color: var(--color-gray100);
        font-weight: bold;
      }
    }
    .logo {
      .img-logo {
        display: none;
      }
    }
  }
`;
