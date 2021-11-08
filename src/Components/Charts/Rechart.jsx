import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import {styled} from "@mui/material/styles";

const Div = styled('div')(({theme})=>({

}))

const Chart = () => {
    const data = [
        {name: "20 Jul", ABSENT: 10, LEAVE: 15, PRESENT: 30},
        {name: "21 Jul", ABSENT: 12, LEAVE: 27, PRESENT: 48},
        {name: "22 Jul", ABSENT: 20, LEAVE: 20, PRESENT: 33},
        {name: "23 Jul", ABSENT: 9, LEAVE: 28, PRESENT: 40},
        {name: "24 Jul", ABSENT: 8, LEAVE: 18, PRESENT: 48},
        {name: "25 Jul", ABSENT: 19, LEAVE: 10, PRESENT: 30},
        {name: "26 Jul", ABSENT: 15, LEAVE: 30, PRESENT: 28},
    ];
    return (
        <div style={{width: '100%', height: 600, padding:10, marginTop:20,marginLeft: 20,paddingRight: 0,
            borderRadius: 15,
            background: '#ffe7d9'}}>
            <ResponsiveContainer>
                <LineChart
                           margin={{
                               top: 5,
                               right: 30,
                               left: 20,
                               bottom: 5
                           }} data={data}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <CartesianGrid stroke="" strokeDasharray=""/>
                    <Line
                        type="monotone"
                        strokeWidth={3}
                        dataKey="ABSENT"
                        stroke="#DC3545"
                    />
                    <Line
                        type="monotone"
                        strokeWidth={3}
                        dataKey="LEAVE"
                        stroke="#FFC107"
                    />
                    <Line
                        type="monotone"
                        strokeWidth={3}
                        dataKey="PRESENT"
                        stroke="#198754"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;