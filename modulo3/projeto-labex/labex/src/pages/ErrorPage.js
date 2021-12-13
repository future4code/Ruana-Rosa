import React from "react";
import { useHistory } from "react-router-dom";
import { BotaoNormal, ContainerErro } from "../styles/styles";


export default function ErrorPage() {
    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    return (
        <ContainerErro>
            <p>404</p>
            <BotaoNormal onClick={voltar}>VOLTAR</BotaoNormal>
        </ContainerErro>
    )
}
