import './about.scss';
import { useRef, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import PhoneLeft from '../phoneLeft/phoneLeft';
import Gear from '../gear/gear';
import PhoneRight from '../phoneRight/phoneRight';
import useIntersectionObserver from '../intersectionObserver/intersectionObserver';

const About = (): JSX.Element => {

    var optionsObserver = {
        threshold: 0.1,
        root: null,
        rootMargin: '0%',
        freezeOnceVisible: true
    }

    const phoneRef = useRef<HTMLDivElement | null>(null);
    const phoneEntry = useIntersectionObserver(phoneRef, optionsObserver); 

    const messageScreen = <div className={`about__wrapper__phone__messageScreen ${phoneEntry?.isIntersecting ? "about__wrapper__phone__messageScreen--active" : ""}`}><Gear classNameAdded='' /></div>;

    return (
        <>
            <Header classNameAdded="header--about" />
            <div className="about">
                    <div className="about__wrapper">
                        <div className="about__wrapper__text">
                            <h1>No fancy words here</h1>
                            <span>We respect the planet and the people that live on it.</span>
                            <span> AND we push technology to it's limits.</span>
                        </div>
                        <div ref={phoneRef} className="about__wrapper__phone">
                            <PhoneRight classNameAdded="phoneRight--active phoneRight--red" messageScreen={messageScreen} overview={false} />
                        </div>
                    </div>
            </div>
            <Footer classNameAdded="" />
        </>
    );
}

export default About;
