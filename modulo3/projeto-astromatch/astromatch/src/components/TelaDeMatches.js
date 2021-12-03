import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import blackHole from '../img/blackHole01.png';

const CardMatch = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: 130px;
border: 2px solid yellow;
color: white;
margin-bottom: 15px;
padding: 15px;
p{
    font-size: 2em;
}
img{
    height: 100px;
    width: 100px;
    object-fit: cover;
    margin-right: 15px;
}
`
const ContainerMatches = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50vw;
height: 100%;
position: relative;
top: -80px;
overflow:auto;
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  background: #d51f5e;
}
::-webkit-scrollbar-thumb {
  background-color: black;    
  border: 3px solid #d51f5e;  
}
img{
    max-width: 65%;
}
`
const ZeroMatches = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 45vw;
p{
    font-size: 32px;
}
`

export function TelaDeMatches() {
    const [listaMatches, setListaMatches] = useState([])
    
    const aluno = "ruana-piber-carver"

    const getMatches = () => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`
        axios.get(url)
            .then((res) => {
                console.log(res)
                setListaMatches(res.data.matches)
            })
            .catch((err) => {
                alert(`Pane no sistema, alguém me desconfigurou`)
                console.log(err.data)
            })
    }
    useEffect(() => {
        getMatches()
    }, [])

    const mostrarMatches = listaMatches.map((match) => {
        return (
            <CardMatch>
                <img src={match.photo} />
                <p>{match.name}</p>
            </CardMatch>
        )
    })
    return (
        <ContainerMatches>
            {mostrarMatches.length === 0 ?
                <ZeroMatches>
                    <img src={blackHole} />
                    <p>0 matches</p>
                </ZeroMatches> :
                <>{mostrarMatches}</>}
        </ContainerMatches>
    )
}