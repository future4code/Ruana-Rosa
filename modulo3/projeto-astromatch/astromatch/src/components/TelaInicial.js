import React from "react";
import axios from 'axios';
import styled from 'styled-components'
import { useEffect } from "react";
import { useState } from "react";
import coracao from '../img/coracao.png';
import avanco from '../img/avanco-rapido.png';
import foguete from '../img/foguete.png';
import gif from '../img/astronautinha.gif'

const BotoesEDados = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
width: 88%;
`
const Dados = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
p{
    text-align: center;
    font-size: 32px;
}
`
const Botoes = styled.img`
height: 100px;
`
const NomeEIdade = styled.h2`
color: #ffdc00;
text-align: center;
font-size: 32px;
margin-bottom: 10px;
font-weight: normal;
`
const Carregando = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 60vw;
height: 80vh;
margin-top: 65px;
img{
height: 80vh;
max-height: 80vh;
margin-top: 65px;
}
`

const NaoTemPerfil = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 60vw;
height: 80vh;
margin-top: 35px;
img{
height: 50vh;
}
p{
    font-size: 32px;
}
`
const ContainerPerfil = styled.div`
color: white;
display: flex;
flex-direction: column;
justify-content: space-space-between;
align-items: center;
width: 60vw;
height: 80vh;
margin-top: 65px;
`
const QuadroFoto = styled.div`
    width: 20vw;
    height: 20vw;
    border: 11px double #d51f5e;
    display: flex;
    overflow: hidden;
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    justify-self: center;
`
const FotoPerfil = styled.img`
max-width: 100%;
max-height: 100%;
z-index:1;
object-fit: cover;
`
const FundoFoto = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
    filter: blur(10px);
`

export function TelaInicial() {
    const [foto, setFoto] = useState("")
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [bio, setBio] = useState("")
    const [identifica, setIdentifica] = useState("")
    const aluno = "ruana-piber-carver"
    const [carregando, setCarregando] = useState('')

    const getProfileToChoose = () => {
        setCarregando("carregando")
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
            .then((res) => {
                if (res.data.profile){
                setIdentifica(res.data.profile.id)
                setNome(res.data.profile.name)
                setIdade(res.data.profile.age)
                setFoto(res.data.profile.photo)
                setBio(res.data.profile.bio)
                setCarregando('carregado')
                }else{
                    <NaoTemPerfil>
                        <img src={gif} />
                        </NaoTemPerfil>
                }              
            })
            .catch((err) => {
                alert(`Infelizmente, tivemos problemas ao processar sua solicitação: \n${err.message} `)
                setCarregando("Não carregou")
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
                setEscolha(true)
                getProfileToChoose()
            }).catch((err) => {
                alert("Há algo errado")
            })
    }

    return (
        <>
        {carregando === 'carregando' ?
        <Carregando>
            <img src={foguete} />
        </Carregando>: <>
        {identifica?
        <ContainerPerfil key={identifica}>
            <QuadroFoto>
                <FundoFoto src={foto}/>
                <FotoPerfil src={foto} />
            </QuadroFoto>
            <BotoesEDados>
                <Botoes onClick={choosePerson} src={coracao} />
                <Dados>
                    <NomeEIdade>{nome}, {idade}</NomeEIdade>
                    <p>{bio}</p>
                </Dados>
                <Botoes onClick={getProfileToChoose} src={avanco} />
            </BotoesEDados>
        </ContainerPerfil>:
        <NaoTemPerfil>
            <img src={gif} />
            <p>Todos os perfis foram exibidos</p>
            <p>- Pressione RESTART para reiniciar -</p>
            <p>- Pressione PLAY para ver seus Matches -</p>
            </NaoTemPerfil>}</>
        }
        </>
    )
}

