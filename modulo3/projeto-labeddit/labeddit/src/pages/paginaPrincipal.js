import CriarPost from "../components/criarPost";
import Postagens from "../components/Postagens";
import { useAcessoRestrito } from "../hooks/useAcessoRestrito";
import { ContainerPrincipal } from "../styles/styles";

export default function PaginaPrincipal() {
    useAcessoRestrito()

    return (
        <ContainerPrincipal>
            <CriarPost />
            <Postagens />
        </ContainerPrincipal>
    )
}