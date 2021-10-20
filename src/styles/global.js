import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #8092ED;
    --color-group: #5472BF;

    --color-secondary: #6AD980;

    --color-secondary: #6AD980
    --color-habits: #D9B24A;
    --color-goals: #54BF9F;
    --color-ativities: #BF5454;
    --color-blacksmoky: #3D3F4B;
    --color-black: #333333;
    --color-gray50: #F5F5F5;
    --color-gray100: #7F7F7F;
    --font-primary: 'Roboto , sans-serif';
}
body{
   background-color: var(--color-gray50); 
   
}
h1, h2, h3, p{
    font-family: "Rubik", sans-serif;
    font-style: normal;
    color: var(--color-gray50);
}
h1{
    font-size: 50px;
}
h2{
    font-size: 32px;
}
h3{
    font-size: 18px;
}

.largeCardContainer{
    width: 100%;
    background-color: var(--color-group);
    border: 1px solid white;
    border-radius: 8px;
    box-shadow: 7px 2px 15px -6px #000000;
    h1{
        font-size: 30px;
    }
}
.mediunCardContainer{
    width: 180px;
    height: 80px;
    background-color: var(--color-group);
    border: 1px solid white;
    border-radius: 8px;
    box-shadow: 7px 2px 15px -6px #000000;
}
.smallCardContainer{
    width: 90px;
    height: 40px;
    background-color: var(--color-group);
    border: 1px solid white;
    border-radius: 8px;
    box-shadow: 7px 2px 15px -6px #000000;
}


p{
    font-size: 16px;
    font-weight: lighter;
}
`;
export default GlobalStyle;
