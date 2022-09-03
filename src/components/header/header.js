import { React, useRef, useEffect, useState } from 'react';
import './header.scss';

export default function Header(props) {
    const ref = useRef(null);
    const [isVisible, setVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setVisible(entry.isIntersecting);
        });

        if (isVisible) {
            setTimeout(() => document.querySelector('.line').classList.add('transition'), 1000);
        } else {
            if (document.querySelector('.line').classList.contains('transition')) {
                document.querySelector('.line').classList.remove('transition');
            }
        }

        if (ref.current) observer.observe(ref.current);
    })


    return (
        <div className="header">
            <span className="section-title"> {props.title}</span>
            <div className="line" ref={ref}></div>
        </div>
    );
}

