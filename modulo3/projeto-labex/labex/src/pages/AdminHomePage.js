import React from "react";
import { useHistory } from "react-router-dom";

export default function AdminHomePage() {
    const history = useHistory()
    const voltar = ()=>{
        history.goBack()
    }
    const irParaCriarViagem=()=>{
        history.push('/admin/trips/create')
    }
    return(
        <div>
            <p>Painel Administrativo</p>
            <button onClick={voltar}>Voltar</button>
            <button onClick={irParaCriarViagem}>Criar Viagem</button>
            <button>Logout</button>
        </div>
    )
}