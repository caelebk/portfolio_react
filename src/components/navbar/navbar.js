import React, { Component } from 'react'
import './navbar.scss';
import * as constants from '../constants/constants';
import { addAnimation } from '../animator/animator';
import { returnTo } from '../animator/returnTo';

class NavBar extends Component {
    animateTitle() {
        document.querySelectorAll('.nav-item').forEach((element) => {
            addAnimation(element, 'backInDown') //heartBeat5 headShake backInDown2 bounceIn3 zoomIn4 fadeIn1
        });
        addAnimation(document.querySelector('.title'), 'bounceInDown');
        addAnimation(document.querySelector('.title'), 'delay-1s');
    }

    render() {

        window.addEventListener('load', () => {
            this.animateTitle();
        });

        return (
            <nav className='navbar'>
                <div className="nav-list">
                    <ul>
                        <li className='nav-item hvr-grow'><a href="./"> Home </a></li>
                        <li className='nav-item hvr-grow' onClick={() => returnTo('.about-me', undefined, undefined, 60)}> About Me </li>
                    </ul>
                </div>
                <h1 className='title'>
                    {constants.firstName} {constants.lastName}
                </h1>
                <div className="nav-list">
                    <ul>
                        <li className='nav-item hvr-grow'> Experience </li>
                        <li className='nav-item hvr-grow'> Contact </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;