import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #8092ED;
    --color-group: #54BF9F;
    --color-ativities: #BF5454;
    --color-blacksmoky: #3D3F4B;
    --color-black: #333333
    --font-primary: 'Roboto , sans-serif';

}
h1{
    font-family: 'Roboto , sans-serif';
    font-size: 64px;
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