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
        const irParaDetalhes = () => {
            setIdViagem(trip.id)
            getTripDetail()
            history.push(`/admin/trips/${idViagem}`)
            return (
                <div>
                    <CardViagem key={trip.id}>
                        <p><b>Nome: </b>{trip.name}</p>
                        <p><b>Descrição: </b>{trip.description}</p>
                        <p><b>Planeta: </b>{trip.planet}</p>
                        <p><b>Duração: </b>{trip.durationInDays} dias</p>
                        <p><b>Data: </b>{trip.date}</p>
                    </CardViagem>
                </div>
            )
        }

        const getTripDetail = (idViagem) => {
            const aluno = 'ruana-piber-carver'
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImlHUHVWYkJHMHVSTURab0JUZnFLIiwiZW1haWwiOiJydWFuYS5waWJlckBnbWFpbC5jb20iLCJpYXQiOjE2MzkwMDgwNzF9.wNM75qCArYR44HBAr2iUwge1lwEtqJ8mORLCmjgsyhY"
            const headers = { auth: token }
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/${idViagem}`
            axios.get(url, headers).then((res) => {
                setViagem(res.data.trip)
                console.log('funciona')
            }).catch((err) => {
                console.log(err.data)
            })
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