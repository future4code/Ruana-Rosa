import React from 'react'
import styled from 'styled-components'
import Etapa2 from './etapa2';

const Container1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
class Etapa1 extends React.Component {
    state = {
        inputNome: "",
        inputIdade: "",
        inputEmail: "",
        inputEscolaridade: "",
    }

    guardaNome = (event) => {
        this.setState({ inputNome: event.target.value });
      }
  
    
    guardaIdade = (event) => {
        this.setState({ inputIdade: event.target.value})
    }

    guardaEmail = (event) => {
        this.setState({inputEmail: event.target.value})
    }

    guardaEscolaridade = (event) => {
        this.setState({inputEscolaridade: event.target.value})
    }
    render(){
    return(
        <Container1>
            <h3>ETAPA 1 - DADOS GERAIS</h3>
            <p>1. Qual o seu nome?</p>
            <input
            value={this.state.inputNome}
             onChange={this.guardaNome}
            placeholder="Nome"
             />
             <p>2. Qual sua idade?</p>
             <input
            value={this.state.inputIdade}
            onChange={this.guardaIdade}
            placeholder="Idade"
            />
            <p>3. Qual seu e-mail?</p>
            <input
            value={this.state.inputEmail}
            onChange={this.guardaEmail}
            placeholder="alguem@exemplo.com"
            />
            <p>4. Qual a sua escolaridade?</p>
            <select
            value={this.state.inputEscolaridade}
            onChange={this.state.guardaEscolaridade}>
                <option value="medioIncompleto">Ensino Médio Incompleto</option>
                <option value="medioCompleto">Ensino Médio Completo</option>
                <option value="superiorIncompleto">Ensino Superior Incompleto</option>
                <option value="seperiorCompleto">Ensino Superior Completo</option>
            </select>
            
        </Container1>
    )}
}
export default Etapa1