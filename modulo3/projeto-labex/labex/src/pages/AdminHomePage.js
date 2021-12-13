import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { url_base } from "../constants/url_base";
import { useAcessoRestrito } from "../hooks/useAcessoRestrito";
import { BotaoNormal, BotoesTres, CardNomeViagem, ContainerPainel, Paragrafo } from "../styles/styles";

export default function AdminHomePage() {
    useAcessoRestrito()
    const [viagens, setViagens] = useState([])
    const [token, setToken] = useState()
    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    const irParaCriarViagem = () => {
        history.push('/admin/trips/create')
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

    const deslogar = () => {
        setToken(localStorage.removeItem("token"))
        history.push('/')
    }
    const listaViagens = viagens && viagens.map((trip) => {
        const irParaDetalhes = () => {
            history.push(`/admin/trips/${trip.id}`)

        }
        const deletarViagem = () => {
            const token = window.localStorage.getItem("token")
            const headers = { auth: token }
            axios.delete(`${url_base}/trips/${trip.id}`, headers)
                .then((res) => {
                    alert('A viagem foi deletada')
                })
                .catch((err) => {
                    alert("Sua solicitação não pode ser processada.")
                })
        }
        const deletar = () => {
            if (window.confirm(`Quer mesmo deletar a viagem ${trip.name}?`)) {
                deletarViagem(trip.id)
            }
        }
        return (
            <CardNomeViagem
                key={trip.id}
                onClick={() => irParaDetalhes(history, trip.id)}
            >
                <p>{trip.name}</p>
                <button onClick={() => deletar(trip.id)}>X</button>
            </CardNomeViagem>
        )
    })

    return (
        <ContainerPainel>
            <Paragrafo>PAINEL ADMINISTRATIVO</Paragrafo>
            <BotoesTres>
                <BotaoNormal onClick={voltar}>VOLTAR</BotaoNormal>
                <BotaoNormal onClick={irParaCriarViagem}>CRIAR VIAGEM</BotaoNormal>
                <BotaoNormal onClick={deslogar}>LOGOUT</BotaoNormal>
            </BotoesTres>
            <div>
                {listaViagens}
            </div>
        </ContainerPainel>
    )
}

//