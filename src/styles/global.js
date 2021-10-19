import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #8092ED;
    --color-group: #5472BF;
    --color-goals: #54BF9F;
    --color-ativities: #BF5454;
    --color-blacksmoky: #3D3F4B;
    --color-black: #333333;
    --color-gray50: #F5F5F5;
    --color-gray100: #7F7F7F;
    --font-primary: 'Roboto , sans-serif';

}
body{
    background-color: var(--color-primary);
   
}
h1{
    font-family: 'Rubik', sans-serif;
    font-size: 50px;
}
h2{
    font-family: 'Roboto , sans-serif';
    font-size: 32px;
}
h3{
    font-family: 'Roboto , sans-serif';
    font-size: 18px;
}
.cardContainer{
    width: 380px;
    height: 152px;
    background-color: var(--color-group);
    border: 1px solid white;
    border-radius: 8px;
    box-shadow: 7px 2px 15px -6px #000000;
}
.miniCardContainer{
    width: 180px;
    height: 152px;
    background-color: var(--color-group);
    border: 1px solid white;
    border-radius: 8px;
    box-shadow: 7px 2px 15px -6px #000000;
}

`;
export default GlobalStyle;
