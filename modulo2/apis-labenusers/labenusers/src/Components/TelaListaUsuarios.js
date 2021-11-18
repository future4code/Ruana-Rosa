import React from "react";
import axios from "axios"
import styled from 'styled-components'

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 40vw;
    display: flex;
    justify-content: space-between;
`

export default class TelaListaUsuarios extends React.Component{
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }
    
    pegarUsuarios = async() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    //     axios.get(url, {
    //         headers: {
    //             Authorization: 'ruana-piber-carver'
    //         }
    // })
    // .then((res) => {
    //     this.setState({usuarios: res.data})
    // })
    // .catch((err) => {
    //     alert("Deu ruim aqui")
    // }) 

    try {
        const res = await axios.get(url, {
            headers: {
                Authorization: 'ruana-piber-carver'
            }
        })
        this.setState({usuarios: res.data})
    } catch (err) {
        alert("Deu ruim aqui")
    }
}
    
    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "ruana-piber-carver"
            }
        }).then((res) => {
            alert("Usuário deletado com sucesso!")
            this.pegarUsuarios()
        }).catch((err) => {
            alert("Algo errado não está certo")
        })
    }

    render(){
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
                <CardUsuario key={user.id}>
                    {user.name}
                    <button onClick={() => this.deletarUsuario(user.id)}>X</button>
                    </CardUsuario>
            )
        })
        return(
            <div>
                <button onClick={this.props.irParaCadastro} >Ir para cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
}