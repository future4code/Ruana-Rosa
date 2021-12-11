import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { BotaoNormal, BotoesNormais, ContainerForm, ContainerInputs, Paragrafo } from "../styles/styles";
import useForm from "../hooks/useForm";
import { paises } from "../constants/paises";

export default function ApplicationFormPage() {
    const aluno = 'ruana-piber-carver'
    const [idViagem, setIdViagem] = useState('')
    const [viagens, setViagens] = useState([])
    const { form, onChange, cleanFields } = useForm({
        name: '',
        age: '',
        applicationText: '',
        profession: '',
        country: '',
    })
    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    const applyToTrip = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/${idViagem}/apply`
        const body =  form 
        const headers = 'Content-Type: application/json'
        axios.post(url, body, headers)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log('deu erro')
                console.log(err.response)
            })
    }
    const cadastrar = (event) => {
        event.preventDefault();
        applyToTrip(form)
        console.log("Formulário enviado!", form)
        alert('Sua candidatura foi registrada com sucesso! Desejamos boa sorte')
        cleanFields()
    };
    const getTrips = () => {
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

    const onChangeViagem = (event) => {
        setIdViagem(event.target.value)
    }
    const opcoes = viagens && viagens.map((trip) => {
        return <option key={trip.id} value={trip.id}>{trip.name}</option>
    })
    return (
        <ContainerForm>
            <Paragrafo>CANDIDATE-SE A UMA VIAGEM ESPACIAL!</Paragrafo>
            <ContainerInputs onSubmit={cadastrar}>
                <select
                    onChange={onChangeViagem}
                    name={"trip"}
                    value={form.value}
                    required
                >
                    <option>Escolha uma Viagem</option>
                    {opcoes}
                </select>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder={"Idade"}
                    type={"number"}
                    name={"age"}
                    value={form.age}
                    onChange={onChange}
                    required
                    min={18}
                />
                <input
                    placeholder={"Texto de Candidatura"}
                    name={"applicationText"}
                    value={form.applicationText}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder={"Profissão"}
                    name={"profession"}
                    value={form.profession}
                    onChange={onChange}
                    required
                />
                <select
                    placeholder={"País"}
                    name={"country"}
                    value={form.country}
                    onChange={onChange}
                    required
                >
                    <option value={""} disabled>Escolha um País</option>
                    {paises.map((country) => {
                        return <option value={country} key={country}>{country}</option>
                    })}
                </select>
                <BotoesNormais>
                    <BotaoNormal onClick={voltar}>VOLTAR</BotaoNormal>
                    <BotaoNormal>ENVIAR</BotaoNormal>
                </BotoesNormais>
            </ContainerInputs>
        </ContainerForm>
    )
}

//https://stsci-opo.org/STScI-01EVT0PB5FFGNBDHKB9TM3RMZ1.png