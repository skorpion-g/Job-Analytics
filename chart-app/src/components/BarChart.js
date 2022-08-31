import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js'
import { Line } from 'react-chartjs-2'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
  );
  
const BarChart = () => {
    let startYear = 0;
    let endYear = 0;
    let numJobsRegion = [];
    let numJobsState = [];
    let numJobsNation = [];
    axios.get('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32')
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err)
    });

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['2001', '2002', 'Danielle', 'Sean', 'Aiden', 'Quoc'],
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
            <Line 
            options={chartOptions} data={chartData}
            />
        </div>
    )
}

export default BarChart