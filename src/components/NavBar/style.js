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
    margin: 0 auto;
  }
  .logo {
    display: flex;
    align-items: center;
    .img-logo {
      width: 120px;
    }
  }

  .navBar {
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

  .link-navBar {
    text-decoration: none;
  }
  .link-navBar-logout {
    text-decoration: none;
    color: #7f7f7f;
    display: flex;
    font-size: 18px;
    p {
      margin-left: 5px;
    }
  }
`;
