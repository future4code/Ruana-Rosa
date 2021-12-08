import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const ContainerForm = styled.div`
background-image: url('https://stsci-opo.org/STScI-01EVT0PB5FFGNBDHKB9TM3RMZ1.png');
height: 100vh;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const BotoesNormais = styled.div`
width: 30vw;
display: flex;
justify-content: space-between;
`
const BotaoNormal = styled.button`
border: 2px solid white;
background-color: rgba(0, 0, 0, 0.5);
color: white;
width: 10vw;
height: 5vw;
&:hover{
    border: 2px solid black;
    color: black;
    background-color: rgba(255, 255, 255, 0.2);
}
`
export default function ApplicationFormPage() {
    const aluno = 'ruana-piber-carver'
    const [idViagem, setIdViagem] = useState('')
    const [nome, setNome] = useState('')
    const [Idade, setIdade] = useState('')
    const [applicationText, setApplicationText] = useState('')
    const [viagens, setViagens] = useState([])
    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    // const applyToTrip = ()=>{
    //     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/${idViagem}/apply`
    //     const body = {
    //         "name": {nome},
    //         "age": {Idade},
    //         "applicationText": {applicationText},
    //         "profession": "Chefe",
    //         "country": "Brasil"
    //     }
    //     axios.post(url, body, headers)
    // }
    // const getTrips = () => {
    //     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`
    //     axios.get(url).then((res) => {
    //         setViagens(res.data.trips)
    //         console.log('funciona')
    //     }).catch((err) => {
    //         console.log(err.data)
    //     })
    // }
    // useEffect(() => {
    //     getTrips()
    // }, [])
   
    const onChangeViagem = (event) => {
        setIdViagem(event.target.value)
    }
    const opcoes = viagens && viagens.map((trip)=>{
        return <option key={trip.id} value={trip.id}>{trip.name}</option>
    })
    return (
        <ContainerForm>
            <p>Inscreva-se para uma viagem espacial!</p>
            {/* <form>
                <select onChange={onChangeViagem}>
                    <option>Escolha uma Viagem</option>
                    {opcoes}
                </select>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    onChange={setNome}
                    required
                />
                <input
                    placeholder={"Idade"}
                    type={"number"}
                    name={"age"}
                    onChange={setIdade}
                    required
                    min={18}
                />
                <input
                    placeholder={"Texto de Candidatura"}
                    name={"applicationText"}
                    onChange={setApplicationText}
                    required
                />
                <input
                    placeholder={"Profissão"}
                    name={"profession"}

                    // onChange={onChange}
                    required
                />
                <input
                    placeholder={"País"}
                    name={"country"}
                    // onChange={onChange}
                    required
                />
                    
            </form> */}
            <BotoesNormais>                
                <BotaoNormal onClick={voltar}>Voltar</BotaoNormal>
                <BotaoNormal>Enviar</BotaoNormal>
            </BotoesNormais>
        </ContainerForm>
    )
}

//https://stsci-opo.org/STScI-01EVT0PB5FFGNBDHKB9TM3RMZ1.png