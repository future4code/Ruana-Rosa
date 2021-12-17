import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';


const Header = styled.header`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 25px;
background-color: #fff;

p{
    font-size: 50px;
    font-family: 'puente-medium-regular';
    color: #ED2590;
    background-color: #fff;
}
button{
    background-color: #fff !important;
    color: black;
    width: 100px;
    &:hover{
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
    }
}

`


export default function Cabecalho() {
    const [token, setToken] = useState()
    const history = useHistory()
    const deslogar = () => {
        setToken(localStorage.removeItem("token"))
        console.log('clicou')
        history.push('/login')
    }
    return (
        <Header>
            <p>Labekut</p>
            <button onClick={deslogar}>
                <b> SAIR </b>
            </button>
        </Header>
    )
}