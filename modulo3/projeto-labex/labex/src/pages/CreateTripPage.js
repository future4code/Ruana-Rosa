import React from "react";
import { useHistory } from "react-router-dom";

export default function CreateTripPage() {
    const history = useHistory()
    const voltar = ()=>{
        history.goBack()
    }
    return(
        <div>
            <p>Criar Viagem</p>
            <button onClick={voltar}>Voltar</button>
            <button>Criar</button>
        </div>
    )
}