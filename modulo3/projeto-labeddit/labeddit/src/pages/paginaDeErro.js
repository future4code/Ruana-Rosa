import { useHistory } from "react-router-dom";

export default function PaginaDeErro() {

    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    return (
        <div>
            Errooou
            <button onClick={()=>voltar()}>VOLTAR</button>
        </div>
    )
}