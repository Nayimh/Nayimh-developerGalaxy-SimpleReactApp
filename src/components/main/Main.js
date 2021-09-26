import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Developer from '../developer/Developer';
import './Main.css'
const Main = () => {
    const [developers, setDevelopers] = useState([]);
    const [carts, setCart] = useState([]);
    useEffect(() => {
        fetch('./fake.JSON')
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, [])
    
    const manageCart = (developer) => {
        const newCart = [...carts, developer];
        setCart(newCart);
    }


    return (
        <div className="mainContainer">
            <div className="developer">
                {
                    developers.map(developer => <Developer
                        key={developer.name}
                        developer={developer}
                        manageCart={manageCart}
                    >

                    </Developer>)
                }
            </div>
            <div className="cartContainer">
                <Cart
                    
                    cart={carts}
                ></Cart>
            </div>
        </div>
    );
};

export default Main;