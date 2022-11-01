import { useEffect, useRef, useState } from 'react';
import './fadeIn.scss';

interface FadeInProps {
    argPropActive: any,
    setPropActive: (arg: any) => void,
    children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
};

const FadeIn = ({ argPropActive = null, setPropActive = () => { }, children }: FadeInProps): JSX.Element => {

    const [active, setActive] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    }

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPropActive(argPropActive);
                setActive(true);
                observer.unobserve(ref.current!);
            }
        }, options);

        observer.observe(ref.current!);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div ref={ref} className={`fadeIn ${active ? 'fadeIn--active' : ''}`}>
                {children}
            </div>
        </>
    );
}

export default FadeIn;