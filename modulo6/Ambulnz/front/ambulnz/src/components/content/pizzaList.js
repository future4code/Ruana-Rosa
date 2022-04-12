import axios from "axios";
import { useContext, useState } from "react";
import { baseURL } from "../../constants/baseURL";
import { GlobalContext } from "../../context/GlobalStateContext";
import useForm from "../../hooks/useForm";
import { PizzaCard, PizzaListContainer } from "./style";

export default function PizzaList() {
    const { states, setters } = useContext(GlobalContext)
    const [quantity, setQuantity] = useState(0)
    // const { form, onChange, cleanFields } = useForm({
    //     quantity: 0
    // })

    const pizzaList = states.allPizzas.map((pizza) => {
        const postItem = () => {
            let quantity = 1
            let itemPrice = quantity * pizza.price
            const headers = 'Content-Type: application/json'
            const body = {
                "pizza": pizza.name,
                "quantity": quantity,
                "itemPrice": itemPrice
            }
            axios.post(`${baseURL}/item`, body, headers)
                .then((res) => {
                    console.log(body)
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }
        let pizzaPrice = pizza.price.toFixed(2)
        const ingredientsList = pizza.ingredients.map((item) => {
            return (
                <li>{item} </li>
            )
        })
        // let quantity = 1
    
        return (
            <PizzaCard key={pizza.name}>
                <h2>{pizza.name}</h2>
                <p>{` $${pizzaPrice} `} </p>
                <ul><li>Ingredientes:</li>
                    {ingredientsList}
                </ul>
                <div>
                   
                    <button onClick={postItem}>Adicionar</button>
                </div>
            </PizzaCard>
        )
    })
    return (
        <PizzaListContainer>{pizzaList}</PizzaListContainer>
    )
}


{/* <form onSubmit={postItem}>
                        <input
                            placeholder="Quantidade"
                            name="quantity"
                            type='number'
                            value={quantity}
                            min='1'
                            max='100'
                            required
                        />
                    </form> */}