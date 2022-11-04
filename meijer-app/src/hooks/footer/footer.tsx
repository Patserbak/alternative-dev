import './footer.scss';
import { Link } from 'react-router-dom';
import LinkedinIcon from './linkedin-icon.png';
import Icon from '../icon/icon';

interface FooterProps {
    classNameAdded: string;
    dark: boolean;
}

const Footer = ({classNameAdded = '', dark = false}: FooterProps): JSX.Element => {
    return (
        <div className={`footer ${classNameAdded} ${dark ? "footer--dark": ""}`}>
            <div className="footer__icons">
                <Link to="/"><Icon classNameAdded={`footer__icons__icon ${dark ? "icon--black" : ""}`} /></Link>
                <Link to="/about" className="header__menu__item"><img className={`footer__icons__linkedin-image ${dark ? "footer__icons__linkedin-image--dark" : ""}`} src={LinkedinIcon}/></Link>
            </div>
            <div>
                <span className="footer__copyright">© 2022 MEIJER. All rights reserved</span>
            </div>
        </div>
    );
}

export default Footer;
