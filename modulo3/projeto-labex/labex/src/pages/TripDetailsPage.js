import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { BotaoNormal, CardViagem, ContainerDetalhes } from "../styles/styles";
import { useAcessoRestrito } from "../hooks/useAcessoRestrito";
import { url_base } from "../constants/url_base";


export default function TripDetailsPage() {
    useAcessoRestrito()
    const [viagem, setViagem] = useState("")
    const params = useParams()
    const token = localStorage.getItem(`token`)
    const headers = { auth: token }
    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    const pegarDetalheViagem = () => {
        axios.get(`${url_base}/trip/${params.id}`, headers).then((res) => {
            setViagem(res.data.trip)
        }).catch((err) => {
            alert("Tivemos problemas ao processar sua solicitação.")
        })
    }
    useEffect(() => {
        pegarDetalheViagem()
    }, [])
    const candidatos = viagem.candidates && viagem.candidates.map((candidato) => {
        const resolverCandidatura = () => {
            const body = {
                "approve": true
            }
            const url = `${url_base}/trip/${params.id}/candidates/${candidato.id}/decide`
            axios.put(url, body, headers)
                .then((res) => {
                    alert(`A candidatura de ${candidato.name} foi aprovada.`)
                })
                .catch((err) => {
                    alert("Tivemos problemas ao processar sua solicitação")
                })
        }
        return (
            <CardViagem key={viagem.id}>
                <p>Candidatos Pendentes:</p>
                {candidato.name && <p><b>Nome: </b>{candidato.name}</p>}
                {candidato.age && <p><b>Idade: </b>{candidato.age}</p>}
                {candidato.profession && <p><b>Profissão: </b>{candidato.profession}</p>}
                {candidato.country && <p><b>País: </b>{candidato.country}</p>}
                {candidato.applicationText && <p><b>Texto da Candidatura: </b>{candidato.applicationText}</p>}
                <div>
                    <button onClick={() => resolverCandidatura}>APROVAR</button>
                    <button>REPROVAR</button>
                </div>
            </CardViagem>
        )
    })
    const aprovados = viagem.approved && viagem.approved.map((aprovado) => {
        return (
            <div>
                <p>{aprovado.name}</p>
            </div>
        )
    })
    return (
        <ContainerDetalhes>
            <BotaoNormal onClick={voltar}>VOLTAR</BotaoNormal>
            <CardViagem key={viagem.id}>
                <p>Detalhes da Viagem</p>
                {viagem.name && <p><b>Nome: </b>{viagem.name}</p>}
                {viagem.description && <p><b>Descrição: </b>{viagem.description}</p>}
                {viagem.planet && <p><b>Planeta: </b>{viagem.planet}</p>}
                {viagem.durationInDays && <p><b>Duração: </b>{viagem.durationInDays} dias</p>}
                {viagem.date && <p><b>Data: </b>{viagem.date}</p>}
            </CardViagem>
            {candidatos}
            {aprovados}

        </ContainerDetalhes>
    )
}
