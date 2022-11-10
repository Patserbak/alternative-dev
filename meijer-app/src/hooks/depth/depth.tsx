import './depth.scss';

interface DepthProps {
    floor: JSX.Element;
    wallLeft: JSX.Element;
    wallRight: JSX.Element;
}


const Depth = ({floor = <></>, wallLeft = <></>, wallRight=<></>}): JSX.Element => {

    return (
        <div className="depth">
            <div className="depth__floor">
                {floor}
            </div>
            <div className="depth__wallLeft">
                {wallLeft}
            </div>
            <div className="depth__wallRight">
                {wallRight}
            </div>
        </div>
    );
}

export default Depth;
