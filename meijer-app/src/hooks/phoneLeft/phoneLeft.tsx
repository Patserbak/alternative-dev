import './phoneLeft.scss';
import { useState } from 'react';

interface PhoneLeftProps {
    classNameAdded: string;
    messageScreen: JSX.Element;
    explode: boolean;
}

const PhoneLeft = ({ classNameAdded = '', messageScreen = <></>, explode = false }: PhoneLeftProps): JSX.Element => {

    return (
        <div className={`phoneLeft ${classNameAdded}`}>
            <div className="phoneLeft__base">
                <div className={`phoneLeft__base__screen ${explode ? "phoneLeft__base__screen--explode" : "phoneLeft__base__screen--basic"}`} >
                    <div className={`phoneLeft__base__screen__cameraTop ${!explode ? "phoneLeft__base__screen__cameraTop--basic" : ""}`}>
                    </div>
                    <div className="phoneLeft__base__screen__messageScreen">
                        {messageScreen}
                    </div>
                </div>
                <div className={`phoneLeft__base__charger ${explode ? "phoneLeft__base__charger--explode" : "phoneLeft__base__charger--basic"}`}>
                </div>
                <div className={`phoneLeft__base__volume-1 ${explode ? "phoneLeft__base__volume-1--explode" : "phoneLeft__base__volume-1--basic"}`}>
                </div>
                <div className={`phoneLeft__base__volume-2 ${explode ? "phoneLeft__base__volume-2--explode" : "phoneLeft__base__volume-2--basic"}`}>
                </div>
            </div>
        </div>
    );
}

export default PhoneLeft;
