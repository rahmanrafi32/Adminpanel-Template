import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

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
        <LineChart width={700} height={400} data={data}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
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
    );
};

export default Chart;