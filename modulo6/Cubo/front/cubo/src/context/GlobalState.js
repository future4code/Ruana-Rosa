import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../constants/baseURL";
import { GlobalContext } from "./GlobalStateContext"


export default function GlobalState(props) {
    const [update, setUpdate] = useState(0)
    const [parts, setParts] = useState([])
    const [sum, setSum] = useState(Number())

    function getData() {
        axios.get(baseURL)
            .then((res) => {
                setParts(res.data.result)
                setSum(res.data.total)
                setUpdate(update + 1)
                console.log(parts)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    useEffect(() => {
        getData(baseURL)
    }, [update])


    const states = { update, parts, sum }
    const setters = { setUpdate, setParts, setSum }
    const requests= {getData}
    return (
        <GlobalContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalContext.Provider>
    )
}