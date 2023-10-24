import React from 'react';
import './resume.scss';
import { BsFillPersonLinesFill } from 'react-icons/bs'


export default function Resume() {
    return (
        <section className="resume">
            <div className="resume-container" data-aos='fade-up'>
                <BsFillPersonLinesFill className='icon highlight' />
                <a href="https://drive.google.com/file/d/1p8rY3Q4PFVN7xAMTLRUK4J3IBd5x33MX/view?usp=sharing"
                    rel="noreferrer"
                    target="_blank"
                    className='resume-link hvr-hang'>
                    Resume
                </a>
            </div>
        </section>
    );
}