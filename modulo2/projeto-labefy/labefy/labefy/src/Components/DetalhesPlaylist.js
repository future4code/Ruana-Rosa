// import React from "react";
// import axios from 'axios'
// import Styled from 'styled-components'

// export default class DetalhesPlaylists extends React.Component{
//     state= {
//         musicas: [],
//         id: "",
//         // playlist: {}
//     }

//     id = () => {
//         this.setState({id: this.props.id})
//     }

//     componentDidMount() {
//         this.getPlaylistTracks()
//     }

//     getPlaylistTracks = () => {
//         // const id = this.props.id
//         const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
//         axios.get(url, {
//             headers: {
//                 Authorization: 'ruana-piber-carver'
//             }
//         })
//         .then((res) => {
//             this.setState({musicas: res.data.result.tracks})
//             this.getPlaylistTracks()
//         })
//         .catch((err) => {
//             alert('Problemas aqui')
//            console.log(err.response.data.message)
//         })
//     }
//     render(){
//         const listaDeMusicas = this.state.musicas.map((item) => {
//             return(
//                 <div key= {item.id}>              
//                 <p>Nome: {item.name}</p>
//                 <p>Artista: {item.artist}</p>

//             </div>
//             )
//         })
//         return(
//             <div>
//                  {/* <h3>{playlist.name}</h3> */}
//                  {listaDeMusicas}
//             </div>
//         )
//     }
// }