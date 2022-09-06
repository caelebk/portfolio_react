import React from 'react';
import './resume.scss';


export default function Resume() {
    return (
        <section className="resume">
            <div className="resume-container" data-aos="zoom-in">
                <div className="line" data-aos="expand"></div>
                <a href="https://drive.google.com/file/d/1peh2pBIg4T_2DWMbwP--sVwo1OncvvPa/view?usp=sharing" rel="noreferrer" target="_blank" className='resume-link'> Resume </a>
                <div className="line"></div>
            </div>
        </section>
    );
}