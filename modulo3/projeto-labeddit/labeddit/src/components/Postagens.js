import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { url_base } from "../constants/url_base"
import { irParaPost } from "../routes/cordinator";
import { CardPost, Conteudo, ListaPosts, Icone } from "../styles/styles";
import afirmativo from '../img/afirmativo.png';
import afirmativoAzul from '../img/afirmativoazul.png';
import negativoPreto from '../img/negativo.png';
import negativoVermelho from '../img/negativoverm.png';
import { Votos } from "../styles/styles";

export default function Postagens() {
    const history = useHistory()
    const [postagens, setPostagens] = useState([])
    const token = localStorage.getItem("token")
    const [votoPositivo, setVotoPositivo] = useState(false)
    const [votoNegativo, setVotoNegativo] = useState(false)

    const pegarPosts = () => {
        axios.get(`${url_base}/posts?size=50`, { headers: { Authorization: token } })
            .then((res) => {
                setPostagens(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        pegarPosts()
    }, [postagens])

    const clicouPost = (id) => {
        irParaPost(history, id)
    }

    const positivo = (id) => {
        const body = { direction: 1 }
        axios.post(`${url_base}/posts/${id}/votes`, body, { headers: { Authorization: token } })
            .then((res) => {
                console.log(res)
                setVotoPositivo(true)
                setVotoNegativo(false)
            }).catch((err) => {
                console.log(err.response)
            })
    }

    const negativo = (id) => {
        const body = { direction: -1 }
        axios.put(`${url_base}/posts/${id}/votes`, body, { headers: { Authorization: token } })
            .then((res) => {
                console.log(res)
                setVotoNegativo(true)
                setVotoPositivo(false)
            }).catch((err) => {
                console.log(err.response)
            })
    }
    let iconePositivo
    if (votoPositivo === true) {
        iconePositivo = afirmativoAzul
    } else {
        iconePositivo = afirmativo
    }


    let iconeNegativo
    if (votoNegativo === true) {
        iconeNegativo = negativoVermelho
    } else {
        iconeNegativo = negativoPreto
    }


    const listaDePosts = postagens.map((post) => {
        return (
            <CardPost
                key={post.id}
            >
                <div>
                    <p><i>{post.username}</i> </p>
                    <p><strong>{post.title}</strong></p>
                </div>
                <Conteudo onClick={() => clicouPost(post.id)}>{post.body} </Conteudo>
                <div>
                    <Votos>
                        <Icone src={iconeNegativo} onClick={() => { negativo(post.id) }} />
                        <p>  {post.voteSum}  </p>
                        <Icone src={iconePositivo} onClick={() => { positivo(post.id) }} />
                    </Votos>
                    {post.commentCount === null ?
                        <p>Nenhum comentário</p> :
                        <p onClick={() => clicouPost(post.id)}>{post.commentCount} comentários</p>}
                </div>
            </CardPost>
        )
    })
    return (
        <ListaPosts>
            {listaDePosts}
        </ListaPosts>
    )
}