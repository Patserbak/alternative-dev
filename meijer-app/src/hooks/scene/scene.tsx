import Icon from '../icon/icon';
import './scene.scss';

interface SceneProps {
    classNameAdded: string;
    children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
}

const Scene = ({ classNameAdded = '', children = <></> }: SceneProps): JSX.Element => {

    return (
        <div className={`scene ${classNameAdded}`}>
            <div className="scene__bottom">
                <div className="scene__bottom__left">
                    {children}
                </div>
                <div className="scene__bottom__right">
                </div>
            </div>
        </div >
    );
}

export default Scene;
