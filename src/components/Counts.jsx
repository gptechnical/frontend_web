import React, { useState, useEffect } from 'react';

const Counters = ({ initialValue, targetValue, autoPlayInterval, symbol }) => {
    const [count, setCount] = useState(initialValue);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (count < targetValue) {
                setCount((prevCount) => prevCount + 1);
            } else {
                clearInterval(intervalId);
            }
        }, autoPlayInterval);

        return () => {
            clearInterval(intervalId);
        };
    }, [autoPlayInterval, count, targetValue]);

    return <span className="purecounter">{count}{symbol}</span>;
};

const Counts = () => {
return (
        <>
            <section id="counts" className="counts section-bg" style={{ backgroundColor: "#764BA2", padding: "50px 0px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-6 text-center">
                          <span style={{color: "#ffa700", fontSize: "40px", fontWeight: "700"}}>
                            <Counters initialValue={1} targetValue={30} autoPlayInterval={70} symbol="k" /></span>        
                          <p style={{ color: "#ffffff", fontSize: "22px", fontWeight: "600" }}>Happy client</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                        <span style={{color: "#ffa700", fontSize: "40px", fontWeight: "700"}}><Counters initialValue={1} targetValue={64} autoPlayInterval={80} symbol="+" /></span>
                          <p style={{ color: "#ffffff", fontSize: "22px", fontWeight: "600" }}>Courses</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                        <span style={{color: "#ffa700", fontSize: "40px", fontWeight: "700"}}><Counters initialValue={1} targetValue={42} autoPlayInterval={120} symbol="+" /></span>
                          <p style={{ color: "#ffffff", fontSize: "22px", fontWeight: "600" }}>Events</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                        <span style={{color: "#ffa700", fontSize: "40px", fontWeight: "700"}}><Counters initialValue={1} targetValue={15} autoPlayInterval={220} symbol="+" /></span>
                          <p style={{ color: "#ffffff", fontSize: "22px", fontWeight: "600" }}>Trainers</p>
                        </div >

                    </div>
                </div>
            </section>
        </>
    );
};

export default Counts;