import React from 'react';

const News = () => {
    return (
        <div style={{ backgroundColor: '#081F2C', color: '#fff' }} >
            <h2 className='text-center text-success pt-3'>TRENDING NEWS</h2>
            <ul className="list-group my-4 fs-5 rounded-0" style={{ color: '#081F2C' }}>
                <li className="list-group-item"><span className="fs-3">1.</span>Shaw: Referee said Hudson-Odoi handball was a penalty </li>
                <li className="list-group-item"><span className="fs-3">2.</span>Ndombele reveals Pogba chat about playing under Mourinho </li>
                <li className="list-group-item"><span className="fs-3">3.</span>Transfer LIVE: Arteta emerges as Laporta's candidate for Barca job</li>
            </ul>
        </div>
    );
};

export default News;