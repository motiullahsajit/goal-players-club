import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalSalary = cart.reduce((sum, player) => sum + player.salary, 0)
    return (
        <aside className="sidebar col-lg-4 pt-5 mt-5">
            <div style={{backgroundColor:'#f1f1f1'}} className="sticky-top p-3">
                <h1 className='text-success'>People Added: {cart.length}</h1>
                <ul className="list-group my-4">
                    {
                        cart.map((player) => <li key={player.id} className="list-group-item">{player.name} - {player.salary}$</li>)
                    }
                </ul>
                <div className="d-grid">
                    <h5 className='py-3 text-success'>Total Salary(Annual): {totalSalary} $</h5>
                </div>
            </div>
        </aside>
    );
};

export default Cart;
