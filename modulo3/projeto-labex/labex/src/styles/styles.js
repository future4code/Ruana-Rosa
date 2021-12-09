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
export const ContainerInputs = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 30vw;
height: 7.7vw;
margin: 5vw auto;
input{
    width: 100%;
    height: 2.5vw;
    background-color: rgba(255, 255, 255, 0.2);
}
`
export const ContainerLista = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 7.5vw;
background-image: url("https://stsci-opo.org/STScI-01EVVEJ9BCMEXN4Y1S93CR93DD.jpg");
color: white;
font-weight: 300;
`
export const CardNomeViagem = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border: 2px solid white;
padding: 20px;
width: 50vw;
margin-top: 20px;
background-color: rgba(0, 0, 0, 0.5);
`
export const CardViagem = styled.div`
border: 2px solid white;
padding: 20px;
width: 45vw;
margin-top: 20px;
background-color: rgba(0, 0, 0, 0.5);
`
export const BotoesNormais = styled.div`
width: 30vw;
display: flex;
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
background-image: url('https://hubblesite.org/files/live/sites/hubble/files/home/_images/final-hubblesite-video-fall-back-img.jpg');
`
export const ContainerForm = styled.div`
background-image: url('https://stsci-opo.org/STScI-01EVT0PB5FFGNBDHKB9TM3RMZ1.png');
height: 100vh;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const ContainerLogin = styled.div`
background-image: url('https://stsci-opo.org/STScI-01EVVNN9RWZ5XBSPZNK2KMDG1H.jpg');
height: 100vh;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const ContainerPainel = styled.div`
background-image: url('https://stsci-opo.org/STScI-01EVVD9FMW59RC687K9CYKZJZ9.jpg');
height: 100vh;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const BotoesTres = styled.div`
width: 50vw;
display: flex;
justify-content: space-between;
`


