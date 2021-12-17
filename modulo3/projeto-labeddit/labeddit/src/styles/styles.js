import styled from "styled-components";

export const ContainerPrincipal = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
background-color: #d4dded;
gap: 25px;
`

export const CardPost = styled.div`
display: flex;
flex-direction: column;
padding: 25px;
width: 50vw;
margin: 0 auto;
background-color: rgba(255, 255, 255, 0.5);
box-shadow: 2px 2px 1px grey;
div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
`

export const Conteudo = styled.p`
max-width: 100%;
min-height: 100px;
margin-top: 25px;
`

export const ListaPosts = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 25px;
`

export const CardPostar = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #e8eefa;
align-items: center;
padding: 25px;
width: 50vw;
margin: 25px auto;
form{
    display: flex;
    gap: 25px;
    flex-direction: column;
    justify-content: center;
    width: 50vw;
    input{
        height: 30px;
        background-color: rgba(255, 255, 255, 0.5);
        ::-webkit-input-placeholder{
        color: black;
        }
    }
    textarea{
        height: 100px;
        background-color: rgba(255, 255, 255, 0.5);
        ::-webkit-input-placeholder{
        color: black;
        }
    }
    button{
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        &:hover{    
            color: black;
            background-color: rgba(255, 255, 255, 0.2);
            }
        }
    }
`
export const ContainerLogin = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 10px;
width: 1000px;
margin: 50px auto;
height: 300px;
`
export const LadoLogin = styled.div`
display: flex;
flex-direction: column;
background-color: #fff;
justify-content: center;
align-items: center;
gap: 10px;
width: 60%;
span{
    color: #ED2590;
}
`
export const CardFormLogin = styled.div`
display: flex;
flex-direction: column;
height: 300px;
gap: 10px;
justify-content: space-between;
`

export const CardLogin = styled.div`
    display: flex;
    flex-direction: column;
    background-color:#e8eefa;
    justify-content: space-evenly;
    align-items: center;
    padding: 25px 0;  
    form{
    margin: 15px auto;
    display: flex;
    gap: 2px;
    flex-direction: column;
    justify-content: center;
    input{
        background-color: white;
    }
    div{
        display: flex;
        flex-direction: row;
        gap: 5px;
        justify-content: space-between;
        margin: 0 20px;
    }
    button{
        width: 125px;
        margin: 15px auto 0 auto;
        color: blue;
        background-color: white;
    }
}
`

export const IrCadastro = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    background-color:#e8eefa;
    padding: 25px 0;
    align-items: center;
    button{
        width: 125px;
        margin: auto;
        color: blue;
        background-color: white;
    }
`