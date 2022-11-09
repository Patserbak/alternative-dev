import './test2.scss';
import { useState } from 'react';

interface Test2Props {
    classNameAdded: string;
    childrenLeft:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
    childrenRight:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
}

const Test2 = ({classNameAdded='', childrenLeft = <></>, childrenRight = <></>}: Test2Props): JSX.Element => {

    const [active, setActive] = useState<boolean>(false);

    return (
        <>
            <div className={`test2 ${classNameAdded} ${active ? "test2--active" : ""}`}>
                <div className="test2__base">
                    <div className="test2__base__left" onClick={() => { setActive(!active) }}>
                        {childrenLeft}
                    </div>
                    <div className="test2__base__right" onClick={() => setActive(!active)}>
                        {childrenRight}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Test2;
