import { React } from 'react';
import './section.scss';

export default function DefaultSection(props) {

    return (
        <section className='default'>
            <div className='line' data-aos="expand"></div>
            <div className='title-container'>
                <h1 className='section-title'>
                    {props.title}
                </h1>
            </div>
            <div className="text-container container">
                <p className='content'>
                    {props.content}
                </p>
            </div>
            <div className='line' data-aos="expand"></div>
        </section>
    );
}