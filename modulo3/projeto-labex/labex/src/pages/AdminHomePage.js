import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BotaoNormal, BotoesTres, CardNomeViagem, CardViagem, ContainerPainel, Paragrafo } from "../styles/styles";

export default function AdminHomePage() {
    const [viagens, setViagens] = useState([])
    const [viagem, setViagem] = useState({})
    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    const irParaCriarViagem = () => {
        history.push('/admin/trips/create')
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
    const irParaDetalhes = (id) => {
        
        history.push(`/admin/trips/${id}`)
        
    }
    const listaViagens = viagens && viagens.map((trip) => {   
        
        return (
            <CardNomeViagem
                key={trip.id}
                onClick={() => irParaDetalhes(history, trip.id)}
            >
                <p>{trip.name}</p>
                <button>X</button>
            </CardNomeViagem>
        )
    })

    return (
        <ContainerPainel>
            <Paragrafo>PAINEL ADMINISTRATIVO</Paragrafo>
            <BotoesTres>
                <BotaoNormal onClick={voltar}>VOLTAR</BotaoNormal>
                <BotaoNormal onClick={irParaCriarViagem}>CRIAR VIAGEM</BotaoNormal>
                <BotaoNormal>LOGOUT</BotaoNormal>
            </BotoesTres>
            <div>
                {listaViagens}
            </div>
        </ContainerPainel>
    )
}