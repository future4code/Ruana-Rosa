import React from 'react';
//import './App.css';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/cardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPerfil from './components/CardGrande/img/perfil.png'
import LogoCucaria from './components/CardGrande/img/ahCucaria.png'
import LogoLighthouse from './components/CardGrande/img/lighthouse.jpg'
import ImagemEMail from './components/CardPequeno/img/email.png'
import ImagemEndereco from './components/CardPequeno/img/endereco.png'

const GlobalStyle = createGlobalStyle`
  *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }`

const AppPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  `

const SectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
 `

const Dados = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  `

export {GlobalStyle}

function App() {
  return (
    <AppPrincipal>
      <SectionContainer>
        <Dados>Dados pessoais</Dados>
        <CardGrande
          imagem={FotoPerfil}
          nome="Ruana"
          descricao="Trabalhei durante 7 anos no ramo de cafeterias, e atualmente estou em transição pra carreira de tecnologia, através do curso Web Full Stack na Labenu."
        />
        
        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </SectionContainer>
      <CardPequeno
        imagem={ImagemEMail}
        nome='Email:'
        descricao='ruana.piber@gmail.com'
        />
        <CardPequeno
        imagem={ImagemEndereco}
        nome='Endereço:'
        descricao='Ilha de Lesbos'
        />
      <SectionContainer>
        <Dados>Experiências profissionais</Dados>
        <CardGrande
          imagem={LogoCucaria}
          nome="AH! Cucaria"
          descricao="Especializada em cucas alemãs, a AH! Cucaria traz as receitas da Asta Hetzer, vencedora do 1º Festival de Cucas de Joinville. Atuei como Barista, Subgerente, Gerente de Qualidade de Produto e Coordenadora de Loja."
        />

        <CardGrande
          imagem={LogoLighthouse}
          nome="Lighthouse Cafés Especiais"
          descricao="Lighthouse é uma cafeteria, microtorrefação e escola de baristas, focada em Cafés Especiais (segundo os padrões da SCA e BSCA). Atuei como Barista e Chefe de Loja, sendo responsável pelo atendimento ao cliente, treinamento de pessoal, auxiliar de torra e seleção de lotes e nos cursos de formação de baristas."
        />
      </SectionContainer>

      <SectionContainer>
        <Dados>Minhas redes sociais</Dados>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </SectionContainer>
    </AppPrincipal>
  );
}

export default App;
