import './career.scss';
import Header from '../header/header';
import { setDarkTheme, setLightTheme } from '../../util/util.module';
import Icon from '../icon/icon';

const Career = (): JSX.Element => {

    setLightTheme();

    return (
        <>
            <Header classNameAdded="" />
            <div className="career">
                <div className="career__text">
                    <h1>Can You Hack?</h1>
                    <a href="mailto:hack@meijer.com">hack@meijer.com</a>
                </div>
                <div className="career__wrapper">
                    <Icon classNameAdded="" />
                </div>
            </div>
        </>
    );
}

export default Career;
