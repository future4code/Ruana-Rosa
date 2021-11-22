import React from "react";
import axios from 'axios'
import Styled from 'styled-components'

const AdicionaMusica = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid black;
    width: 50vw;
    padding: 10px;
    margin: 10px;
`

export default class AdicionarMusica extends React.Component {
    state = {
        musica: "",
        artista: "",
        endereco: "",
    }

    
    componentDidMount() {
        this.addTrackToPlaylist()
        console.log(this.props.id)
    }

    handleMusica = (event) => {
        this.setState({ musica: event.target.value })
    }

    handleArtista = (event) => {
        this.setState({ artista: event.target.value })
    }

    handleEndereco = (event) => {
        this.setState({ endereco: event.target.value })
    }

    addTrackToPlaylist = () => {
        const id = this.props.id
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.musica,
            artist: this.state.artista,
            url: this.state.endereco
        }

        axios.post(url, body, {
            headers: {
                Authorization: 'ruana-piber-carver'
            }
        })
            .then((res) => {
                alert("Música adicionada à playlist!")
                this.setState({ musica: "" })
                this.setState({ artista: "" })
                this.setState({ endereco: "" })
            })
            .catch((err) => {
                alert(`Problemas! ${err.response.data.message}`)
            })
    }
    render() {
        return (
            <AdicionaMusica>

                <input
                    placeholder={"Nome da Música"}
                    value={this.state.musica}
                    onChange={this.handleMusica}
                />
                <input
                    placeholder={"Artista"}
                    value={this.state.artista}
                    onChange={this.handleArtista}
                />
                <input
                    placeholder={"Endereço do arquivo de MP3"}
                    value={this.state.endereco}
                    onChange={this.handleEndereco}
                />
                <button onClick={this.addTrackToPlaylist}>Adicionar Música</button>
            </AdicionaMusica>
        )
    }
}