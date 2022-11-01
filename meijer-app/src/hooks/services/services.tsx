import './services.scss';
import { useState } from 'react';
import Service from '../service/service';
import Phone from '../phone/phone';

const Services = (): JSX.Element => {

    const [content, setContent] = useState<number>(1);

    const content1: JSX.Element[] = [<span key="content-1">Enterprise Software</span>];
    const content2: JSX.Element[] = [<span key="content-2">Web development</span>];
    const content3: JSX.Element[] = [<span key="content-3">Cloud services</span>];
    const content4: JSX.Element[] = [<span key="content-4">Not in the list?</span>];

    const detail1: JSX.Element[] = [<span key="detail-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>];
    const detail2: JSX.Element[] = [<span key="detail-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</span>];
    const detail3: JSX.Element[] = [<span key="detail-3">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, ..</span>];
    const detail4: JSX.Element[] = [<span key="detail-4">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested</span>]

    return (
        <div>
            <div className="services__title">
                <span>What we do</span>
            </div>
            <div className="services__menu">
                {/* <Phone />
                <Service classNameAdded="" left={content1} right={detail1} />
                <div className="services__menu__border"></div> */}
                {/* <Service classNameAdded="service--left" left={content2} right={detail2} /> */}
                {/* <Service classNameAdded="" left={content3} right={detail3} />
                <div className="services__menu__border"></div>
                <Service classNameAdded="service--left" left={content4} right={detail4} /> */}
            </div>
        </div>
    );
}

export default Services;
