import './pcWindow.scss';

interface PcWindowProps {
    elements: JSX.Element;
}

const PcWindow = ({elements = <></>} : PcWindowProps): JSX.Element => {
    return (
        <div className="pcWindow">
            <div className="pcWindow__bar">
                <div id="icon-1" className=""></div>
                <div id="icon-2" className=""></div>
                <div id="icon-3" className=""></div>
            </div>
            <div className="pcWindow__window">{elements}</div>
        </div>
    );
}

export default PcWindow;
