import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BotaoNormal, BotoesNormais, ContainerInputs, ContainerLogin } from "../styles/styles";

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
    const onSubmitLogin = () =>{
        console.log(email, senha )
        const aluno = 'ruana-piber-carver'
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/login`
        const body = {
            email: email,
            password: senha
        }
        axios.post(url,body)
        .then((res) =>{
            console.log('Deu certo: ', res.data)
            entrarAdmin()
        })
        .catch((err) =>{
            console.log('Deu errado: ', err.response)
        })
    }
    return (
        <ContainerLogin>
            <p>Login</p>
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
                <BotaoNormal onClick={voltar}>Voltar</BotaoNormal>
                <BotaoNormal onClick={onSubmitLogin}>Entrar</BotaoNormal>
            </BotoesNormais>
        </ContainerLogin>
    )

}