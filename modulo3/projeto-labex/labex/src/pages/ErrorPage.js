import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ContainerErro = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content: flex-start;
color: white;
height: 100vh;
padding: 100px;
font-size: 64px;
background-image: url('https://hubblesite.org/files/live/sites/hubble/files/home/_images/final-hubblesite-video-fall-back-img.jpg');
`
const BotaoNormal = styled.button`
border: 2px solid white;
background-color: rgba(0, 0, 0, 0.5);
color: white;
width: 10vw;
height: 5vw;
&:hover{
    border: 2px solid black;
    color: black;
    background-color: rgba(255, 255, 255, 0.2);
}
`
export default function ErrorPage() {
    const history = useHistory()
    const voltar = ()=>{
        history.goBack()
    }
    return(
        <ContainerErro>
            <p>404</p>
            <BotaoNormal onClick={voltar}>Voltar</BotaoNormal>
        </ContainerErro>
    )
}
//  https://hubblesite.org/files/live/sites/hubble/files/home/_images/final-hubblesite-video-fall-back-img.jpg