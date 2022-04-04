import { useState } from "react";
import Content from "../components/content/content";
import Header from "../components/header/header";
import { Home } from "./style";

export default function HomePage(props) {
    const [update, setUpdate] = useState(0)
    const toUpdate = () => {
        setUpdate(update + 1)
    }
    return (
        <Home>
            <Header
                toUpdate={toUpdate}
            />
            <Content
                update={update}
            />
        </Home>
    )
}