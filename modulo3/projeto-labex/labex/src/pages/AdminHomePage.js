import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BotaoNormal, BotoesTres, CardNomeViagem, CardViagem, ContainerPainel } from "../styles/styles";

export default function AdminHomePage() {
    const [viagens, setViagens] = useState([])
    const [viagem, setViagem] = useState({})
    const [idViagem, setIdViagem] = useState('')
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
    
    const listaViagens = viagens.map((trip) => {   
        const irParaDetalhes = (idViagem) => {
            setIdViagem(trip.id)
            
            history.push(`/admin/trips/${idViagem}`)
            
        }
        return (
            <CardNomeViagem
                key={idViagem}
                onClick={() => irParaDetalhes(history, idViagem)}
            >
                <p>{trip.name}</p>
                <button>X</button>
            </CardNomeViagem>
        )
    })

    return (
        <ContainerPainel>
            <p>Painel Administrativo</p>
            <BotoesTres>
                <BotaoNormal onClick={voltar}>Voltar</BotaoNormal>
                <BotaoNormal onClick={irParaCriarViagem}>Criar Viagem</BotaoNormal>
                <BotaoNormal>Logout</BotaoNormal>
            </BotoesTres>
            <div>
                {listaViagens}
            </div>
        </ContainerPainel>
    )
}