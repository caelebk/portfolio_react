import React from 'react'
import './about.scss'
import DefaultSection from '../default/default-section';
import * as constants from '../../constants/constants';

export default function About(props) {
    const traits = constants.traits;

    return (
        <section
            className='about'
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-anchor-placement="top-center">
            <div className="about-title-container">
                <h1 className="about-title">
                    Fun Facts About Me:
                </h1>
            </div>
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
            <DefaultSection title="About Me:" content={constants.aboutMeContext} />
        </section>
    );
}