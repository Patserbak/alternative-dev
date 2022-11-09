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
                <div className="career__wrapper">
                    <div className="career__wrapper__bottom">
                        <div className="career__wrapper__bottom__left">
                        </div>
                        <div className="career__wrapper__bottom__right">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Career;
