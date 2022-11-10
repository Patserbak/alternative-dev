import './phoneRight.scss';
import { useState } from 'react';

interface PhoneRightProps {
    classNameAdded: string;
    messageScreen: JSX.Element;
    explode: boolean;
}

const PhoneRight = ({ classNameAdded = '', messageScreen = <></>, explode = false }: PhoneRightProps): JSX.Element => {

    return (
        <div className={`phoneRight ${classNameAdded}`}>
            <div className="phoneRight__base">
                <div className={`phoneRight__base__screen ${explode ? "phoneRight__base__screen--explode" : "phoneRight__base__screen--basic"}`} >
                    <div className={`phoneRight__base__screen__cameraTop ${!explode ? "phoneRight__base__screen__cameraTop--basic" : ""}`}>
                    </div>
                    <div className="phoneRight__base__screen__messageScreen">
                        {messageScreen}
                    </div>
                </div>
                <div className={`phoneRight__base__charger ${explode ? "phoneRight__base__charger--explode" : "phoneRight__base__charger--basic"}`}>
                </div>
                <div className={`phoneRight__base__volume-1 ${explode ? "phoneRight__base__volume-1--explode" : "phoneRight__base__volume-1--basic"}`}>
                </div>
                <div className={`phoneRight__base__volume-2 ${explode ? "phoneRight__base__volume-2--explode" : "phoneRight__base__volume-2--basic"}`}>
                </div>
            </div>
        </div>
    );
}

export default PhoneRight;
