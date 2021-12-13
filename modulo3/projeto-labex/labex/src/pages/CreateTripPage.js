import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import { planetas } from "../constants/planetas"
import axios from "axios";
import { BotaoNormal, BotoesNormais, ContainerCriarViagem, ContainerInputs, Paragrafo } from "../styles/styles";
import { useAcessoRestrito } from "../hooks/useAcessoRestrito";
import { url_base } from "../constants/url_base";

export default function CreateTripPage() {
    useAcessoRestrito()
    const token = localStorage.getItem("token")
    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    const { form, onChange, limpaCampos } = useForm({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: '',
    })

    const criarViagem = (event) => {
        const body = form
        const headers = { auth: token }
        event.preventDefault()
        axios.post(`${url_base}/trips`, body, headers)
            .then((res) => {
                alert('Viagem criada com sucesso!')
            })
            .catch((err) => {
                alert('Infelizmente, tivemos problemas ao processar sua solicitação.')
            })
        limpaCampos()
    }
    const diaAtual = new Date()
    const desdeHoje = diaAtual.getFullYear() + "-" +
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
                    min={desdeHoje} />
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