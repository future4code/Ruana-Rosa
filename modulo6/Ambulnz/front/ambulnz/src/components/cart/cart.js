import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalStateContext"
import { CartContainer } from "./style"

export default function Cart() {
    const { states, setters } = useContext(GlobalContext)
    const cartList = states.cart.map((item) => {
        let showPrice= item.itemPrice.toFixed(2)
        return (
            <tr>
                <td>{item.pizza} </td>
                <td>{item.quantity} </td>
                <td>{`$${showPrice}`} </td>
            </tr>
        )
    })
    return (
        <CartContainer>
            <table>
            <tr>
                <th>Pizza</th>
                <th>Quantidade</th>
                <th>Valor </th>
            </tr>
            {cartList}
            </table>
            
        </CartContainer>
    )
}