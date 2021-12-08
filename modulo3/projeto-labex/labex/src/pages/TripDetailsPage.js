import React from "react";
import { useHistory } from "react-router-dom";

export default function TripDetailsPage(){
    const history = useHistory()
    const voltar = ()=>{
        history.goBack()
    }
    return(
        <div>
            <button onClick={voltar}>Voltar</button>
            <p>Detalhes da Viagem</p>
            <p>Candidatos Pendentes</p>
        </div>
    )
}