import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

const Player = (props) => {
    const { name, email, salary, country, age, club, image, positon, info } = props.player
    const handleAddPlayer = props.handleAddPlayer;
    const backgroundColor={
        backgroundColor:'#081F2C',
    }
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div style={{ backgroundColor: '#000'}} className="card mb-3 text-white">
            <div className="row g-0">
                <div className="col-md-4 my-auto">
                    <img className="w-100" src={image} alt={name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body ps-3 pt-4">
                        <>
                        <h2 className="card-title"><span style={backgroundColor} className="badge text-success">#{positon} {name}</span></h2>
                        <h5>Form: {country}</h5>
                        <h5>Age: {age}</h5> 
                        <h5>Club Name: {club}</h5>
                        <h5>Email: {email}</h5>
                        </>
                        <p>{info}</p>
                        <h5><span style={backgroundColor} className="badge rounded-pill text-success">Annual Salary: {salary} $</span></h5>
                        <button disabled={isClicked} onClick={() => {
                            handleAddPlayer(props.player)
                            setIsClicked(true)
                        }} className='btn text-success' style={{ backgroundColor: '#081F2C' }}><FontAwesomeIcon icon={faUserPlus} className='me-1' />{isClicked ? "Added To Club" : "Add To Club"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;