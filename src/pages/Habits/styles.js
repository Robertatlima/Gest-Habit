import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 15px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
  width: 100%;
  margin-left: 30px;
  background-color: var(--color-gray50);
  .link {
    text-decoration: none;
  }
  .button {
    width: 250px;
  }
  div {
    margin-right: 10px;
    height: 60px;
    font-weight: bold;
  }
  #search {
    width: 446px;
    height: 60px;
  }
`;
export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 850px;
  flex-direction: row;
  flex: 1;
  /* align-items: center;
  justify-content:center; */
  margin-left: 20px;

  li {
    list-style-type: none;
    width: 100%;
  }
`;
