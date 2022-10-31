const Summary = ({ jobData }) => {
    let average = Math.floor((jobData.regional/jobData.national_avg)*100);
    if (jobData.year) {
        return (
            <div>
            <h1>{jobData.regional}</h1>
            <h3>Jobs &#40;{jobData.year}&#41;</h3>
            {average > 100 ? <h3> {average}% <span style={{color:"#0f0"}}>above</span> National Average</h3> :
            <h3>{100-average}% <span style={{color:"#f00"}}>below</span> National Average</h3>}
            </div>
        )
    } else if (jobData.start_year) {
        return (
            <div>
            {jobData.regional > 0 ? <h1><span style={{color:"#0f0"}}>+{jobData.regional}%</span></h1> :
            <h1><span style={{color:"#f00"}}>{jobData.regional}%</span></h1>}
            <h3>% Change &#40;{jobData.start_year}-{jobData.end_year}&#41;</h3>
            {jobData.national_avg > 0 ? <h3>Nation: <span style={{color:"#0f0"}}>+{jobData.national_avg}%</span></h3> :
            <h3>Nation: <span style={{color:"#f00"}}>{jobData.national_avg}%</span></h3>}
            </div>
        )
    } else {
        return (
            <div>
            <h1>${jobData.regional}/hr</h1>
            <h3>Median Hourly Earnings</h3>
            <h3>Nation: ${jobData.national_avg}/hr</h3>
            </div>
        )
    }
}

export default Summary