import { useState } from 'react';
import { TelaInicial } from './components/TelaInicial';
import { TelaDeMatches } from './components/TelaDeMatches';
import styled from 'styled-components';
import restart from './img/restart.png'
import play from './img/play.png'
import axios from 'axios';
import logo from './img/logo.png'
import GlobalStyle from './styles/globalStyle';


const Corpo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: black;
`

const Logo = styled.img`
    position: fixed;
    margin-top: 30px;
    width: 35vw;
    top: -40px;
    z-index: 1;
`

const ContainerFora = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 20px;
color: white;
width: 50vw;
height: 35vw;
border: 15px dashed blue;
`
const Jogo = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 25vw;
margin-top: 20px;
`
const Restart = styled.img`
height: 40px;
`

const Play = styled.img`
height: 40px;
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
      <GlobalStyle />
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
