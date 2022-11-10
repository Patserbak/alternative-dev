import './footer.scss';
import { Link } from 'react-router-dom';
import LinkedinIcon from './linkedin-icon.png';
import Icon from '../icon/icon';

interface FooterProps {
    classNameAdded: string;
}

const Footer = ({classNameAdded = ''}: FooterProps): JSX.Element => {
    return (
        <div className={`footer ${classNameAdded}`}>
            <div className="footer__icons">
                <Link to="/" className="footer__icons__icon"><Icon /></Link>
                <Link to="/about" className="header__menu__item"><img className="footer__icons__linkedinImage" src={LinkedinIcon}/></Link>
            </div>
            <div>
                <span className="footer__copyright">© 2022 MEIJER. All rights reserved</span>
            </div>
        </div>
    );
}

export default Footer;
