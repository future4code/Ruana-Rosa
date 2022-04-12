import { baseURL } from "../../constants/baseURL";
import useForm from "../../hooks/useForm";
import { Container, Form } from "./style";
import axios from 'axios'
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalStateContext";

export default function Header() {
    const { states, setters } = useContext(GlobalContext)
    const { form, onChange, cleanFields } = useForm({
        firstName: '',
        lastName: '',
        participation: ''
    })
    const postData = () => {
        const headers = 'Content-Type: application/json'
        const body = form
        axios.post(baseURL, body, headers)
            .then((res) => {
                setters.setUpdate(states.update + 1)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    const submitData = (event) => {
        event.preventDefault()
        postData(form)
        cleanFields()
    }
    return (
        <Container>
            <Form
                onSubmit={submitData}
            >
                <input
                    placeholder='First name'
                    name="firstName"
                    value={form.firstName}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder='Last name'
                    name="lastName"
                    value={form.lastName}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder='Participation'
                    name="participation"
                    type='number'
                    value={form.participation}
                    onChange={onChange}
                    min='1'
                    max='100'
                    required
                />
                <button type={"submit"}>SEND</button>
            </Form>
        </Container>
    )
}