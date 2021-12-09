import React from "react";
import { useHistory } from "react-router-dom";
import { BotaoGrande, BotoesGrandes, ContainerHome } from "../styles/styles";

export default function HomePage() {
    const history = useHistory()
    const irParaListTrips = () => {
        history.push('/trips/list')
    }
    const irParaRestrita = () => {
        history.push('/login')
    }
    return (
        <ContainerHome>
            <BotoesGrandes>
                <BotaoGrande onClick={irParaListTrips}>VER VIAGENS</BotaoGrande>
                <BotaoGrande onClick={irParaRestrita}>ÁREA RESTRITA</BotaoGrande>
            </BotoesGrandes>
        </ContainerHome>
    )
}