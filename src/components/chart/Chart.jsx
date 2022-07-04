import React from 'react';
import './chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({ title, data, dataKey, grid }) {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            {/* aspect{4/1} means taht the width is 4units while the height is 1unit
     if width is 400px height would be 100 pixels
     */}
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart
                    data={data}
                >
                    <XAxis dataKey="name" stroke='#5550bd' />
                    <Line type="monotone" dataKey={dataKey}
                        stroke='#5550bd'
                    />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
