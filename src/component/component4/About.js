import React from 'react';
import './Footer.css';
import logo from './Images/logo.png';


function About(){
    return (
        <div className="about">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
        </div>
    )
}

export default About;