import React from 'react';

const PlayersCart = (props) => {
    const cart = props.cart;
    const totalSalary = cart.reduce((sum, player) => sum + player.salary, 0)
    return (
        <div style={{ backgroundColor: '#081F2C', color: '#fff' }} className="sticky-top p-3 mt-2">
            <h1 className="text-center text-success">Your Team</h1>
            <h3>Players Selected: {cart.length}</h3>
            <ul className="list-group my-4" style={{ color: '#081F2C' }}>
                {
                    cart.map((player) => <li key={player.id} className="list-group-item fs-4">Name: {player.name} ; Salary: {player.salary}$</li>)
                }
            </ul>
            <div className="d-grid">
                <h4>Total Amount(Salary): {totalSalary} $</h4>
                <button className="btn btn-success">Confirm</button>
            </div>

        </div>
    );
};

export default PlayersCart;