import React from "react";
import axios from 'axios';
import styled from 'styled-components'
import { useEffect } from "react";
import { useState } from "react";
import logo from './img/logo.png'

const ContainerPerfil = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 60vw;
border: 2px solid red;
`

export function TelaInicial(props){
    const [perfil, setPerfil] = useState("")
    const [foto, setFoto] = useState("")
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [bio, setBio] = useState("")
    const [identifica, setIdentifica] = useState("")
    const aluno = "ruana-piber-carver"



    const getProfileToChoose = ()=>{
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
    .then((res) => {
        console.log(res)
        setPerfil(res.data.profile)
        setNome(res.data.profile.name)
        setIdade(res.data.profile.age)
        setFoto(res.data.profile.photo)
        setBio(res.data.profile.bio)
      })
      .catch((err) => {
        alert(`Infelizmente, tivemos problemas ao processar sua solicitação: \n${err.response.data.message} ` )
      })
    }

    useEffect(() =>{
        // getProfileToChoose()
    })
    return (
    <ContainerPerfil>
        <img src={logo}/>
        <h2>aaaaaaaaa</h2>
        <img src={foto} />
        <h2>{nome}, {idade}</h2>
        <p>{bio}</p>
        <button>3</button>
        <button>X</button>

    </ContainerPerfil>)
}

