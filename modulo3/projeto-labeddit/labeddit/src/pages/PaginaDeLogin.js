import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import { irParaCadastro, irParaFeed } from "../routes/cordinator";
import axios from 'axios';
import { url_base } from "../constants/url_base";

export default function PaginaDeLogin() {
    const history = useHistory()
    const { form, onChange, limpaCampos } = useForm({
        email: "",
        password: ""
    })

    const fazerLogin = () => {
        const headers = 'Content-Type: application/json'
        const body = form
        axios.post(`${url_base}/users/login`, body, headers)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                console.log("token")
            }).catch((err) => {
                console.log('Deu errado: ', err.response)
            })
    }
    const logar = (event) => {
        event.preventDefault()
        fazerLogin(form)
        limpaCampos()
        irParaFeed(history)
    }
    return (
        <div>
            <form onSubmit={logar}>
                <input
                    placeholder="e-mail"
                    type={'email'}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder="senha"
                    type={'password'}
                    value={form.password}

                />
            </form>
            <div>
                <button>ENTRAR</button>
                <button onClick={() => irParaCadastro(history)}>CADASTRAR</button>
            </div>
        </div>
    )
}