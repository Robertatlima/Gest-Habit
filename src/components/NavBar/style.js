import styled from 'styled-components'

export const NavBarConteiner = styled.div`
width: 100%;
background-color: var(--color-gray50);
display: flex;
height: 50px;
justify-content: space-between;
align-items: center;
ul{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content:space-between;
   
  li{
      margin: 50px;
      color: var(--color-blackSmoky);
      flex-basis: 1;
      border: none;
      list-style-type:none;
      display: flex;
     img{
          margin-left: 30px;
          width: 120px;
      }
      div{
        justify-content: space-evenly;
        color: var(--color-blackSmoky);
        text-decoration: none;
        border: none;
        font-size: 14px;
        font-family: var(--font-primary);
        align-content: flex-end;
        font-weight: bold;
      }
  }
  li:nth-child(2){
        color: var(--color-gray50);
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 300px;
        div{
          margin: 20px;
        }
    }
}

`