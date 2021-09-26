// import 
import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Developer from '../developer/Developer';
import './Main.css'
const Main = () => {
    // setting state for developers
    const [developers, setDevelopers] = useState([]);
    // setting state for card
    const [carts, setCart] = useState([]);

    // fetch json data
    useEffect(() => {
        fetch('./fake.JSON')
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, [])

    
    // right side cart section
    const manageCart = (developer) => {
        const newCart = [...carts, developer];
        setCart(newCart);
    }


    return (
        <div className="mainContainer">
            <div className="developer">
                {/* maping cart and event handeler */}
                {
                    developers.map(developer => <Developer
                        key={developer.name}
                        developer={developer}
                        manageCart={manageCart}
                    >

                    </Developer>)
                }
            </div>
            {/* sending carts to event data */}
            <div className="cartContainer">
                <Cart
                    
                    cart={carts}
                ></Cart>
            </div>
        </div>
    );
};

export default Main;