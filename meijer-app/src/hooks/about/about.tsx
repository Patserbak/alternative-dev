import './about.scss';
import { useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import PhoneLeft from '../phoneLeft/phoneLeft';
import Gear from '../gear/gear';
import FadeIn from '../fadeIn/fadeIn';
import { setLightTheme } from '../../util/util.module';

const About = (): JSX.Element => {

    setLightTheme();

    const [phoneActive, setPhoneActive] = useState<boolean>(false);

    const messageScreen = <div className={`about__wrapper__phone__messageScreen ${phoneActive ? "about__wrapper__phone__messageScreen--active" : ""}`}><Gear classNameAdded='' /></div>;

    return (
        <>
            <Header classNameAdded="header--about" />
            <div className="about">
                <FadeIn argPropActive={true} setPropActive={setPhoneActive}>
                    <div className="about__wrapper">
                        <div className="about__wrapper__text">
                            <h1>No fancy words here</h1>
                            <span>We respect the planet and the people that live on it.</span>
                            <span> AND we push technology to it's limits.</span>
                        </div>
                        <div className="about__wrapper__phone">
                            <PhoneLeft classNameAdded="phoneLeft--red" messageScreen={messageScreen} explode={!phoneActive} />
                        </div>
                    </div>
                </FadeIn>
            </div>
            <Footer classNameAdded="" dark={false} />
        </>
    );
}

export default About;
