import './serviceCaroussel.scss';
import { useState } from 'react';
import Cloud from '../cloud/cloud';
import Gear from '../gear/gear';
import PcWindow from '../pcWindow/pcWindow';
import PhoneLeft from '../phoneLeft/phoneLeft';

const ServiceCaroussel = (): JSX.Element => {

    const [active, setActive] = useState<boolean>(false);

    return (
        <>
            <div className="serviceCaroussel">
                <input type="radio" name="DoesNotWorkWhitoutStr" id="slide-1" />
                <input type="radio" name="DoesNotWorkWhitoutStr" id="slide-2" />
                <input type="radio" name="DoesNotWorkWhitoutStr" id="slide-3" />
                <input type="radio" name="DoesNotWorkWhitoutStr" id="slide-4" />
                <input type="radio" name="DoesNotWorkWhitoutStr" id="slide-5" />
                <div className="serviceCaroussel__wrapper">
                    <div id="line-1" className="serviceCaroussel__wrapper__line"></div>
                    <div id="line-2" className="serviceCaroussel__wrapper__line"></div>
                    <div id="line-3" className="serviceCaroussel__wrapper__line"></div>
                    <div id="line-4" className="serviceCaroussel__wrapper__line"></div>
                    <div id="line-5" className="serviceCaroussel__wrapper__line"></div>
                    <label className="serviceCaroussel__wrapper__enterpriseSoftware" htmlFor="slide-1" id="item-1">
                        <Gear classNameAdded="" />
                    </label>
                    <label className="serviceCaroussel__wrapper__cloudServices" htmlFor="slide-2" id="item-2">
                        <Cloud />
                    </label>
                    <label className="serviceCaroussel__wrapper__webDevelopment" htmlFor="slide-3" id="item-3">
                        <PcWindow elements={<></>} />
                    </label>
                    <label className="serviceCaroussel__wrapper__appDevelopment" htmlFor="slide-4" id="item-4">
                        <PhoneLeft classNameAdded="phoneLeft--rotated phoneLeft--purple" messageScreen={<></>} explode={false} />
                    </label>
                    <label className="serviceCaroussel__wrapper__unknown" htmlFor="slide-5" id="item-5">
                        <span>&#63;</span>
                    </label>
                    <div id="topic-1">
                        Enterprise Software
                    </div>
                    <div id="topic-2">
                        Cloud Services
                    </div>
                    <div id="topic-3">
                        Web
                    </div>
                    <div id="topic-4">
                        Apps
                    </div>
                    <div id="topic-5">
                        Unknown
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceCaroussel;
