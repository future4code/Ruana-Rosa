import React from "react";
import styled from "styled-components";

const Container1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;`

class Etapa4 extends React.Component {
    render(){
    return(
        <Container1>
            <h3>O FORMULÁRIO ACABOU</h3>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
        </Container1>
    )
}
}

export default Etapa4