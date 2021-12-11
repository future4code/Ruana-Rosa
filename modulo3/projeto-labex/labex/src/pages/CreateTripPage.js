import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import { planetas } from "../constants/planetas"
import axios from "axios";
import { BotaoNormal, BotoesNormais, ContainerCriarViagem, ContainerInputs, Paragrafo } from "../styles/styles";

export default function CreateTripPage() {
    const aluno = 'ruana-piber-carver'
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImlHUHVWYkJHMHVSTURab0JUZnFLIiwiZW1haWwiOiJydWFuYS5waWJlckBnbWFpbC5jb20iLCJpYXQiOjE2MzkwMDgwNzF9.wNM75qCArYR44HBAr2iUwge1lwEtqJ8mORLCmjgsyhY"
    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    const { form, onChange, cleanFields } = useForm({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: '',
    })
    const createTrip = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`
        const body =  form 
        const headers =  { auth: token }
        axios.post(url, body, headers)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log('deu erro')
                console.log(err.response)
            })
    }
    const criarViagem = (event) => {
        event.preventDefault()
        console.log("Formulário enviado!", form)
        createTrip(form)
        cleanFields()
    }
    const diaAtual = new Date()
    const stringDiaAtual = diaAtual.getFullYear() + "-" +
        ("0" + (diaAtual.getMonth() + 1)).substr(-2) + "-"
        + ("0" + diaAtual.getDate()).substr(-2)
    return (
        <ContainerCriarViagem>
            <Paragrafo>CRIAR VIAGEM</Paragrafo>
            <ContainerInputs onSubmit={criarViagem}>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    required />
                <select
                    placeholder={"Planeta"}
                    name={"planet"}
                    value={form.planet}
                    onChange={onChange}
                    required
                >
                    <option value={""} disabled>Escolha um Planeta</option>
                    {planetas.map((planet) => {
                        return <option value={planet} key={planet}>{planet}</option>
                    })}
                </select>
                <input
                    placeholder={"Data"}
                    type={"date"}
                    name={"date"}
                    value={form.date}
                    onChange={onChange}
                    required
                    min={stringDiaAtual} />
                <input
                    placeholder={"Descrição da Viagem"}
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    required />
                <input
                    placeholder={"Duração da Viagem em dias"}
                    type={"number"}
                    name={"durationInDays"}
                    value={form.durationInDays}
                    onChange={onChange}
                    required />
                <BotoesNormais>
                    <BotaoNormal onClick={voltar}>VOLTAR</BotaoNormal>
                    <BotaoNormal>CRIAR</BotaoNormal>
                </BotoesNormais>
            </ContainerInputs>

        </ContainerCriarViagem>
    )
}