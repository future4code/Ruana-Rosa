import { useState } from 'react';
import { TelaInicial } from './components/TelaInicial';
import { TelaDeMatches } from './components/TelaDeMatches';
import styled from 'styled-components';
import restart from './img/restart.png'
import play from './img/play.png'
import axios from 'axios';
import logo from './img/logo.png'
import GlobalStyle from './components/globalStyle';

const Logo = styled.img`
    position: relative;
    margin-top: 10px;
    width: 50vw;
    top: -110px;
`
const Corpo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
 // height: 100%;
  align-items: center;
  justify-content: center;
  background-color: black;
`
const ContainerFora = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 90px;
color: white;
width: 60vw;
border: 23px dashed blue;
`
const Jogo = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 20vw;
`
const Restart = styled.img`
height: 23px;
`

const Play = styled.img`
height: 23px;
`

function App() {
  const [tela, setTela] = useState(true)

  function escolherTela() {
    switch (tela) {
      case true:
        return <TelaInicial />
      case false:
        return <TelaDeMatches />
      default:
        return <TelaInicial />
    }
  }
  const clear = () => {
    const aluno = "ruana-piber-carver"
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`
    const headers = 'Content-Type: application/json'
    axios.put(url, headers)
      .then((res) => {
        console.log("Here we go again")
        console.log(res)
      })
      .catch((err) => {
        alert("Isso é muito Black Mirror")
      })
  }

  function mudarTela() {
    setTela(!tela)
  }
  return (
    <Corpo>
      <GlobalStyle/>
      <ContainerFora>
      <Logo src={logo} />
      {escolherTela()}
      </ContainerFora>
      <Jogo>
        <Restart onClick={clear} src={restart} />
        <Play onClick={mudarTela} src={play} />
      </Jogo>
    </Corpo>
  );
}

export default App;


/*
----CORES:
  ROSA: #d51f5e
  AMARELO: #ffdc00

*/