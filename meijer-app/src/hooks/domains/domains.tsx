import './domains.scss';
import { useState } from 'react';
import Cloud from '../cloud/cloud';
import Gear from '../gear/gear';
import PcWindow from '../pcWindow/pcWindow';
import PhoneLeft from '../phoneLeft/phoneLeft';

const Domains = ({ }): JSX.Element => {

    const [active, setActive] = useState<number>(0);

    return (
        <>
        <div className="domains">
            <div className={`domains__domain-1 ${active === 1 ? "domains--active" : ""}`} onMouseEnter={() => setActive(1)}>
                <PcWindow elements={<></>} />
                <div><span>Web Development</span></div>
            </div>
            <div className={`domains__domain-2 ${active === 2 ? "domains--active" : ""}`} onMouseEnter={() => setActive(2)}>
                <PhoneLeft classNameAdded="phoneLeft--rotated phoneLeft--green" messageScreen={<></>} explode={false} />
                <div><span>App Development</span></div>
            </div>
            <div className={`domains__domain-3 ${active === 3 ? "domains--active" : ""}`} onMouseEnter={() => setActive(3)}>
                <Cloud />
                <div><span>Cloud Services</span></div>
            </div>
            <div className={`domains__domain-4 ${active === 4 ? "domains--active" : ""}`} onMouseEnter={() => setActive(4)}>
                <Gear classNameAdded="" />
                <div><span>Enterprise Software</span></div>
            </div>
            <div className={`domains__domain-5 ${active === 5 ? "domains--active" : ""}`} onMouseEnter={() => setActive(5)}>
                <span>&#63;</span>
                <div><span>Something different</span></div>
            </div>
        </div>
        </>
    );
}

export default Domains;
