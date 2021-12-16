import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { url_base } from "../constants/url_base"
import { irParaPost } from "../routes/cordinator";

export default function Postagens() {
    const history = useHistory()
    const [postagens, setPostagens] = useState([])
    const token = localStorage.getItem("token")

    const pegarPosts = () => {
        axios.get(`${url_base}/posts`, { headers: { Authorization: token } })
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
    const listaDePosts = postagens.map((post) => {
        return (
            <div
                key={post.id}
                onClick={() => clicouPost(post.id)}
            >
                <p>{post.username}</p>
                <p><strong>{post.title}</strong></p>
                <p>{post.body} </p>
                <p>{post.commentCount} comentários</p>
                {/* FAZER TERNÁRIO PRA EXIBIR NENHUM COMENTÁRIO */}

            </div>
        )
    })
    return (
        <div>{listaDePosts}</div>

    )
}