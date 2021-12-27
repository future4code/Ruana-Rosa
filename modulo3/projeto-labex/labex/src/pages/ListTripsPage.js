import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { BotaoNormal, BotoesNormais, CardViagem, ContainerLista, Paragrafo } from "../styles/styles";
import { url_base } from "../constants/url_base";

export default function ListTripsPage() {
    const [viagens, setViagens] = useState([])
    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    const irParaCandidatura = () => {
        history.push('/trips/application')
    }

    const pegarViagens = () => {
        axios.get(`${url_base}/trips`).then((res) => {
            setViagens(res.data.trips)
        }).catch((err) => {
            console.log(err.data)
        })
    }
    useEffect(() => {
        pegarViagens()
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
            <div>
                <BotoesNormais>
                    <BotaoNormal onClick={voltar}>VOLTAR</BotaoNormal>
                    <BotaoNormal onClick={irParaCandidatura}>CANDIDATAR-SE</BotaoNormal>
                </BotoesNormais>
                <Paragrafo>NOSSAS VIAGENS</Paragrafo>
            </div>
            <div>
                {listaTrips}
            </div>
        </ContainerLista>
    )
}