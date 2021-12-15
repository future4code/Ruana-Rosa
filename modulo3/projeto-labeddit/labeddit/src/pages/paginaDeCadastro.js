import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { url_base } from "../constants/url_base";
import useForm from "../hooks/useForm";
import { irParaFeed } from "../routes/cordinator";

export default function PaginaDeCadastro() {
    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    const { form, onChange, limpaCampos } = useForm({
        username: "",
        email: "",
        password: "",
    })
    const fazerCadastro =()=>{
        const headers = 'Content-Type: application/json'
        const body = form
        axios.post(`${url_base}/users/signup`, body, headers)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                
            }).catch((err) => {
                console.log('Deu errado: ', err.response)
            })
    }
    const cadastrar = (event)=>{
        event.preventDefault()
        console.log(form)
        fazerCadastro(form)
        limpaCampos()
        irParaFeed(history)
    }
    return (
        <div>
            <form onSubmit={cadastrar}>
                <input
                    placeholder="Nome de usuário"
                    name="username"
                    value={form.username}
                    onChange={onChange}
                    required
                />
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
                    name="password"
                    type={'password'}
                    value={form.password}
                    onChange={onChange}
                    required
                    pattern={"^.{8,30}$"}
                    title={"Sua senha deve ter entre 8 e 30 caracteres"}
                />
                <div>
                    <button type="submit">CADASTRAR</button>
                    <button type="button" onClick={() => voltar()}>VOLTAR</button>
                </div>
            </form>

        </div>
    )

}
