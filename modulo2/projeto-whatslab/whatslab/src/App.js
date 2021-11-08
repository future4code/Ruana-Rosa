import React from "react"
import styled from 'styled-components'
import ContainerDialogo from './Components/containerDialogo'
import ContainerInputs from "./Components/containerInputs"
import InputUsuario from './Components/inputUsuario'
import InputMensagem from './Components/inputMensagem'
import MensagemDialogo from './Components/mensagemDialogo'
import TextoMensagem from './Components/textoMensagem'
import GlobalStyle from "./Components/globalStyle"
import BotaoEnviar from "./Components/botaoEnviar"


class App extends React.Component {
  state = {
    inputUsuario: "",
    inputMensagem: "",
    mensagens: [
      {usuario: "", mensagem:""}
    ]
  }

  nomeUsuario = (event) => {
    this.setState({ inputUsuario: event.target.value });
  }

  textoMensagem = (event) => {
    this.setState({ inputMensagem: event.target.value });
  }

  adicionaNovaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.inputUsuario,
      mensagem: this.state.inputMensagem
    }
  

  let copia = [...this.state.mensagens, this.adicionaNovaMensagem]
    copia.push(novaMensagem)

  this.setState({mensagens: copia})  
  this.setState({inputUsuario:"", inputMensagem: ""})
  }

render() {
  const listaMensagens = this.state.mensagens.map((item) => {
    return (
      <MensagemDialogo>
        <div><b>{item.usuario}</b></div>
        <TextoMensagem>{item.mensagem}</TextoMensagem>
      </MensagemDialogo>
    )
    })

  return (
    <ContainerDialogo>
      <GlobalStyle/>
      {listaMensagens}
     <ContainerInputs> <InputUsuario
        value={this.state.inputUsuario}
        onChange={this.nomeUsuario}
        placeholder="Nome"
      />
      <InputMensagem
        value={this.state.inputMensagem}
        onChange={this.textoMensagem}
        placeholder="Texto da mensagem"
      />
      <BotaoEnviar onClick={this.adicionaNovaMensagem}>ENVIAR</BotaoEnviar>
      </ContainerInputs>
    </ContainerDialogo>
  )
}
}
export default App;
