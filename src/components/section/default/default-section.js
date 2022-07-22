import React from 'react';
import '../section.scss';
import { addAnimation } from '../../animator/animator';

export default function DefaultSection(props) {
    addAnimation(document.querySelector('.default'), 'zoomIn');
    addAnimation(document.querySelector('.default'), 'delay-4s');

    return (
        <section className='default'>
            <hr />
            <div className="wrapper" style={props.specificStyle}>
                <div className='subtitle'>{props.content}</div>
            </div>
            <hr />
        </section>
    );
}