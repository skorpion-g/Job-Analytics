import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Summary from './Summary';

const Summaries = () => {
    const [jobData, setJobData] = useState(null);
    const [loaded, setLoaded] = useState(false)
    const fetchData = async () => {
        await axios.get('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32')
            .then(res => {
                setJobData(res.data)
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
                <h3 className="title2">{jobData.occupation.title} in {jobData.region.title}</h3>
                <h2 className="title2">Occupation Summary for {jobData.occupation.title}</h2>
                <header>
                    <div className="jobs-summary col">
                        <Summary jobData={jobData.summary.jobs} />
                    </div>
                    <div className="jobs-growth-summary col">
                        <Summary jobData={jobData.summary.jobs_growth} />
                    </div>
                    <div className="earnings-summary col">
                        <Summary jobData={jobData.summary.earnings} />
                    </div>
                </header>
            </div>
        )
    }
    return <span>Loading...</span>
};

export default Summaries;