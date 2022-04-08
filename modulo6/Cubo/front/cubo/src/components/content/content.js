import { Cell, Container, ContentHeader, InfoContainer, Table } from "./style";
import axios from 'axios'
import { baseURL } from "../../constants/baseURL";
import { useContext } from "react";
import del from './../../img/delete.png'
import { ContentChart } from "../chart/chart";
import { GlobalContext } from "../../context/GlobalStateContext";

export default function Content() {
    const { states, setters } = useContext(GlobalContext)
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
                {states.parts.length > 0 && states.parts.map((participant) => {
                    let index = states.parts.indexOf(participant)
                    let position = index + 1
                    let percentage = ((100 / states.sum) * participant.participation).toFixed(2)
                    const id = participant.id
                    function deleteData() {
                        axios.delete(`${baseURL}/${id}`)
                            .then((res) => {
                                alert(`${participant.firstName}'s data has been deleted`)
                                setters.setUpdate(states.update + 1)
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
                            <td><img
                                src={del}
                                onClick={toDelete}
                                alt={'Garbage icon'}
                            /> </td>
                        </tr>
                    )
                })}
            </Table>
        )
    }
    return (
        <Container>
            <ContentHeader>
                <h2>CUBO DATA</h2>
                <p>How much of the total each part represents:</p>
            </ContentHeader>
            <InfoContainer>
                <ContentTable />
                <ContentChart />
            </InfoContainer>
        </Container>
    )
}