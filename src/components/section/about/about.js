import React from 'react'
import './about.scss'
import Header from '../../header/header';


export default function About(props) {
    return (
        <section className='about-me' data-aos="fade-down">
            <div className="wrapper">
                <div className="subheader">
                    <Header title="About Me" />
                </div>
            </div>
        </section>
    );
}