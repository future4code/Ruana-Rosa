import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAcessoRestrito } from "../hooks/useAcessoRestrito";
import axios from "axios";
import useForm from "../hooks/useForm";
import { url_base } from "../constants/url_base";
import {CardPost, Conteudo} from "../styles/styles";

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
        const positivo = (id) => {
            const body = { direction: 1 }
            axios.post(`${url_base}/comments/${id}/votes`, body, { headers: { Authorization: token } })
                .then((res) => {
                    console.log(res)
                }).catch((err) => {
                    console.log(err.response)
                })
        }
        const negativo = (id) => {
            const body = { direction: -1 }
            axios.put(`${url_base}/comments/${id}/votes`, body, { headers: { Authorization: token } })
                .then((res) => {
                    console.log(res)
                }).catch((err) => {
                    console.log(err.response)
                })
        }
        return (
            <div>
                <p>{comentario.username}</p>
                <p>{comentario.body}</p>
                <button onClick={() => { negativo(comentario.id) }}>-</button>
                <p>{comentario.voteSum} </p>
                <button onClick={() => { positivo(comentario.id) }} >+</button>
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
            <CardPost
                key={post.id}
            >
                 <div>
                    <p><i>{post.username}</i> </p>
                    <p><strong>{post.title}</strong></p>
                </div>
                <Conteudo>{post.body} </Conteudo>

            </CardPost>
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