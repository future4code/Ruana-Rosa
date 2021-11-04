import React from 'react';
import styled from 'styled-components';

const ContainerCardPequeno = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    width: 39vw;
    `
const NomeCardPequeno = styled.h4`
    margin-bottom: 15px;
    `
const ImagemCardPequeno = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    `

const NomeDescricao = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items; center;
    `
function CardPequeno(props) {
    return (
        <ContainerCardPequeno> 
            <ImagemCardPequeno src={props.imagem}/>           
            <NomeDescricao>
                <NomeCardPequeno>{ props.nome }</NomeCardPequeno>
                <p>{ props.descricao }</p>
            </NomeDescricao>
        </ContainerCardPequeno>
    )
}

export default CardPequeno