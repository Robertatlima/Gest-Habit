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
   color: var(--color-gray50)
}
h1, h2, h3, p{
    font-family: "Rubik", sans-serif;
    font-style: normal;
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
p{
    font-size: 16px;
    font-weight: lighter;
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

.modalContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    padding: 10px;
    background-color: var(--color-gray50);
    color: var(--color-black);

    .modalHeader{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;        
        margin: 0 0 15px 0; 
        
        div{
            font-family: "Rubik", sans-serif;
            font-size:18px;
            color: var(--color-gray100);
            margin: 0 5px 0 0;
            cursor: pointer;
        }

        h3{
            margin: 0;
        }
    }

    form{
        width: 100%;
        margin: 0;
    }
    h3{
        align-self: flex-start;
        margin: 15px 0;
        font-size: 18px;
    }
    .submitbutton{
        width: 100%;
        margin-left: 0;
        margin-top: 10px
    }
    .selectbutton{
        width: 100%;
        margin:  0;
    }
    .centerbutton{
        margin-left: 10px;
        margin-right: 10px
    }
    .input{
        display: flex;
        flex-direction: row;
        width: 100%;
        text-align: left;
    }
    
    @media (min-width: 540px) {
    width: 540px;
    padding: 20px;
    .selectbutton, .submitbutton{
        height: 60px;
    }
    .submitbutton{
        margin-top: 20px
    }
  }
}

`;
export default GlobalStyle;
