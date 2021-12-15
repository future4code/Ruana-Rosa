import CriarPost from "../components/criarPost";
import Postagens from "../components/Postagens";
import { useAcessoRestrito } from "../hooks/useAcessoRestrito";

export default function PaginaPrincipal() {
    useAcessoRestrito()

    return (
        <div>Feed
            <CriarPost />
            <Postagens />
        </div>
    )
}