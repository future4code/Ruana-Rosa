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
    const fazerCadastro = () => {
        const headers = 'Content-Type: application/json'
        const body = form
        axios.post(`${url_base}/users/signup`, body, headers)
            .then((res) => {
                localStorage.setItem("token", res.data.token)

            }).catch((err) => {
                console.log('Deu errado: ', err.response)
            })
    }
    const cadastrar = (event) => {
        event.preventDefault()
        console.log(form)
        fazerCadastro(form)
        limpaCampos()
        irParaFeed(history)
    }
    return (
        <div>
            <p>bem-vinda(o) ao Labekut!</p>
            <p>Só precisamos confirmar algumas coisas antes de você começar a usar o Labekut:</p>
            <div>
                <form onSubmit={cadastrar}>
                    <div> <p>e-mail:</p>
                        <input
                            placeholder="e-mail"
                            name="email"
                            type={'email'}
                            value={form.email}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div> <p>senha:</p>
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
                    </div>
                    <div><p>nome de usuário:</p>
                        <input
                            placeholder="Nome de usuário"
                            name="username"
                            value={form.username}
                            onChange={onChange}
                            required
                        />
                    </div>
                </form>
                <div><p>desculpe se estamos sendo indiscretos, mas qual a sua idade?</p>
                    <input
                        required
                        type={"number"}
                        min={18}
                    />
                </div>
                <div>
                    <p>sexo:</p>
                    <label >
                    <input type="radio"/>
                    feminino
                    </label>
                    <label >
                    <input type="radio"/>
                    masculino
                    </label>
                    <label >
                    <input type="radio"/>
                    prefiro não informar
                    </label>
                </div>
            </div>
            <div>
                <button type="submit">CADASTRAR</button>
                <button type="button" onClick={() => voltar()}>VOLTAR</button>
            </div>
        </div>
    )

}
