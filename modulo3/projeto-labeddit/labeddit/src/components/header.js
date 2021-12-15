import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const Header = styled.header`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 10px;
background-color: black;
color: white;
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
            <p>LabEddit</p>
            <button onClick={deslogar}>
                SAIR
            </button>
        </Header>
    )
}