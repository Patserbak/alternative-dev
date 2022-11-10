import './phone.scss';
import PhoneExample from './iPhone.webp';
import App1 from './p1.webp';

const Phone = (): JSX.Element => {
    return (
        <div className="carouselPhone">
            <img className="carouselPhone__phone" src={PhoneExample} />
            <img id="app-1" className="carouselPhone__app" src={App1} />
        </div>
    );
}

export default Phone;