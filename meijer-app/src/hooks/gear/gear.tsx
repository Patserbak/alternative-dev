import './gear.scss';
import { useState } from 'react';

interface GearProps {
    classNameAdded: string;
}

const Gear = ({ classNameAdded = ''}: GearProps): JSX.Element => {

    const [active, setActive] = useState<Boolean>(false);

    return (
        <div className={`gear ${classNameAdded}`}>
            <div className="gear__parent-1">
                <div className="gear__parent-1__gear-1">
                    <div className="gear__parent-1__gear-1__center-1"></div>
                    <div className="gear__parent-1__gear-1__tooth-1"></div>
                    <div className="gear__parent-1__gear-1__tooth-1"></div>
                    <div className="gear__parent-1__gear-1__tooth-1"></div>
                    <div className="gear__parent-1__gear-1__tooth-1"></div>
                </div>
            </div>
            <div className="gear__parent-2">
                <div className="gear__parent-2__gear-2">
                    <div className="gear__parent-2__gear-2__center-2"></div>
                    <div className="gear__parent-2__gear-2__tooth-2"></div>
                    <div className="gear__parent-2__gear-2__tooth-2"></div>
                    <div className="gear__parent-2__gear-2__tooth-2"></div>
                    <div className="gear__parent-2__gear-2__tooth-2"></div>
                </div>
            </div>
        </div>
    );
}

export default Gear;
