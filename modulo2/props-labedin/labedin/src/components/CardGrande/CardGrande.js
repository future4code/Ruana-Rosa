import React from 'react';
import styled from 'styled-components';
//import './CardGrande.css'

const ContainerCardGrande = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    `

const ImagemCardGrande = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    `

const NomeCardGrande = styled.h4`
    margin-bottom: 15px;
    `

const NomeDescricao = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    `



function CardGrande(props) {
    return (
        <ContainerCardGrande>
            <ImagemCardGrande src={ props.imagem } />
            <NomeDescricao>
                <NomeCardGrande>{ props.nome }</NomeCardGrande>
                <p>{ props.descricao }</p>
            </NomeDescricao>
        </ContainerCardGrande>
    )
}

export default CardGrande;
/*





*/