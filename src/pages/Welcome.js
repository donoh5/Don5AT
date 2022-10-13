import React from 'react'
import { useEffect } from 'react';
import './WelcomeStyle.css';

function Welcome(props) {
    useEffect(() => {
        setTimeout(() => {
            props.setPage(true);
        }, 5000);
    }
    , []);

    return (
        <div id="welcome">
            <div id="page">
                <div id="container">
                    <h1>
                        :&#41;
                    </h1>
                    <h2>
                        Your PC ran into a problem and needs to restart... <br />
                        I'm kidding, welcome to my portfolio :&#41;
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Welcome