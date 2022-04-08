import React, { useContext, useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from 'axios'
import { baseURL } from "../../constants/baseURL";
import { GlobalContext } from "../../context/GlobalStateContext";

export function ContentChart() {
    const { parts } = useContext(GlobalContext)
    let myData = [["Participant", "Participation"]]
    parts.map((participant) => {
        return (
            myData.push([`${participant.firstName} ${participant.lastName}`, participant.participation])
        )
    })
    console.log(myData)
    const data = myData
    const options = {
        title: "Participation",
        pieHole: 0.4,
        is3D: false,
    };
    return (
        <Chart
            chartType="PieChart"
            width="500px"
            height="400px"
            data={data}
            options={options}
        />
    );
}
