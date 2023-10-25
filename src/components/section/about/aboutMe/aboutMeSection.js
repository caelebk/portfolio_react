import { React } from 'react';
import './aboutMeSection.scss';

export default function AboutMeSection(props) {

    return (
        <section className='aboutMeSection' data-aos="zoom-in" data-aos-anchor-placement="top-center">
            <div className='title-container'>
                <h1 className='section-title'>
                    {props.title}
                </h1>
            </div>
            <div className="text-container container">
                <ul className='content'>
                    {props.content.map((content) => {
                        return (<p>{content}</p>);
                    })}
                </ul>
            </div>
        </section>
    );
}