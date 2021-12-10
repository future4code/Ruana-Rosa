import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


export default function TripDetailsPage() {
 
    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    
    return (
        <div>
            <button onClick={voltar}>Voltar</button>
            <p>Detalhes da Viagem</p>
            <p>Candidatos Pendentes</p>
        </div>
    )
}