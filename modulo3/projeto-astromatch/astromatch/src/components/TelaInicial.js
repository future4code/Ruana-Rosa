import React from "react";
import axios from 'axios';
import styled from 'styled-components'
import { useEffect } from "react";
import { useState } from "react";
import coracao from '../img/coracao.png';
import avanco from '../img/avanco-rapido.png'


const BotoesEDados = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
width: 90%;
`
const Dados = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Botoes = styled.img`
height: 100px;
`


const NomeEIdade = styled.h2`
color: #ffdc00;
`



const ContainerPerfil = styled.div`
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
//height: 80vh;
width: 60vw;

//margin-top: 200px;
`

const FotoPerfil = styled.img`
    max-width: 60vw;
    max-height: 60vh;
    border: 11px double #d51f5e
`

export function TelaInicial() {
    const [perfil, setPerfil] = useState("")
    const [foto, setFoto] = useState("")
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [bio, setBio] = useState("")
    const [identifica, setIdentifica] = useState("")
    const aluno = "ruana-piber-carver"
    const [tela, setTela] = useState("tela inicial")



    const getProfileToChoose = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
            .then((res) => {
                console.log(res)
                setPerfil(res.data.profile)
                setIdentifica(res.data.profile.id)
                setNome(res.data.profile.name)
                setIdade(res.data.profile.age)
                setFoto(res.data.profile.photo)
                setBio(res.data.profile.bio)
            })
            .catch((err) => {
                alert(`Infelizmente, tivemos problemas ao processar sua solicitação: \n${err.response.data.message} `)
            })
    }

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const [escolha, setEscolha] = useState(false)

    const choosePerson = () => {
        const aluno = "ruana-piber-carver"
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`
        const body = {
            "id": identifica,
            "choice": true
        }

        axios.post(url, body)
            .then((res) => {
                console.log(res)
                setEscolha(true)
                getProfileToChoose()
            }).catch((err) => {
                alert("Pane no sistema, alguém me desconfigurou")
            })
    }


    return (
        <ContainerPerfil key={identifica}>
            <FotoPerfil src={foto} />
            <BotoesEDados>
                <Botoes onClick={choosePerson} src={coracao}  />
                <Dados>
                    <NomeEIdade>{nome}, {idade}</NomeEIdade>
                    <p>{bio}</p>
                </Dados>
                <Botoes onClick={getProfileToChoose} src={avanco} />
            </BotoesEDados>
        </ContainerPerfil>
    )
}

