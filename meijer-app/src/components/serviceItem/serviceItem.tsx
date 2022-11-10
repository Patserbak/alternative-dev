import { useState } from 'react';
import './serviceItem.scss';

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

const ServiceItem = ({ classNameAdded = '', tile = <></>, title = <></>, text = <></> }: ServiceItemProps): JSX.Element => {

    const [active, setActive] = useState<boolean>(false);

    return (
        <div className={`serviceItem ${classNameAdded} ${active ? "serviceItem--active" : ""}`}>
            <div className={`serviceItem__tile ${active ? "serviceItem__tile--active" : ""}`} onClick={() => setActive(!active)}>
                {tile}
            </div>
            <div className={`serviceItem__text ${active ? "serviceItem__text--active" : ""}`}>
                <div className="serviceItem__text__wrapper">
                    <h2>{title}</h2>
                    <div>{text}</div>
                </div>
            </div>
        </div>
    );
}

export default ServiceItem;