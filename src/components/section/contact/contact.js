import React from 'react'
import './contact.scss'
import * as constants from '../../constants/constants';
import { BsFillEnvelopeFill, BsLinkedin, BsGithub } from 'react-icons/bs'

export default function Contact(props) {
    return (
        <section className="contact">
            <div className="line" data-aos="expand" data-aos-anchor-placement='center-bottom'></div>
            <div className="contact-header" data-aos="fade-up" data-aos-anchor-placement='center-bottom'>
                <h1 className="contact-title">Contact Me:</h1>
            </div>
            <div className="contact-list-container">
                <div className="contact-list">
                    <a className="contact-item contact-email hvr-hang"
                        data-aos='flip-right'
                        data-aos-anchor-placement='center-bottom'
                        href='mailto: caelebkoharjo@gmail.com'>
                        <span className="contact-image">
                            <BsFillEnvelopeFill className='icon' />
                        </span>
                        <span className="contact-info">
                            {constants.email}
                        </span>
                    </a>
                    <a className="contact-item contact-linkedin hvr-hang"
                        data-aos='flip-right'
                        data-aos-anchor-placement='center-bottom'
                        href='https://www.linkedin.com/in/caeleb-koharjo-709174190/'
                        target='_blank'
                        rel='noreferrer'>
                        <span className="contact-image">
                            <BsLinkedin className='icon' />
                        </span>
                        <span className="contact-info">
                            {constants.firstName + ' ' + constants.lastName}
                        </span>
                    </a>
                    <a className="contact-item contact-github hvr-hang"
                        data-aos='flip-right'
                        data-aos-anchor-placement='center-bottom'
                        href='https://github.com/caelebk'
                        target='_blank'
                        rel='noreferrer'>
                        <span className="contact-image">
                            <BsGithub className='icon' />
                        </span>
                        <span className="contact-info">
                            {constants.github}
                        </span>
                    </a>
                </div>
            </div>
            <div className="line" data-aos="expand" data-aos-anchor-placement="top-bottom"></div>
        </section>
    )
}