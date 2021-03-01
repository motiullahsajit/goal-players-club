import React from 'react';
import bannerImg from '../../images/banner.jpg'
const Banner = () => {
    return (
        <div className="text-white text-center p-3" style={{ backgroundColor: '#000' }}>
            <h1>Chose The Best of best Players For your Club</h1>
            <h2>Goal 50 2020: The best 50 players in the world</h2>
            <img className="w-100 my-1" src={bannerImg} alt="" />
            <h5>After a global vote involving 44 editions, Goal proudly presents its list of the best 25 male and best 25 female footballers on the planet for 2019-20</h5>
        </div>
    );
};

export default Banner;