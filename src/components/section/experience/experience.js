import React from 'react';
import './experience.scss';
import { BsGithub } from 'react-icons/bs';

export default function Experience(props) {
    const experienceList = props.experiences;
    return (
        <section className='experience' data-aos="fade-up" data-aos-anchor-placement={props.anchor}>
            <div className="experience-header">
                <h1 className="experience-title">{props.title}</h1>
            </div>
            <div className="experience-container">
                <ul className='experience-list'>
                    {
                        experienceList.map((job) => {
                            return (
                                <li className='experience-item' data-aos="fade-up" key={job.company} data-aos-anchor-placement='top-bottom'>
                                    <div className="job-header-container">
                                        <div className="job-header">
                                            <span className='job-title'>{job.title}</span>
                                            {Boolean(job?.company) ?
                                                (
                                                    <span className="job-company">
                                                        <span className='highlight'> | </span>
                                                        {job.company}
                                                    </span>
                                                ) : undefined
                                            }
                                            {Boolean(job?.git) ? (<a href={job.git} target='_blank' rel='noreferrer' className='link'><BsGithub className='icon hvr-grow' /></a>) : undefined}
                                        </div>
                                        <span className="job-date">
                                            {job.date}
                                        </span>
                                    </div>
                                    <div className="tech-container">
                                        <span className="tech-title highlight">Tech/Languages:</span>
                                        <span className='tech'> {job.tech}</span>
                                    </div>
                                    <div className="job-container">
                                        <ul className="job-list">
                                            {
                                                job.achievements.map((achievement) => {
                                                    return (
                                                        <li className='job-item' key={achievement} data-aos='fade-up' data-aos-anchor-placement='center-bottom'>
                                                            {achievement}
                                                        </li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </section>
    );
}