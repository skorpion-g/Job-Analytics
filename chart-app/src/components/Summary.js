const Summary = ({ jobData }) => {
    let average = (parseInt(jobData.regional)/parseInt(jobData.national))*100;
    if (jobData.year) {
        return (
            <>
            <h1>{jobData.regional}</h1>
            <h3>Jobs &#40;{jobData.year}&#41; </h3>
            {average > 100 ? <h3> {average} <span style={{color:"#0f0"}}>above</span> National Average </h3> :
            <h3>{average} <span style={{color:"#f00"}}>above</span> National Average</h3>}
            </>
        )
    }
}

export default Summary