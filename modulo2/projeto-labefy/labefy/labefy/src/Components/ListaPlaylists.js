import React from "react";
import axios from 'axios'
import Styled from 'styled-components'


export default class ListaPlaylists extends React.Component{
    state = {
        playlists: []
    }
    componentDidMount(){
        this.mostrarPlaylists()
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
        .then((res) => {
            alert("Playlist deletada!")
            this.mostrarPlaylists()
        })
        .catch((err) => {
            alert("Algo errado não está certo")
        })
    }

    render() {
        const listaDasPlaylists = this.state.playlists.map((item) => {
            return(
                <div key={item.id}>
                    {item.name}
                    <button onClick={() => this.deletarPlaylist(item.id)}>DELETAR</button>
                </div>
            )
        })
        return(
            <div>
                <h2>Nossas Playlists</h2>
                {listaDasPlaylists}
            </div>
        )
    }
} 