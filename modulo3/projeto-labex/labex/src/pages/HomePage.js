import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ContainerHome = styled.div`
background-image: url('https://stsci-opo.org/STScI-01EVSTRG78W19FA95VRQWEF919.png');
display: flex;
flex-direction: column;
color: white;
height: 100vh;
justify-content: center;
align-items: center;
font-family: Poppins, sans-serif;
font-weight: 300;
`
const BotoesGrandes = styled.div`
width: 60vw;
display: flex;
justify-content: space-between;
`
const BotaoGrande = styled.button`
border: 2px solid white;
background-color: rgba(0, 0, 0, 0.5);
color: white;
width: 20vw;
height: 20vw;
&:hover{
    border: 2px solid black;
    color: black;
    background-color: rgba(255, 255, 255, 0.2);
}
`
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
            <p>HomePage</p>
            <BotoesGrandes>
                <BotaoGrande onClick={irParaListTrips}>Ver Viagens</BotaoGrande>
                <BotaoGrande onClick={irParaRestrita}>Área Restrita</BotaoGrande>
            </BotoesGrandes>
        </ContainerHome>
    )
}