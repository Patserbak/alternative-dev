import './phoneLeft.scss';
import { useState } from 'react';

interface PhoneLeftProps {
    classNameAdded: string;
    messageScreen:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
    overview: boolean;
}

const PhoneLeft = ({ classNameAdded = '', messageScreen = <></>, overview = false }: PhoneLeftProps): JSX.Element => {

    return (
        <div className={`phoneLeft ${classNameAdded}`}>
            <div className="phoneLeft__base">
                <div className={`phoneLeft__base__screen ${overview ? "phoneLeft__base__screen--overview" : "phoneLeft__base__screen--basic"}`} >
                    <div className={`phoneLeft__base__screen__cameraTop ${!overview ? "phoneLeft__base__screen__cameraTop--basic" : ""}`}>
                    </div>
                    <div className="phoneLeft__base__screen__messageScreen">
                        {messageScreen}
                    </div>
                </div>
                <div className={`phoneLeft__base__charger ${overview ? "phoneLeft__base__charger--overview" : "phoneLeft__base__charger--basic"}`}>
                </div>
                <div className={`phoneLeft__base__volume-1 ${overview ? "phoneLeft__base__volume-1--overview" : "phoneLeft__base__volume-1--basic"}`}>
                </div>
                <div className={`phoneLeft__base__volume-2 ${overview ? "phoneLeft__base__volume-2--overview" : "phoneLeft__base__volume-2--basic"}`}>
                </div>
            </div>
        </div>
    );
}

export default PhoneLeft;
