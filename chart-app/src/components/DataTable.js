import axios from 'axios';
import React, { useState, useEffect } from 'react';

const DataTable = () => {
    const [dataTableData, setDataTableData] = useState(null);
    const [loaded, setLoaded] = useState(false)
    const fetchData = async () => {
        await axios.get('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32')
            .then(res => {
                setDataTableData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => setLoaded(true));
    };

    useEffect(() => {
        fetchData();
    }, []);
    if (loaded) {
        let rowCounter = 0;
        return (
            <div>
                <h2 className="title">Industries Employing {dataTableData.occupation.title}</h2>
                <table id="industries">
                    <tbody>
                        <tr>
                            <th className="pick-me"></th>
                            <th className="region-col">Industry</th>
                            <th>Occupation Jobs<br />in Industry<br />&#40;{dataTableData.employing_industries.year}&#41;</th>
                            <th>% of Occupation<br />in Industry<br />&#40;{dataTableData.employing_industries.year}&#41;</th>
                            <th>% of Total<br />Jobs in<br />Industry<br />&#40;{dataTableData.employing_industries.year}&#41;</th>
                        </tr>
                        {dataTableData.employing_industries.industries.map((industry) => (
                            <tr key={rowCounter++}>
                                <td key={rowCounter++} className="bar">{(((industry.in_occupation_jobs/dataTableData.employing_industries.jobs)*100).toFixed(1)) + "%"}</td>
                                <td key={rowCounter++}>{"🏢 "+(industry.title)}</td>
                                <td key={rowCounter++}>{industry.in_occupation_jobs}</td>
                                <td key={rowCounter++}>{((industry.in_occupation_jobs/dataTableData.employing_industries.jobs)*100).toFixed(1)}</td>
                                <td key={rowCounter++}>{((industry.in_occupation_jobs/industry.jobs)*100).toFixed(1)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
    return <span>Loading...</span>
}

export default DataTable;