import React from "react";
import axios from 'axios'
import Styled from 'styled-components'
import DetalhesPlaylists from "./DetalhesPlaylist";

const CardPlaylist = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid black;
    width: 50vw;
    padding: 10px;
    margin: 10px;
`
const ContainerPlaylists = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    `

export default class ListaPlaylists extends React.Component{
    state = {
        playlists: [],
        detalhes: false,
        playlistId: "",
        nomePlaylist: ""
    }
    componentDidMount(){
        this.mostrarPlaylists()
    }

    selecionarPlaylist = (id, name) => {
        this.setState({playlistId: id, nomePlaylist: name})
        
        this.mudarPagina()
    }
    mudarPagina = () => {
        this.setState({detalhes: !this.state.detalhes})
    }
    mostrarPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: 'ruana-piber-carver'
            }
        })
        .then((res) => {
            
            this.setState({playlists: res.data.result.list})
            this.mostrarPlaylists()
        })
        .catch((err) => {
           alert('Deu ruim')
           console.log(err.data)
        })
    }

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers:{
                Authorization: 'ruana-piber-carver'
            }
        })
        .then(() => {
            alert("Playlist deletada!")
            this.mostrarPlaylists()
        })
        .catch((err) => {
            alert(`Algo errado não está certo: \n${err.response.data} ` )
        })
    }

    

    

    render() {  
        const listaDasPlaylists = this.state.playlists.map((item) => {
            return(
                <CardPlaylist key={item.id}>
                    {item.name}
                   <div>
                        <button onClick={() => this.selecionarPlaylist(item.id, item.name)} >VER PLAYLIST</button>
                        <button onClick={() => this.deletarPlaylist(item.id)}>DELETAR</button>
                    </div>
                </CardPlaylist>
            )
        })
        const renderizaPagina = () => {
            return (this.state.detalhes ? 
            <DetalhesPlaylists 
            id={this.state.playlistId} 
            mudarPagina= {this.mudarPagina}
            nomePlaylist= {this.state.nomePlaylist} />:
            <ContainerPlaylists>
            <h2>Nossas Playlists</h2>
            {listaDasPlaylists}
            </ContainerPlaylists>)
        }
        return     (<>{renderizaPagina()}</>)
    }
} 