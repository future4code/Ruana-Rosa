import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";
import { BotaoNormal, BotoesNormais, CardViagem, ContainerLista } from "../styles/styles";


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
            <BotoesNormais>
                <BotaoNormal onClick={voltar}>VOLTAR</BotaoNormal>
                <BotaoNormal onClick={irParaApplication}>CANDIDATAR-SE</BotaoNormal>
            </BotoesNormais>
            <div>
                <p>Lista de Viagens</p>
                {listaTrips}
            </div>
        </ContainerLista>
    )
}