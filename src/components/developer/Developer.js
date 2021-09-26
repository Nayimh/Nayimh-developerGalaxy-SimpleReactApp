import React from 'react';
import './Developer.css'
const Developer = (props) => {
    const { name, email, language, image, salary } = props.developer;
    return (
        <div className="developer">
            <div className="singleCart">
            <img src={ image } alt="" />
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Salary: { salary }</p>
                <p>Language: {language}</p>
                <button className="btn" onClick={() => props.manageCart(props.developer)}>Contact</button>
            </div>
        </div>
    );
};

export default Developer;