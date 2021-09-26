import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    for (const product of cart){
        total = total + product.salary;
    }

    return (
        <div className="uiCArt">
            <h3>Developer Selected: {props.cart.length} </h3>
            <h3>Total Cost: $ {total} </h3>
            <button className="Cartbtn" onClick={ () => window.location.reload(false)
 }>Remove</button>
        </div>
    );
};

export default Cart;