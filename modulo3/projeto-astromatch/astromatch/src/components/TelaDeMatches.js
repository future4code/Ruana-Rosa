import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components'

const CardMatch = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: 130px;
border: 2px solid yellow;
color: white;
margin-bottom: 15px;
padding-right: 15px;
img{
    height: 100px;
    width: 100px;
    object-fit: cover;
    margin-left: 15px;
    margin-right: 15px;
}

`

export function TelaDeMatches(){
    const [listaMatches, setListaMatches] = useState([])
    const [foto, setFoto] = useState("")
    const [nome, setNome] = useState("")
    const [perfil, setPerfil] = useState("")
    const aluno = "ruana-piber-carver"


    const getMatches = () =>{
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`
        axios.get(url)
        .then((res)=>{
            console.log(res)
            setListaMatches(res.data.matches)
            setNome(res.data.profile.name)
            setFoto(res.data.profile.photo)
            setPerfil(res.data.perfil)
        })
        .catch((err)=>{
            alert(`Pane no sistema, alguém me desconfigurou`)
        })
    }
    useEffect(() => {
        getMatches()
    }, [])

    const mostrarMatches = listaMatches.map((match) =>{
        return(
            <CardMatch>
                
                <img src={match.photo}/>
                <h4>{match.name}</h4>
            </CardMatch>
        )
    })
    return(
        <div>
            {mostrarMatches}
        </div>
    )
}