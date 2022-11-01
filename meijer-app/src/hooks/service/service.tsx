import './service.scss';
import { useState } from 'react';

interface ServiceProps {
    classNameAdded: string;
    left: JSX.Element[];
    right: JSX.Element[];
}

const Service = ({ classNameAdded = '', left = [], right = [] }: ServiceProps): JSX.Element => {

    const [active, setActive] = useState<boolean>(false);

    return (
        <div className={`service ${classNameAdded}`} onMouseEnter={() => setActive(true)}>
            <div className="service__left">{left}</div>
            <div className={`service__right ${active ? "service__right--active" : ""}`}>
                {right}
            </div>
        </div>
    );
}

export default Service;
