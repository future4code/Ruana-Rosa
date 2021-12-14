import { useHistory } from "react-router-dom";

export default function PaginaDeCadastro() {
    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    return (
        <div>
            <div>
                <input />
                <input />
                <input />
            </div>
            <button>CADASTRAR</button>
            <button onClick={() => voltar()}>VOLTAR</button>
        </div>
    )

}
