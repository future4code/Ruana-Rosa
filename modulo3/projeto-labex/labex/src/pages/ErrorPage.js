import React from "react";
import { useHistory } from "react-router-dom";

export default function ErrorPage() {
    const history = useHistory()
    const voltar = ()=>{
        history.goBack()
    }
    return(
        <div>
            <p>404</p>
            <button onClick={voltar}>Voltar</button>
        </div>
    )
}