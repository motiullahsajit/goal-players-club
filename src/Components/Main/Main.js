import React from 'react';
import { useEffect, useState } from 'react';
import Player from '../Player/Player';
import PlayersCart from '../PlayersCart/PlayersCart';
import Data from '../PlayersData/data.json';

const Main = () => {
    const [players, setplayers] = useState([])
    useEffect(() => {
        setplayers(Data)
    }, [])
    const [cart, setCart] = useState([]);
    const handleAddPlayer = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
    }
    return (
        <div className='container'>
            <div className="d-flex justify-content-center row">
                <div className='container col-md-8 order-2'>
                    {
                        players.map(player => <Player handleAddPlayer={handleAddPlayer} player={player} key={player.id}></Player>)
                    }
                </div>
                <aside style={{ backgroundColor: '#000' }} className="sidebar col-md-4 py-3 mb-2 order-lg-2">
                    <PlayersCart cart={cart}></PlayersCart>
                </aside>
            </div>
        </div>
    );
};

export default Main;