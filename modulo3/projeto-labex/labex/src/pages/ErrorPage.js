import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { BotaoNormal, ContainerErro } from "../styles/styles";


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