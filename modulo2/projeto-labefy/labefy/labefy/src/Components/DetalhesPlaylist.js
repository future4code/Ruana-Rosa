import React from "react";
import axios from 'axios'
import Styled from 'styled-components'
import AdicionaMusica from "./AdicionarMusica";

const CardMusica = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid black;
    width: 50vw;
    padding: 10px;
    margin: 10px;
`
const ContainerMusica = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    `

export default class DetalhesPlaylists extends React.Component{
    state= {
        musicas: [],
  

    }

    componentDidMount() {
        this.getPlaylistTracks()
        console.log(this.props.id)
    }
    
    getPlaylistTracks = () => {
        const id = this.props.id
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        axios.get(url, {
            headers: {
                Authorization: 'ruana-piber-carver'
            }
        })
        .then((res) => {
            this.setState({musicas: res.data.result.tracks})
            this.getPlaylistTracks()
        })
        .catch((err) => {
            alert('Problemas aqui')
           console.log(err.response.data.message)
        })
    }
    render(){
        const listaDeMusicas = this.state.musicas.map((item) => {
            return(
                <CardMusica key= {item.id}>              
                <p>Nome: {item.name}</p>
                <p>Artista: {item.artist}</p>
                
            </CardMusica>
            )
        })
        return(
            <ContainerMusica>
                <button onClick={this.props.mudarPagina}>VOLTAR</button>
                 <h3>{this.props.nomePlaylist}</h3>
                 {listaDeMusicas}
                 <AdicionaMusica/>
            </ContainerMusica>
        )
    }
}