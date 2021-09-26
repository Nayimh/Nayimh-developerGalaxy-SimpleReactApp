// import

import React from 'react';
import './Developer.css'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// receving developer data 
const Developer = (props) => {
//    destructuring 
    const { name, email, country, image, salary, specialized } = props.developer;
// font awsome icon
    const element = <FontAwesomeIcon icon={faPhone} />
// setting data to main cards
    return (
        <div className="developer">
            <div className="singleCart">
                <img src={image} alt="" />
                <p>Specialized at: { specialized }</p>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Salary: { salary }</p>
                <p>Country: {country}</p>
               
                <button className="btn" onClick={() => props.manageCart(props.developer)}> {element} Contact</button>
            </div>
        </div>
    );
};

export default Developer;