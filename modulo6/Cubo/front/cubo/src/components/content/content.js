import { Cell, Container, ContentHeader, InfoContainer, Table } from "./style";
import axios from 'axios'
import { baseURL } from "../../constants/baseURL";
import { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Content() {
    const [parts, setParts] = useState([])
    const [sum, setSum] = useState()
    function getData() {
        axios.get(baseURL)
            .then((res) => {
                setParts(res.data.result)
                setSum(res.data.total)
                console.log(res.data)
                console.log(parts)
                console.log(sum)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    useEffect(() => {
        getData()
    }, [parts])

    const ContentTable = () => {
        return (
            <Table>
                <tr>
                    <th></th>
                    <th><b>First name</b></th>
                    <th><b>Last name</b></th>
                    <th><b>Participation</b></th>
                </tr>
                {parts.map((participant) => {
                    let index = parts.indexOf(participant)
                    let position = index + 1

                    let percentage = (sum / 100) * participant.participation
                    console.log(percentage)
                    return (
                        <tr>
                            <Cell>{position}</Cell>
                            <td>{participant.firstName}</td>
                            <td>{participant.lastName}</td>
                            <Cell>{`${percentage}%`}</Cell>
                        </tr>
                    )
                })}
            </Table>
        )
    }
    // const Pizza = () => {
    //     const data = {
    //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //         datasets: [
    //             {
    //                 label: '# of Votes',
    //                 data: [12, 19, 3, 5, 2, 3],
    //                 backgroundColor: [
    //                     'rgba(255, 99, 132, 0.2)',
    //                     'rgba(54, 162, 235, 0.2)',
    //                     'rgba(255, 206, 86, 0.2)',
    //                     'rgba(75, 192, 192, 0.2)',
    //                     'rgba(153, 102, 255, 0.2)',
    //                     'rgba(255, 159, 64, 0.2)',
    //                 ],
    //                 borderColor: [
    //                     'rgba(255, 99, 132, 1)',
    //                     'rgba(54, 162, 235, 1)',
    //                     'rgba(255, 206, 86, 1)',
    //                     'rgba(75, 192, 192, 1)',
    //                     'rgba(153, 102, 255, 1)',
    //                     'rgba(255, 159, 64, 1)',
    //                 ],
    //                 borderWidth: 1,
    //             },
    //         ],
    //     };
    //     return (
    //         <Doughnut

    //             data={data}
    //             width={100}
    //             height={100}
    //             options={{ maintainAspectRatio: false }}
    //         />
    //     )
    // }

    return (
        <Container>
            <ContentHeader>
                <h2>DATA</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </ContentHeader>
            <InfoContainer>
                <ContentTable />
                {/* <Pizza /> */}
            </InfoContainer>
        </Container>
    )
}