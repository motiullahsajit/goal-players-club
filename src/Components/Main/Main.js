import React from 'react';
import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import News from '../News/News';
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
        <main className='container'>
            <div className="d-flex justify-content-center row">
                <div className='container col-md-8 order-2'>
                    <div className="banner mb-2">
                        <Banner></Banner>
                    </div>
                    <div className="players-list">
                        {
                            players.map(player => <Player handleAddPlayer={handleAddPlayer} player={player} key={player.id}></Player>)
                        }
                    </div>
                </div>
                <aside style={{ backgroundColor: '#000' }} className="sidebar col-md-4 py-3 mb-2 order-lg-2">
                    <News></News>
                    <PlayersCart cart={cart}></PlayersCart>
                </aside>
            </div>
        </main>
    );
};

export default Main;