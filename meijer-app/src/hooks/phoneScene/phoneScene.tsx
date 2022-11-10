import './phoneScene.scss';
import { useState } from 'react';

interface phoneSceneProps {
    elements: JSX.Element;
}

const PhoneScene = ({ elements = <></> }: phoneSceneProps): JSX.Element => {

    const [active, setActive] = useState<boolean>(false);

    return (
            <div className={`phoneScene ${active ? "phoneScene--active" : ""}`} onMouseEnter={() => setActive(true)}>
                <div className="phoneScene__base">
                    <div className="phoneScene__base__screen">
                    </div>
                    <div className="phoneScene__base__camera-top">
                    </div>
                    <div className="phoneScene__base__microphone">
                    </div>
                    <div className="phoneScene__base__charger">
                    </div>
                    <div className="phoneScene__base__volume-1">
                    </div>
                    <div className="phoneScene__base__volume-2">
                    </div>
                    <div className="phoneScene__base__message">
                        {elements}
                    </div>
                </div>
            </div>
    );
}

export default PhoneScene;
