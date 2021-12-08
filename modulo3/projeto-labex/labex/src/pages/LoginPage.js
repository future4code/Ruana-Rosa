import React from "react";
import { useHistory } from "react-router-dom";

export default function LoginPage(){
    const history = useHistory()
    const voltar = ()=>{
        history.goBack()
    }

    const entrarAdmin = () =>{
        history.push('/admin/trips/list')
    }
    return(
        <div>
            <p>Login</p>
            <input placeholder="E-mail"/>
            <input placeholder="Senha"/>
            <button onClick={voltar}>Voltar</button>
            <button onClick={entrarAdmin}>Entrar</button>
        </div>
    )

}