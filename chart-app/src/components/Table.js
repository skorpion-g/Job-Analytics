import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Table = () => {
    const [tableData, setTableData] = useState(null);
    const [loaded, setLoaded] = useState(false)
    const fetchData = async () => {
        await axios.get('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32')
            .then(res => {
                setTableData(res.data.trend_comparison)
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => setLoaded(true));
    };

    useEffect(() => {
        fetchData()
    }, []);
    if (loaded) {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th className="region-col">Region</th>
                            <th>{tableData.start_year} jobs</th>
                            <th>{tableData.end_year} jobs</th>
                            <th>Change</th>
                            <th>% Change</th>
                        </tr>
                        <tr>
                            <td><span style={{color: 'rgb(152, 255, 152)'}}>▀</span>Regional</td>
                            <td>{tableData.regional[0]}</td>
                            <td>{tableData.regional[tableData.regional.length - 1]}</td>
                            <td>{tableData.regional[tableData.regional.length - 1] - tableData.regional[0]}</td>
                            <td>{(((tableData.regional[tableData.regional.length - 1] - tableData.regional[0]) / tableData.regional[0]) * 100).toFixed(1)}%</td>
                        </tr>
                        <tr>
                            <td><span style={{color: 'rgb(0, 0, 0)'}}>▀</span>State</td>
                            <td>{tableData.state[0]}</td>
                            <td>{tableData.state[tableData.state.length - 1]}</td>
                            <td>{tableData.state[tableData.state.length - 1] - tableData.state[0]}</td>
                            <td>{(((tableData.state[tableData.state.length - 1] - tableData.state[0]) / tableData.state[0]) * 100).toFixed(1)}%</td>
                        </tr>
                        <tr>
                            <td><span style={{color: 'rgb(128, 128, 128)'}}>▀</span>National</td>
                            <td>{tableData.nation[0]}</td>
                            <td>{tableData.nation[tableData.nation.length - 1]}</td>
                            <td>{tableData.nation[tableData.nation.length - 1] - tableData.nation[0]}</td>
                            <td>{(((tableData.nation[tableData.nation.length - 1] - tableData.nation[0]) / tableData.nation[0]) * 100).toFixed(1)}%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    return <span>Loading...</span>
}

export default Table