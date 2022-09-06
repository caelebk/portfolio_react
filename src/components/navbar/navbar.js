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
        addAnimation(document.querySelector('.nav-title'), 'bounceInDown');
        addAnimation(document.querySelector('.nav-title'), 'delay-1s');
    }

    render() {

        window.addEventListener('load', () => {
            this.animateTitle();
        });

        return (
            <nav className='navbar'>
                <div className="nav-list">
                    <ul>
                        <li className='nav-item hvr-grow'><a className="blank" href="./"> Home </a></li>
                        <li className='nav-item hvr-grow' onClick={() => returnTo('.about-anchor', undefined, undefined, 0)}> About Me </li>
                    </ul>
                </div>
                <h1 className='nav-title'>
                    {constants.firstName} {constants.lastName}
                </h1>
                <div className="nav-list">
                    <ul>
                        <li className='nav-item hvr-grow' onClick={() => returnTo('.experience-anchor', undefined, undefined, 0)}> Experience </li>
                        <li className='nav-item hvr-grow'> Contact </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;