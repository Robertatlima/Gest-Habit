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
@media (max-width: 700px){
    img{
        display: none;
        text-align: center;
    }
}
`
export const ContainerMiddle = styled.div`
font-family: 'Rubik', sans-serif;
background-color: var(--color-group);
height: 60vh;
display: flex;
align-items: center;
justify-content: center;
p{
    width: 70%;
    text-align: right;
    color: white;
}
@media (max-width: 700px){
    img{
        display: none;
        text-align: center;
    }
}
`

export const ContainerFooter = styled.div`
width: 100%;
flex-wrap: wrap;
color: var(--color-gray50);
height: 60vh;
text-align: center;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
div:nth-child(1){
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
   
}
@media (min-width: 380px) and (max-width: 700px){
    div:nth-child(2){
        flex-direction: column;
    }
}
div:nth-child(2){
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
@media (min-width: 380px) and (max-width: 700px){
    div{
        flex-direction: column;
    }
}
div{
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    p{
        width: 80%;
    }
}
img{
    width: 180px;
    border-radius: 50%;
    object-fit:contain;
    border: 2px solid var(--color-gray50)
}

`