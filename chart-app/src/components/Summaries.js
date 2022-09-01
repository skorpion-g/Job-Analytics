import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Summary from './Summary';

const Summaries = () => {
    const [jobData, setJobData] = useState(null);
    const [loaded, setLoaded] = useState(false)
    const fetchData = async () => {
        await axios.get('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32')
            .then(res => {
                setJobData(res.data.summary)
                console.log('jobData', jobData)
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => setLoaded(true));
    }

    useEffect(() => {
        fetchData()
    }, []);

    if (loaded) {
        return (
            <table>
                <tr>
                    <th>
                        <Summary jobData={jobData.jobs} />
                    </th>
                    <th>
                        <Summary jobData={jobData.jobs_growth} />
                    </th>
                    <th>
                        <Summary jobData={jobData.earnings} />
                    </th>
                </tr>
            </table>
        )
    }
    return <span>Loading...</span>
};

export default Summaries;