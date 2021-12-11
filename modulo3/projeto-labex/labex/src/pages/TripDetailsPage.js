import React, { useEffect, useState } from "react";
import { useHistory , useParams} from "react-router-dom";
import axios from "axios";
import { BotaoNormal, CardViagem, ContainerDetalhes } from "../styles/styles";


export default function TripDetailsPage() {
    const [viagem, setViagem] = useState()
    const params = useParams()
    console.log(params.id)
    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    const getTripDetail = () => {
        const aluno = 'ruana-piber-carver'
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImlHUHVWYkJHMHVSTURab0JUZnFLIiwiZW1haWwiOiJydWFuYS5waWJlckBnbWFpbC5jb20iLCJpYXQiOjE2MzkwMDgwNzF9.wNM75qCArYR44HBAr2iUwge1lwEtqJ8mORLCmjgsyhY"
        const headers = { auth: token }
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/${params.id}`
        axios.get(url, headers).then((res) => {
            setViagem(res.data.trip)
            console.log('funcionou')
        }).catch((err) => {
            console.log(`Deu ruim: ${err.response}`)
        })
    }
    useEffect(() => {
        getTripDetail()
    }, [])
    return (
        <ContainerDetalhes>
            <BotaoNormal onClick={voltar}>VOLTAR</BotaoNormal>
            {/* <CardViagem key={viagem.id}>
                {viagem.name && <p><b>Nome: </b>{viagem.name}</p>}
                <p><b>Descrição: </b>{viagem.description}</p>
                <p><b>Planeta: </b>{viagem.planet}</p>
                <p><b>Duração: </b>{viagem.durationInDays} dias</p>
                <p><b>Data: </b>{viagem.date}</p>
            </CardViagem> */}
            <p>Detalhes da Viagem</p>
            <p>Candidatos Pendentes</p>
        </ContainerDetalhes>
    )
}
