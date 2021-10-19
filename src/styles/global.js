import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #8092ED;
    --color-group: #54BF9F;
    --color-ativities: #BF5454;
    --color-blacksmoky: #3D3F4B;
    --color-black: #333333;
    --color-gray50: #F5F5F5;
    --color-gray100: #7F7F7F;
    --font-primary: 'Roboto , sans-serif';

}
body{
   background-color: #F5F5F5;

   
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


`;
export default GlobalStyle;
