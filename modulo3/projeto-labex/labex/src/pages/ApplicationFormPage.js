import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BotaoNormal, BotoesNormais, ContainerForm, ContainerInputs, Paragrafo } from "../styles/styles";
import useForm from "../hooks/useForm";
import { paises } from "../constants/paises";
import { url_base } from "../constants/url_base";

export default function ApplicationFormPage() {
    const [idViagem, setIdViagem] = useState('')
    const [viagens, setViagens] = useState([])
    const { form, onChange, limpaCampos } = useForm({
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
    const candidatarSe = () => {
        const body = form
        const headers = 'Content-Type: application/json'
        axios.post(`${url_base}/trips/${idViagem}/apply`, body, headers)
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
        candidatarSe(form)
        alert('Sua candidatura foi registrada com sucesso! Desejamos boa sorte')
        limpaCampos()
    };
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
