import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  height: 485px;
  border-radius: 20px;
  width: 350px;
  margin: 0 auto;
  margin-top: 15px;

  .profile {
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    height: 150px;
    justify-content: space-evenly;
    margin: 0 auto;

    .editbutton {
      margin: 0;
    }
  }
  .profile-left {
    margin: 0;
    img {
      width: 90px;
      border-radius: 50%;
    }
  }
  .profile-right {
    margin: 0;
    h1 {
      font-size: 28px;
      color: #333333;
      margin-left: 0;
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
    width: 310px;
    display: flex;
    align-items: center;
    height: 145px;
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
    width: 310px;
    margin-left: 20px;
    margin-right: 20px;
    height: 145px;
    border-radius: 10px;
    h1 {
      margin-left: 16px;
    }
  }
  @media (max-width: 600px) {
    height: 370px;
    width: 320px;
    .card-habits,
    .card-groups {
      width: 270px;
    }
    .profile {
      display: none;
    }
  }
`;
