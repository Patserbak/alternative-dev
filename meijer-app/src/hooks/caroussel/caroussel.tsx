import './caroussel.scss';
import { useEffect, useState } from 'react';
 
const Caroussel = (): JSX.Element => {

    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className={`caroussel ${checked ? "caroussel--active" : ""}`} onMouseEnter={() => setChecked(true)}>
            <input type="radio" name="DoesNotWorkWhitoutStr" id="slide-1" />
            <input type="radio" name="DoesNotWorkWhitoutStr" id="slide-2" />
            <input type="radio" name="DoesNotWorkWhitoutStr" id="slide-3" />
            <input type="radio" name="DoesNotWorkWhitoutStr" id="slide-4" />
            <input type="radio" name="DoesNotWorkWhitoutStr" id="slide-5" />
            <div className="caroussel__labels">
                <label className="caroussel__labels__label" htmlFor="slide-1" id="item-1">
                    <img src="https://source.unsplash.com/random/?city,night"
                        alt="item-1" />
                </label>
                <label className="caroussel__labels__label" htmlFor="slide-2" id="item-2">
                    <img src="https://source.unsplash.com/random/?horse"
                        alt="item-2" />
                </label>
                <label className="caroussel__labels__label" htmlFor="slide-3" id="item-3">
                    <img src="https://source.unsplash.com/random/?hummer"
                        alt="item-3" />
                </label>
                <label className="caroussel__labels__label" htmlFor="slide-4" id="item-4">
                    <img src="https://source.unsplash.com/random/?UK"
                        alt="item-4" />
                </label>
                <label className="caroussel__labels__label" htmlFor="slide-5" id="item-5">
                    <img src="https://source.unsplash.com/random/?tank"
                        alt="item-5" />
                </label>
            </div>
        </div>
    );
}

export default Caroussel;
