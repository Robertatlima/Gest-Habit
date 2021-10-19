import styled from "styled-components";


export const Container = styled.div`
background-color: var(--color-primary);
font-family: 'Rubik', sans-serif;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
p{
    font-size: 30px;
    font-weight: lighter;
    margin-left: 60px;
    color: white;
    width: 50%;
    h1{
        font-weight:lighter;
    }
}
div{
    margin-left: 60px;
}
`
export const ContainerMiddle = styled.div`
font-family: 'Rubik', sans-serif;
background-color: var(--color-group);
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`
export const ContainerFooter = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
div:nth-child(1){
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
div:nth-child(2){
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
img{
    width: 80px;
    border-radius: 50%;
    object-fit:contain;
}

`