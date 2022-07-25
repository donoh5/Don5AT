import '../App.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Navbar() {
    function moveHome(){
        console.log('sdf');
    }

    return (
        <header className='header'>
            <div className='contents'>
                <div>
                    <img src='logo.png'></img>
                </div>

                <nav className='navigation'>
                    <ul className='ul'>
                        <li className='li'>
                            Home
                        </li>
                        <li className='li'>
                        </li>
                        <li className='li'>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
