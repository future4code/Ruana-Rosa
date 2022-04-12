import { useContext } from "react";
import Cart from "../components/cart/cart";
import PizzaList from "../components/content/pizzaList";
import Header from "../components/header/header";
import { GlobalContext } from "../context/GlobalStateContext";
import { ContentContainer } from "./style";

export default function HomePage() {
    const { states, setters } = useContext(GlobalContext)
    return (
        <div>
            <Header />
            <ContentContainer>
                <PizzaList />
                {states.cart.lengh !== 0 && <Cart />}
            </ContentContainer>
        </div>
    )
}