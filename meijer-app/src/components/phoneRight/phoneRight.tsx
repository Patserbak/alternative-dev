import './phoneRight.scss';
import { useState } from 'react';

interface PhoneRightProps {
    classNameAdded: string;
    messageScreen:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
    overview: boolean;
}

const PhoneRight = ({ classNameAdded = '', messageScreen = <></>, overview = false }: PhoneRightProps): JSX.Element => {

    return (
        <div className={`phoneRight ${classNameAdded}`}>
            <div className="phoneRight__base">
                <div className={`phoneRight__base__screen ${overview ? "phoneRight__base__screen--overview" : "phoneRight__base__screen--basic"}`} >
                    <div className={`phoneRight__base__screen__cameraTop ${!overview ? "phoneRight__base__screen__cameraTop--basic" : ""}`}>
                    </div>
                    <div className="phoneRight__base__screen__messageScreen">
                        {messageScreen}
                    </div>
                </div>
                <div className={`phoneRight__base__charger ${overview ? "phoneRight__base__charger--overview" : "phoneRight__base__charger--basic"}`}>
                </div>
                <div className={`phoneRight__base__volume-1 ${overview ? "phoneRight__base__volume-1--overview" : "phoneRight__base__volume-1--basic"}`}>
                </div>
                <div className={`phoneRight__base__volume-2 ${overview ? "phoneRight__base__volume-2--overview" : "phoneRight__base__volume-2--basic"}`}>
                </div>
            </div>
        </div>
    );
}

export default PhoneRight;
