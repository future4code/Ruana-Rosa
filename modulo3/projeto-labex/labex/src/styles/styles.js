import styled from "styled-components"


export const ContainerHome = styled.div`
background-image: url('https://stsci-opo.org/STScI-01EVSTRG78W19FA95VRQWEF919.png');
display: flex;
flex-direction: column;
color: white;
height: 100vh;
align-items: center;
font-family: Poppins, sans-serif;
font-weight: 300;
`
export const BotoesGrandes = styled.div`
width: 60vw;
display: flex;
justify-content: space-between;
justify-self: center;
align-self: center;
margin: auto;
`
export const BotaoGrande = styled.button`
border: 2px solid white;
background-color: rgba(0, 0, 0, 0.5);
color: white;
width: 20vw;
height: 20vw;
&:hover{
    border: 2px solid black;
    color: black;
    background-color: rgba(255, 255, 255, 0.2);
}
`
export const ContainerInputs = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 30vw;
margin: 2.5vw auto;
input, select{
    width: 100%;
    height: 2.5vw;
    margin-top: 2.5vw;
    background-color: rgba(255, 255, 255, 0.2);
    ::-webkit-input-placeholder{
        color: black;
    }
}
`
export const ContainerDetalhes = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 7.5vw;
background-image: url("https://stsci-opo.org/STScI-01EVVEJ9BCMEXN4Y1S93CR93DD.jpg");
background-size: cover;
color: white;
font-weight: 300;
height: 100vh;
`
export const ContainerLista = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 7.5vw;
background-image: url("https://stsci-opo.org/STScI-01EVT0PK28WGSJV4K5601FJGRH.png");
background-size: cover;
color: white;
font-weight: 300;
div{
    display: flex;
    flex-direction: column;
    align-items: center;
}
`
export const CardNomeViagem = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border: 2px solid white;
width: 50vw;
margin-top: 2.5vw;
background-color: rgba(0, 0, 0, 0.5);
height: 7.5vw;
align-items: center;
p{
    margin-left: 2.5vw;
}
button{
    margin-right: 2.5vw;
    height: 2.5vw;
    width: 2.5vw;
    background-color: rgba(255, 255, 255, 0.2);
    border: 2px solid black;
    &:hover{
    border: 2px solid white;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
}
}
&:hover{
    border: 2px solid black;
    color: black;
    background-color: rgba(255, 255, 255, 0.2);
}
`
export const CardViagem = styled.div`
border: 2px solid white;
padding: 20px;
width: 45vw;
margin-top: 20px;
background-color: rgba(0, 0, 0, 0.5);
align-items: flex-start !important;
`
export const Paragrafo = styled.p`
font-weight: 500;
font-size: 40px;
text-shadow: 1px 1px 1px black;
`
export const BotoesNormais = styled.div`
margin-top: 2.5vw;
margin-bottom: 2.5vw;
width: 30vw;
display: flex;
flex-direction: row !important;
justify-content: space-between;
`
export const BotaoNormal = styled.button`
border: 2px solid white;
background-color: rgba(0, 0, 0, 0.5);
color: white;
width: 10vw;
height: 5vw;
&:hover{
    border: 2px solid black;
    color: black;
    background-color: rgba(255, 255, 255, 0.2);
}
`
export const ContainerErro = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content: flex-start;
color: white;
height: 100vh;
padding: 100px;
font-size: 64px;
background-size: cover;
background-image: url('https://i.pinimg.com/originals/34/48/9d/34489d84e0c0a97d5966ad31a4c01ff2.jpg');
/* background-image: url('https://hubblesite.org/files/live/sites/hubble/files/home/_images/final-hubblesite-video-fall-back-img.jpg'); */
`
export const ContainerCriarViagem = styled.div`
background-image: url('https://stsci-opo.org/STScI-01EVVBEMGZCVS2PFV8DP9ZX5R8.png');
height: 100vh;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-size: cover;
padding: 5vw;
`

export const ContainerForm = styled.div`
background-image: url('https://stsci-opo.org/STScI-01EVT0PB5FFGNBDHKB9TM3RMZ1.png');
height: 100vh;
color: white;
display: flex;
padding: 5vw;
flex-direction: row;
align-items: center;
justify-content: center;
p{
    width: 40vw;
}
`

export const ContainerLogin = styled.div`
background-image: url('https://stsci-opo.org/STScI-01EVVNN9RWZ5XBSPZNK2KMDG1H.jpg');
background-size: cover;
height: 100vh;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const ContainerPainel = styled.div`
background-image: url('https://stsci-opo.org/STScI-01EVVD9FMW59RC687K9CYKZJZ9.jpg');
background-size: cover;
background-repeat: repeat-y;
height: 100vh;
color: white;
padding: 10vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const BotoesTres = styled.div`
width: 50vw;
display: flex;
justify-content: space-between;
margin-top: 2.5vw;
`


