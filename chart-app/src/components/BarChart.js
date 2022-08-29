import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import React, { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
const BarChart = () => {

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['Frankie', 'Tyler', 'Danielle', 'Sean', 'Aiden', 'Quoc'],
            datasets: [
                {
                    label: `Whom'st let the dogs out?`,
                    data: [12, 55, 34, 120, 724],
                    borderColor: 'rgb(67, 162, 111)',
                    backgroundColor: 'rgba(53, 162, 235, 0.4)',
                },
            ],
        });
        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            title: {
                display: true,
                text: `Whom'st let the dogs out?`
            },
        })
    }, [])
    return (
        <div>
            <Bar 
            options={chartOptions} data={chartData}
            />
        </div>
    )
}

export default BarChart