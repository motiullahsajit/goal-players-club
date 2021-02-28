import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

const Player = (props) => {
    const { name, email, salary, country, info, club, image, positon } = props.player
    const handleAddCountry = props.handleAddCountry;

    const [isClicked, setIsClicked] = useState(false);
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img className="w-100 py-auto p-3" src={image} alt={name} />
                </div>
                <div className="col-md-5">
                    <div className="card-body ps-5">
                        <h2 className="card-title">#{positon} {name}</h2>
                        <h5>Form: {country}</h5>
                        <h5>Info: {info}</h5>
                        <h5>Email: {email}</h5>
                        <h5>club: {club}</h5>
                        <h5>Anual Salary: {salary}</h5>
                        <button disabled={isClicked} onClick={() => {
                            handleAddCountry(props.player)
                            setIsClicked(true)
                        }} className='btn btn-success'><FontAwesomeIcon icon={faUserPlus} className='me-1' />{isClicked ? "Added To Club" : "Add To Club"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;