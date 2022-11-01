import { useState } from 'react';
import './letsTalk.scss';
import { Link } from 'react-router-dom';

const LetsTalk = (): JSX.Element => {

    const [hover, setHover] = useState<boolean>(false);

    return (
        <Link to="/contact" className="letsTalk" onMouseEnter={e => setHover(true)}>
                <span className="letsTalk__sentence-1">Interested?</span>
                <span className={`letsTalk__sentence-2 ${hover ? "letsTalk__sentence-2-visible" : ""}`}>Lets talk.</span>
        </Link>
    );
}

export default LetsTalk;
