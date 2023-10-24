import React from 'react';
import './resume.scss';
import { BsFillPersonLinesFill } from 'react-icons/bs'


export default function Resume() {
    return (
        <section className="resume">
            <a className="resume-container hvr-hang" 
                data-aos='fade-up'
                href="https://drive.google.com/file/d/1p8rY3Q4PFVN7xAMTLRUK4J3IBd5x33MX/view?usp=sharing"
                rel="noreferrer"
                target="_blank">
                <BsFillPersonLinesFill className='icon' />
                    Resume
            </a>
        </section>
    );
}