import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { url_base } from "../constants/url_base";
import { BotaoNormal, BotoesNormais, ContainerInputs, ContainerLogin, Paragrafo } from "../styles/styles";

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const history = useHistory()
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangeSenha = (event) => {
        setSenha(event.target.value)
    }
    const voltar = () => {
        history.goBack()
    }

    const entrarAdmin = () => {
        history.push('/admin/trips/list')
    }
    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: senha
        }
        axios.post(`${url_base}/login`, body)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                entrarAdmin()
            })
            .catch((err) => {
                console.log('Deu errado: ', err.response)
            })
    }
    return (
        <ContainerLogin>
            <Paragrafo>LOGIN</Paragrafo>
            <ContainerInputs>
                <input
                    placeholder="E-mail"
                    type='email'
                    value={email}
                    onChange={onChangeEmail}
                />
                <input
                    placeholder="Senha"
                    type='password'
                    value={senha}
                    onChange={onChangeSenha}
                />
            </ContainerInputs>
            <BotoesNormais>
                <BotaoNormal onClick={voltar}>VOLTAR</BotaoNormal>
                <BotaoNormal onClick={onSubmitLogin}>ENTRAR</BotaoNormal>
            </BotoesNormais>
        </ContainerLogin>
    )

}