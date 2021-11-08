import React from 'react';
import Etapa1 from './components/etapa1';
import Etapa2 from './components/etapa2';
import Etapa3 from './components/etapa3';
import Etapa4 from './components/etapa4';
import styled from 'styled-components';

const Container1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`

const Botao = styled.button`
margin-top: 20px;
`

class App extends React.Component {
  state = {
    etapa: 1,
  }



 renderizaEtapa = ()=>{
     switch (this.state.etapa) {
       case 1: 
        return <Etapa1/>
       case 2:
         return <Etapa2/>
       case 3:
         return <Etapa3/>
       case 4:
         return <Etapa4/>  
     }
   }
   renderizaBotao = ()=>{
    if (this.state.etapa !== 4){
      return <Botao onClick={this.irParaProximaEtapa} >Próxima etapa</Botao>
    }
  }

  irParaProximaEtapa = () =>{
    this.setState({
      etapa: this.state.etapa + 1
    })
  }
  render(){
  return (
    <Container1>
      {this.renderizaEtapa()}
      {this.renderizaBotao()}
    </Container1>
  );
}
}
export default App;
