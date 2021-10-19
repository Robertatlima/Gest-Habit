import styled from "styled-components";

export const NavBarConteiner = styled.div`
  background-color: var(--color-gray50);
  border-bottom: 1px solid #fff;
  position: fixed;
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
