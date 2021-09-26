// import
import React from 'react';
import './Cart.css'
// import font awsome 
import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// reseving cart data
const Cart = (props) => {
    // destructuring
    const { cart } = props;
// setting card  total, length and name (selecting card)
    let name = [];
    let total = 0;
    for (const product of cart) {
        total = total + product.salary;
        name = name + product.name;
    }
// font awsome icon
    const element = <FontAwesomeIcon icon={faRemoveFormat} />
// right side card section and setting info
    return (
        <div className="uiCArt">
            <h3>Developer Selected: {props.cart.length} </h3>
            <h3>Total Cost: $ {total} </h3>
            {/* event handeler */}
            <button className="Cartbtn" onClick={ () => window.location.reload(false)
 }> {element} Remove</button>
            <h4 className="name">Name:</h4>
            <div className="singleDiv">
            <p className="singleName">{ name }  </p>
            </div>
        </div>
    );
};

export default Cart;