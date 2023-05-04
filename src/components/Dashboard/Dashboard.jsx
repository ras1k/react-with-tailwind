import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const marksArray = [
        { id: 1, name: 'John', physics: 90, chemistry: 80, math: 70 },
        { id: 2, name: 'Emily', physics: 85, chemistry: 70, math: 60 },
        { id: 3, name: 'Michael', physics: 85, chemistry: 75, math: 65 },
        { id: 4, name: 'Sarah', physics: 75, chemistry: 80, math: 70 },
        { id: 5, name: 'David', physics: 70, chemistry: 85, math: 75 },
        { id: 6, name: 'Jessica', physics: 65, chemistry: 90, math: 80 },
        { id: 7, name: 'Anthony', physics: 65, chemistry: 85, math: 75 },
        { id: 8, name: 'Melissa', physics: 55, chemistry: 80, math: 70 },
        { id: 9, name: 'Matthew', physics: 50, chemistry: 75, math: 65 },
        { id: 10, name: 'Olivia', physics: 45, chemistry: 70, math: 60 },
        { id: 11, name: 'William', physics: 40, chemistry: 65, math: 55 },
        { id: 12, name: 'Sophia', physics: 35, chemistry: 60, math: 50 },
    ];
    return (
        <div className=''>
            <LineChart
                width={1000}
                height={300}
                data={marksArray}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line dataKey="physics" ></Line>
                <Line dataKey="chemistry"></Line>
                <Line dataKey="math"></Line>
            </LineChart>
        </div>
    );
};

export default Dashboard;