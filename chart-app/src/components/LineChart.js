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

const LineChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const rangeFinder = (start, end) => {
            let ans = [];
            for (let i = start; i <= end; i++) {
                ans.push(i)
            }
            return ans;
        }
        const fetchData = async () => {
            let startYear = 0;
            let endYear = 0;
            let range = [];
            let numJobsRegion = [];
            let percentChangeRegion = [];
            let numJobsState = [];
            let percentChangeState = [];
            let numJobsNation = [];
            let percentChangeNation = [];
            await axios.get('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32')
                .then(res => {
                    startYear = parseInt(res.data.trend_comparison.start_year);
                    endYear = parseInt(res.data.trend_comparison.end_year);
                    range = rangeFinder(startYear, endYear);
                    for (const jobInfo of res.data.trend_comparison.regional) {
                        numJobsRegion.push(parseInt(jobInfo));
                    }
                    for (let i = 0; i < numJobsRegion.length; i++) {
                        percentChangeRegion.push(((numJobsRegion[i + 1] - numJobsRegion[i]) / numJobsRegion[i]) * 100)
                    }
                    for (const jobInfo of res.data.trend_comparison.state) {
                        numJobsState.push(parseInt(jobInfo));
                    }
                    for (let j = 0; j < numJobsState.length; j++) {
                        percentChangeState.push(((numJobsState[j + 1] - numJobsState[j]) / numJobsState[j]) * 100)
                    }
                    for (const jobInfo of res.data.trend_comparison.nation) {
                        numJobsNation.push(parseInt(jobInfo));
                    }
                    for (let k = 0; k < numJobsNation.length; k++) {
                        percentChangeNation.push(((numJobsNation[k + 1] - numJobsNation[k]) / numJobsNation[k]) * 100)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
            setChartData({
                labels: range,
                datasets: [
                    {
                        label: `Region`,
                        data: percentChangeRegion,
                        borderColor: 'rgb(152, 255, 152)',
                        backgroundColor: 'rgba(162, 228, 184, 0.4)',
                    },
                    {
                        label: `State`,
                        data: percentChangeState,
                        borderColor: 'rgb(0, 0, 0)',
                        backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    },
                    {
                        label: `Nation`,
                        data: percentChangeNation,
                        borderColor: 'rgb(128, 128, 128)',
                        backgroundColor: 'rgba(169, 169, 169, .4)',
                    },
                ],
            });
            setChartOptions({
                responsive: true,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                stacked: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'Percent Change'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Year(s)'
                        }
                    }
                }
            })
        }
        fetchData();
    }, []);
    return (
        <div>
            <h2 className="linechart-title">Regional Trends</h2>
            <Line
                options={chartOptions} data={chartData}
            />
        </div>
    )
}

export default LineChart