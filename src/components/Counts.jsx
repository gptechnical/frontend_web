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
            <section id="counts" className="counts section-bg">
                <div className="container">
                    <div className="row counters">
                        <div className="col-lg-3 col-6 text-center">
                          <span className='count_num'><Counters initialValue={1} targetValue={300} autoPlayInterval={10} symbol="K+" /></span>        
                          <p className='para_count'>Happy client</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                        <span className='count_num'><Counters initialValue={1} targetValue={64} autoPlayInterval={80} symbol="+" /></span>
                          <p className='para_count'>Courses</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                        <span className='count_num'><Counters initialValue={1} targetValue={42} autoPlayInterval={120} symbol="+" /></span>
                          <p className='para_count'>Events</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                        <span className='count_num'><Counters initialValue={1} targetValue={15} autoPlayInterval={220} symbol="+" /></span>
                          <p className='para_count'>Trainers</p>
                        </div >

                    </div>
                </div>
            </section>
        </>
    );
};

export default Counts;