import { useState } from 'react';
import './serviceItem2.scss';

interface ServiceItemProps {
    classNameAdded: string;
    tile:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
    title:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
    text:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
}

const ServiceItem2 = ({ classNameAdded = '', tile = <></>, title = <></>, text = <></> }: ServiceItemProps): JSX.Element => {

    const [active, setActive] = useState<boolean>(false);

    return (
        <div className={`serviceItem2 ${classNameAdded} ${active ? "serviceItem2--active" : ""}`}>
            <div className={`serviceItem2__tile ${active ? "serviceItem2__tile--active" : ""}`} onClick={() => setActive(!active)}>
                {tile}
            </div>
            <div className={`serviceItem2__text ${active ? "serviceItem2__text--active" : ""}`}>
                <div className="serviceItem2__text__wrapper">
                    <h2>{title}</h2>
                    <div>{text}</div>
                </div>
            </div>
        </div>
    );
}

export default ServiceItem2;