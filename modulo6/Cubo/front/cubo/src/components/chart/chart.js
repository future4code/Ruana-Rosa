import React, { useContext } from "react";
import { Chart } from "react-google-charts";
import { GlobalContext } from "../../context/GlobalStateContext";

export function ContentChart() {
    const { states} = useContext(GlobalContext)
    let myData = [["Participant", "Participation"]]
    states.parts.map((participant) => {
        return (
            myData.push([`${participant.firstName} ${participant.lastName}`, participant.participation])
        )
    })
    const data = myData
    const options = {
        pieHole: 0.4,
        is3D: false,
    };
    return (
        <Chart
            chartType="PieChart"
            width="600px"
            height="350px"
            data={data}
            options={options}
        />
    );
}
