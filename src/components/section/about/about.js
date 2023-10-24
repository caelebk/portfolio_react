import React from 'react'
import './about.scss'
import AboutMeSection from './aboutMe/aboutMeSection';
import * as constants from '../../constants/constants';

export default function About(props) {
    const traits = constants.traits;

    return (
        <section
            className='about'
            data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <div className="about-context-container">
                <div className='about-context'>
                    <ul className='about-list'>
                        <li className='about-list-item'><span className='highlight'>let</span> caeleb = <span className='highlight'>new</span> Caeleb();</li>
                        {
                            traits.map(trait => {
                                return (
                                    <li className='about-list-item' key={trait.trait}>{trait.trait}
                                        <ul className='about-list'>
                                            <li className='about-list-item'>
                                                <span className='highlight'>{trait.value}</span>
                                            </li>
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='about-anchor'></div>
            <AboutMeSection title="About Me:" content={constants.aboutMeContext} />
        </section>
    );
}