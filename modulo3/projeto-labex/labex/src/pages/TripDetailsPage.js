import React, { useEffect, useState } from "react";
import { useHistory , useParams} from "react-router-dom";
import axios from "axios";
import { CardViagem } from "../styles/styles";


export default function TripDetailsPage() {
    const params = useParams()
    console.log(params)
    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    const getTripDetail = (idViagem) => {
        const aluno = 'ruana-piber-carver'
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImlHUHVWYkJHMHVSTURab0JUZnFLIiwiZW1haWwiOiJydWFuYS5waWJlckBnbWFpbC5jb20iLCJpYXQiOjE2MzkwMDgwNzF9.wNM75qCArYR44HBAr2iUwge1lwEtqJ8mORLCmjgsyhY"
        const headers = { auth: token }
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/${idViagem}`
        axios.get(url, headers).then((res) => {
            // setViagem(res.data.trip)
            console.log('funciona')
        }).catch((err) => {
            console.log(err.response)
        })
    }
    useEffect(() => {
        getTripDetail()
    }, [])
    return (
        <div>
            <button onClick={voltar}>Voltar</button>
            {/* <CardViagem key={trip.id}>
                <p><b>Nome: </b>{trip.name}</p>
                <p><b>Descrição: </b>{trip.description}</p>
                <p><b>Planeta: </b>{trip.planet}</p>
                <p><b>Duração: </b>{trip.durationInDays} dias</p>
                <p><b>Data: </b>{trip.date}</p>
            </CardViagem> */}
            <p>Detalhes da Viagem</p>
            <p>Candidatos Pendentes</p>
        </div>
    )
}
