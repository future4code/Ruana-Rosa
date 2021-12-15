import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAcessoRestrito } from "../hooks/useAcessoRestrito";
import axios from "axios";
import { url_base } from "../constants/url_base";

export default function PaginaDetalhesPost() {
    useAcessoRestrito()
    const history = useHistory()
    const [detalhes, setDetalhes] = useState([])
    const voltar = () => {
        history.goBack()
    }
    const params = useParams()
    const token = localStorage.getItem("token")
    const pegarComentarios = () => {
        axios.get(`${url_base}/posts/${params.id}/comments`, { headers: { Authorization: token } })
            .then((res) => {
                setDetalhes(res.data)
                
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    useEffect(() => {
        pegarComentarios()
        console.log(params.id)
        console.log(detalhes)
    }, [])
    const comentarios = detalhes.map((comentario)=>{
        return(
            <div>
                <p>{comentario.username}</p>
                <p>{comentario.body}</p>
            </div>
        )
    })


    return (
        <div>
            Detalhes
            <div>
                Card
                {comentarios}
            </div>
            <button onClick={() => voltar()}>VOLTAR</button>
        </div>
    )
}