import React from "react";
import axios from 'axios'
import Styled from 'styled-components'

export default class CriarPlaylist extends React.Component{
    state = {
        playlist: ""
    }

    handlePlaylist = (event) => {
        this.setState({playlist: event.target.value})
    }

    novaPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.playlist
        }

        axios.post(url, body, {
            headers: {
                Authorization: 'ruana-piber-carver'
            }
        }).then((res) => {
            alert("Sua playlist foi salva 🎵")
            this.setState({playlist: ""})
        }).catch((err) => {
            alert(err.response.data.message)
        })
    }
    render(){
        return(
            <div>
                <input 
                    placeholder={"Nome da Playlist"}
                    value={this.state.playlist}
                    onChange={this.handlePlaylist}
                />
                <button onClick={this.novaPlaylist}>Criar Playlist</button>
            </div>
        )
    }
}