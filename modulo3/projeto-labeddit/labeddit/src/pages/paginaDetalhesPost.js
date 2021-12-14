import { useHistory } from "react-router-dom";
import { useAcessoRestrito } from "../hooks/useAcessoRestrito";


export default function PaginaDetalhesPost(){
    // useAcessoRestrito()
    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    return(
        <div>
            Detalhes
            <button onClick={()=>voltar()}>VOLTAR</button>
        </div>
    )
}