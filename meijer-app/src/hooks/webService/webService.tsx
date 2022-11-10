import './webService.scss';
import { useState } from 'react';
import PcWindow from '../pcWindow/pcWindow';
import Gear from '../gear/gear';

interface WebServiceProps {
    classNameAdded: string;
}

const WebService = ({classNameAdded = ''}: WebServiceProps): JSX.Element => {

    const gear = <div className="webService__gearWrapper"><Gear classNameAdded=""/></div>

    return (
        <div className={`webService ${classNameAdded}`}>
            <div className="webService__textWrapper">
                <h2>Do you need help with builidng your website?</h2>
                <span>We build can build your website using technologies such as PHP or React.</span> 
            </div>
        </div>
    );
}

export default WebService;