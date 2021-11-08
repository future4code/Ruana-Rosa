import React from "react";
import styled from "styled-components";
import Etapa3 from "./etapa3"

const Container1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;`

class Etapa2 extends React.Component {
    render(){
    return (
      <Container1>
          <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
            <p>5. Qual curso?</p>
            <input
            placeholder="Curso"
             />
             <p>6. Qual a unidade de ensino?</p>
             <input
            placeholder="Unidade de ensino"
            />
         
      </Container1>
    )
  }
}
  export default Etapa2

