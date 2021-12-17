import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { url_base } from "../constants/url_base"
import { irParaPost } from "../routes/cordinator";
import { CardPost, Conteudo, ListaPosts } from "../styles/styles";

export default function Postagens() {
    const history = useHistory()
    const [postagens, setPostagens] = useState([])
    const token = localStorage.getItem("token")

    const pegarPosts = () => {
        axios.get(`${url_base}/posts?size=50`, { headers: { Authorization: token } })
            .then((res) => {
                setPostagens(res.data)
                console.log(postagens)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        pegarPosts()
    }, [])

    const clicouPost = (id) => {
        irParaPost(history, id)

    }

    const positivo = (id) => {
        const body = { direction: 1 }
        axios.post(`${url_base}/posts/${id}/votes`, body, { headers: { Authorization: token } })
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err.response)
            })
    }

    const negativo = (id) => {
        const body = { direction: -1 }
        axios.put(`${url_base}/posts/${id}/votes`, body, { headers: { Authorization: token } })
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err.response)
            })
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
                    <div>
                        <button onClick={() => { negativo(post.id) }}>-</button>
                        <p>  {post.voteSum}  </p>
                        <button onClick={() => { positivo(post.id) }} >+</button>
                    </div>
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