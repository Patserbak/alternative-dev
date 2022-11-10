import './career.scss';
import Header from '../header/header';
import Icon from '../icon/icon';

const Career = (): JSX.Element => {

    return (
        <>
            <Header classNameAdded="" />
            <div className="career">
                <div className="career__text">
                    <h1>Can You Code?</h1>
                    <a href="mailto:code@meijer.com">code@meijer.com</a>
                </div>
                <div className="career__wrapper">
                    <Icon />
                </div>
            </div>
        </>
    );
}

export default Career;
