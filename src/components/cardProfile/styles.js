import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  height: 518px;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 15px;

  .profile {
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    padding: 0 0 0 50px;
    align-items: center;
    height: 150px;
    justify-content: center;
    margin: 0 auto;
  }
  .profile-left {
    img {
      width: 110px;
      border-radius: 50%;
    }
  }
  .profile-right {
    h1 {
      font-size: 28px;
      color: #333333;
      margin-right: 50px;
    }
    span {
      color: #cfcfcf;
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
    width: 300px;
    display: flex;
    align-items: center;
    height: 162px;
    margin-top: 10px;
    color: #ffffff;
    margin-left: 20px;
    margin-right: 20px;
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
    width: 300px;
    margin-left: 20px;
    margin-right: 20px;
    height: 162px;
    border-radius: 10px;
    h1 {
      margin-left: 16px;
    }
  }
  @media (max-width: 600px) {
    height: 400px;
    .profile {
      display: none;
    }
  }
`;
