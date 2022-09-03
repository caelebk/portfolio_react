import React from 'react';
import './introduction.scss';
import profile from './profile.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Introduction(props) {
    AOS.init();
    return (
        <section className='introduction'>
            <div className="container">
                <div className="img-wrapper">
                    <img src={profile} alt='Me' className='photo' data-aos="fade-down-right" data-aos-delay='2000' />
                </div>
                <div className="intro-content-wrapper" data-aos='fade-left' data-aos-delay='2000'>
                    <h1 className='intro-title'> Hey! I'm <span className='highlight'>Caeleb</span>, </h1>
                    <h2 className='intro-content'>
                        <ul>
                            <li>A <span className="highlight">Computer Science Major</span> at the <span className="highlight">University of British Columbia</span>.</li>
                            <li>An aspiring <span className="highlight">Software Engineer</span>.</li>
                            <li>Located in <span className='highlight'>Vancouver, BC</span>.</li>
                        </ul>
                    </h2>
                </div>
            </div>
        </section>
    );
}