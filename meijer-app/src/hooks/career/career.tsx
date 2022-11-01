import './career.scss';
import Header from '../header/header';
import Icon from '../icon/icon';
import { setDarkTheme, setLightTheme } from '../../util/util.module';

const Career = (): JSX.Element => {

    const test = true;

    setLightTheme();

    return (
        <>
            <Header classNameAdded={`header--career ${test ? "henk" : ""}`} />
            <div className="career">
                <div>
                    <Icon classNameAdded="" />
                </div>
            </div>
        </>
    );
}

export default Career;
