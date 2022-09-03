import React from 'react'
import './about.scss'
import Header from '../../header/header';


export default function About(props) {
    return (
        <section
            className='about'
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay='3000'>
            <div className="about-context-container">
                <div className="about-title">
                    <Header title="About Me" />
                </div>
                <div className='about-context'>
                    <ul className='about-list'>
                        <li className='about-list-item'><span className='highlight'>let</span> caeleb = <span className='highlight'>new</span> Caeleb();</li>
                        <li className='about-list-item'>caeleb.ethnicity
                            <ul className='about-list'>
                                <li className='about-list-item'>
                                    <span className='highlight'>'Indonesian'</span>
                                </li>
                            </ul>
                        </li>
                        <li className='about-list-item'>caeleb.age
                            <ul className='about-list'>
                                <li className='about-list-item'>
                                    <span className='highlight'>'21 years old'</span>
                                </li>
                            </ul>
                        </li>
                        <li className='about-list-item'>caeleb.favoriteFood
                            <ul className='about-list'>
                                <li className='about-list-item'>
                                    <span className='highlight'>'Spaghetti Bolognese'</span>
                                </li>
                            </ul>
                        </li>
                        <li className='about-list-item'>caeleb.favoriteMovie
                            <ul className='about-list'>
                                <li className='about-list-item'>
                                    <span className='highlight'>'Back to the Future 2'</span>
                                </li>
                            </ul>
                        </li>
                        <li className='about-list-item'>caeleb.hobbies
                            <ul className='about-list'>
                                <li className='about-list-item'>
                                    <span className='highlight'>['weightlifting', 'gaming', 'programming', 'eating']</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}