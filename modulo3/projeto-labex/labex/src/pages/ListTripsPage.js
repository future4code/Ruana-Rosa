import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";

const ContainerLista = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-image: url("https://stsci-opo.org/STScI-01EVVEJ9BCMEXN4Y1S93CR93DD.jpg");
color: white;
font-weight: 300;
`
const CardViagem = styled.div`
border: 2px solid white;
padding: 20px;
width: 50vw;
margin-top: 20px;
background-color: rgba(0, 0, 0, 0.5);
`
const BotoesNormais = styled.div`
width: 30vw;
display: flex;
justify-content: space-between;
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
export default function ListTripsPage() {
    const [viagens, setViagens] = useState([])
    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    const irParaApplication = () => {
        history.push('/trips/application')
    }

    const getTrips = () => {
        const aluno = 'ruana-piber-carver'
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`
        axios.get(url).then((res) => {
            setViagens(res.data.trips)
            console.log('funciona')
        }).catch((err) => {
            console.log(err.data)
        })
    }
    useEffect(() => {
        getTrips()
    }, [])

    const listaTrips = viagens.map((trip) => {
        return (
            <CardViagem key={trip.id}>
                <p><b>Nome: </b>{trip.name}</p>
                <p><b>Descrição: </b>{trip.description}</p>
                <p><b>Planeta: </b>{trip.planet}</p>
                <p><b>Duração: </b>{trip.durationInDays} dias</p>
                <p><b>Data: </b>{trip.date}</p>
            </CardViagem>
        )
    })
    return (
        <ContainerLista>
            <p>Lista de Viagens</p>
            <BotoesNormais>
                <BotaoNormal onClick={voltar}>Voltar</BotaoNormal>
                <BotaoNormal onClick={irParaApplication}>Inscrever-se</BotaoNormal>
            </BotoesNormais>
            {listaTrips}
        </ContainerLista>
    )
}