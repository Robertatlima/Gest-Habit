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
      background-color: transparent;
      border: none;
      color: var(--color-blacksmoky);
      font-size: 14px;
      text-align:center;
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
    width: 50%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center; 
    h1 {
      text-align: center;
      width: 100%;
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
    background: linear-gradient(-30deg, #d9b24a, #d96b69);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
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
    background: linear-gradient(-30deg, var(--color-goals), var(--color-group));
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
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
