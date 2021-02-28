import { useEffect, useState } from 'react';
import './App.css';
import Player from './Components/Player/Player';
import Cart from './Components/Cart/Cart';
import Data from './Components/PlayersData/data.json';

function App() {
  const [players, setplayers] = useState([])
  useEffect(() => {
    setplayers(Data)
  }, [])
  const [cart, setCart] = useState([]);
  const handleAddCountry = (player) => {
    const newCart = [...cart, player];
    setCart(newCart);
  }
  return (
    <div className='container'>
      <h1 className='text-center text-success py-5'>People You May Know</h1>
      <div className="App d-flex justify-content-center row">
        <div className='container col-md-8'>
          {
            players.map(player => <Player handleAddCountry={handleAddCountry} player={player} key={player.id}></Player>)
          }
        </div>
        <Cart cart={cart} ></Cart>
      </div>
    </div>
  );
}

export default App;

