import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAcessoRestrito } from "../hooks/useAcessoRestrito";
import axios from "axios";
import useForm from "../hooks/useForm";
import { url_base } from "../constants/url_base";

export default function PaginaDetalhesPost() {
    useAcessoRestrito()
    const history = useHistory()
    const [detalhes, setDetalhes] = useState([])
    const [postagens, setPostagens] = useState([])
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
    const comentarios = detalhes.map((comentario) => {
        return (
            <div>
                <p>{comentario.username}</p>
                <p>{comentario.body}</p>
            </div>
        )
    })

    const { form, onChange, limpaCampos } = useForm({
        body: "",
    })

    const criarComentario = () => {
        const body = form
        axios.post(`${url_base}/posts/${params.id}/comments`, body, { headers: { Authorization: token } })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const comentar = (event) => {
        event.preventDefault()
        console.log(form)
        criarComentario()
        limpaCampos()
    }

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
    const infosPost = postagens.filter((post) => {
        return post.id === params.id
    }).map((post) => {
        return (
            <div
                key={post.id}
            >
                <p>{post.username}</p>
                <p><strong>{post.title}</strong></p>
                <p>{post.body} </p>

            </div>
        )
    })



    return (
        <div>
            Detalhes
            <div>
                Card
                {infosPost}
                <form onSubmit={comentar} >
                    <textarea
                        placeholder="Comente o que você acha disto."
                        value={form.body}
                        name="body"
                        onChange={onChange}
                        required
                    />
                    <button>COMENTAR</button>
                </form>
                {comentarios}
            </div>
            <button onClick={() => voltar()}>VOLTAR</button>
        </div>
    )
}