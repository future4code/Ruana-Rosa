import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import { irParaCadastro, irParaFeed } from "../routes/cordinator";
import axios from 'axios';
import { url_base } from "../constants/url_base";
import { useState } from "react";

export default function PaginaDeLogin() {
    const history = useHistory()
    const { form, onChange, limpaCampos } = useForm({
        email: "",
        password: "",
    })

    const fazerLogin = () => {
        const headers = 'Content-Type: application/json'
        const body = form
        axios.post(`${url_base}/users/login`, body, headers)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                console.log(localStorage.getItem('token'))
            }).catch((err) => {
                console.log('Deu errado: ', err.response)
            })
    }
    const logar = (event) => {
        event.preventDefault()
        console.log(form)
        fazerLogin(form)
        limpaCampos()
        irParaFeed(history)
    }
    return (
        <div>
            <form onSubmit={logar}>
                <input
                    placeholder="e-mail"
                    name="email"
                    type={'email'}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder="senha"
                    type={'password'}
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    required
                    pattern={"^.{8,30}$"}
                    title={"Sua senha deve ter entre 8 e 30 caracteres"}
                />
                <div>
                    <button>ENTRAR</button>
                    <button onClick={() => irParaCadastro(history)}>CADASTRAR</button>
                </div>
            </form>

        </div>
    )
}