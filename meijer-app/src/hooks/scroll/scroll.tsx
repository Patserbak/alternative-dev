import './scroll.scss';
import { useState, useEffect, useRef } from 'react';

// https://erikmartinjordan.com/visible-element-react

const Scroll = (): JSX.Element => {

    const hiddenRef = useRef<HTMLDivElement>(null);

    const [active, setActive] = useState<boolean>();

    useEffect(() => {

        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);

    }, []);

    const scrollHandler = () => {
        if(hiddenRef && hiddenRef.current){
            if (window.pageYOffset + window.innerHeight -50 >= hiddenRef.current.offsetTop){
            console.log(`Hidden element is now visible`);
            setActive(true);
            }
        }
    }

    return (
        <div ref = {hiddenRef} className={`scroll ${active ? "scroll--active" : ""}`}>
            Scroll!
        </div>
    );
}

export default Scroll;
