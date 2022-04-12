import { useEffect, useState } from "react"
import axios from 'axios'
import { baseURL } from "../constants/baseURL"
import { GlobalContext } from "./GlobalStateContext"

export default function GlobalState(props) {
    const [allPizzas, setAllPizzas] = useState([])
    const [cart, setCart] = useState([])


    function getAllPizzas() {
        axios.get(`${baseURL}/pizzas`)
            .then((res) => {
                setAllPizzas(res.data.result)
                console.log(allPizzas)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    function getItems() {
        axios.get(`${baseURL}/item`)
            .then((res) => {
                setCart(res.data.result)
                console.log(res.data)
                console.log(cart)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    useEffect(() => {
        getAllPizzas(`${baseURL}/pizzas`)
        getItems(`${baseURL}/item`)
    }, [])

    const states = { allPizzas, cart }
    const setters = { setAllPizzas, setCart }
    return (
        <GlobalContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalContext.Provider>
    )
}