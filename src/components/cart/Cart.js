import React from 'react';
import './Cart.css'
import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = (props) => {
    const { cart } = props;

    let name = [];
    let total = 0;
    for (const product of cart) {
        total = total + product.salary;
        name = name + product.name;
    }

    const element = <FontAwesomeIcon icon={faRemoveFormat} />

    return (
        <div className="uiCArt">
            <h3>Developer Selected: {props.cart.length} </h3>
            <h3>Total Cost: $ {total} </h3>
            
            <button className="Cartbtn" onClick={ () => window.location.reload(false)
 }> {element} Remove</button>
            <h4 className="name">Name:</h4>
            <p className="singleName">{ name }  </p>
        </div>
    );
};

export default Cart;