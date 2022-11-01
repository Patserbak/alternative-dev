import { Link } from 'react-router-dom';
import './new.scss';

interface NewProps {
    classNameAdded: string;
}

const New = ({ classNameAdded = '' }: NewProps): JSX.Element => {
    return (
        <div className={`newService ${classNameAdded}`}>
            <div className="newService__textWrapper">
                <h2>Unknown</h2>
                <span>Looking for something new in the digital domain or need advise?</span>
                <br />
            </div>
            <Link to="/contact">
                <div className="newService__contact">
                    <span>Lets talk</span>
                    <span></span>
                </div>
            </Link>
        </div >
    );
}

export default New;