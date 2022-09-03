import React, { Component } from 'react';
import "./scroll-menu.scss";
import { BsHouseDoor, BsPersonCircle, BsChatSquareText, BsJournalCode } from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { returnTo } from '../animator/returnTo';

class ScrollMenu extends Component {

    render() {
        AOS.init({
            duration: 700
        });

        return (
            <div className="scroll-menu" data-aos={this.props.dataAOS} data-aos-anchor={this.props.anchor}>
                <div className="home item hvr-grow" onClick={() => returnTo('.navbar')}>
                    <span className='tooltip'>Home</span>
                    <BsHouseDoor className='icon' />
                </div>
                <div className="item hvr-grow" onClick={() => returnTo('.about-anchor')}>
                    <span className='tooltip'>About</span>
                    <BsPersonCircle className='icon' />
                </div>
                <div className="item hvr-grow">
                    <span className='tooltip'>Resume</span>
                    <BsJournalCode className='icon' />
                </div>
                <div className="item hvr-grow">
                    <span className='tooltip'>Contact</span>
                    <BsChatSquareText className='icon' />
                </div>
            </div >
        );
    }
}


export default ScrollMenu;