import { Cell, Container, ContentHeader, InfoContainer, Table } from "./style";
import axios from 'axios'
import { baseURL } from "../../constants/baseURL";
import { useEffect, useState } from "react";
import del from './../../img/delete.png'

export default function Content(props) {
    const [parts, setParts] = useState([])
    const [sum, setSum] = useState(Number())
    function getData() {
        axios.get(baseURL)
            .then((res) => {
                setParts(res.data.result)
                setSum(res.data.total)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    useEffect(() => {
        getData()
    }, [props.update])
    const ContentTable = () => {
        return (
            <Table>
                <tr>
                    <th></th>
                    <th><b>First name</b></th>
                    <th><b>Last name</b></th>
                    <th><b>Participation</b></th>
                    <th></th>
                </tr>
                {parts.map((participant) => {
                    let index = parts.indexOf(participant)
                    let position = index + 1
                    let percentage = ((100 / sum) * participant.participation).toFixed(2)
                    function deleteData() {
                        const id = participant.id
                        axios.delete(`${baseURL}/${id}`)
                            .then((res) => {
                                alert(`${participant.firstName}'s data has been deleted`)
                                getData()
                            })
                            .catch((err) => {
                                console.log(err.response)
                            })
                    }
                    function toDelete() {
                        if (window.confirm(`Are you sure you want to delete ${participant.firstName}'s data?`)) {
                            deleteData(participant.id)
                        }
                    }
                    return (
                        <tr key={participant.id}>
                            <Cell>{position}</Cell>
                            <td>{participant.firstName}</td>
                            <td>{participant.lastName}</td>
                            <Cell>{`${percentage}%`}</Cell>
                            <td><img src={del} onClick={toDelete} /> </td>
                        </tr>
                    )
                })}
            </Table>
        )
    }
    return (
        <Container>
            <ContentHeader>
                <h2>DATA</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </ContentHeader>
            <InfoContainer>
                <ContentTable />
            </InfoContainer>
        </Container>
    )
}