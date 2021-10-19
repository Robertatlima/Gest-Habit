import styled from "styled-components";

export const Container = styled.div`
  max-width: 390px;
  background-color: #ffffff;
  height: 518px;
  border-radius: 20px;
  .profile {
    height: 139px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 0 0 0 50px;
    margin-top: 45px;
  }
  .profile-left {
    img {
      width: 110px;
      border-radius: 50%;
      margin-right: 8px;
    }
  }
  .profile-right {
    h1 {
      font-size: 28px;
    }
    span {
      color: #bfbfbf;
    }
  }

  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .links {
    text-decoration: none;
  }
  .card-habits {
    background-color: #d9b24a;
    width: 330px;
    display: flex;
    align-items: center;
    height: 162px;
    margin-top: 10px;
    color: #ffffff;
    border-radius: 10px;
    h1 {
      margin-left: 16px;
    }
  }
  .card-groups {
    margin-top: 10px;
    color: #ffffff;
    background-color: #8092ed;
    display: flex;
    align-items: center;
    width: 330px;
    height: 162px;
    border-radius: 10px;
    h1 {
      margin-left: 16px;
    }
  }
`;
