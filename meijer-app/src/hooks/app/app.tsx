import React, { useEffect, useCallback } from 'react';
import './app.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Page from './../page/page';
import Landing from './../landing/landing';
import About from './../about/about';
import ServicePage from '../servicePage/servicePage';
import Career from './../career/career';
import Contact from './../contact/contact';
import ScrollToTop from '../scrollToTop/scrollToTop';
import Test from '../test/test';
import Scene2 from '../scene2/scene2';
import Scene3 from '../scene3/scene3';

const App = (): JSX.Element => {

    // const resetHeight = useCallback(() => {
    //     document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
    // }, []);

    // useEffect(() => {
    //     document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
    //     window.addEventListener('resize', resetHeight);
    //     return () => window.removeEventListener('resize', resetHeight);
    // }, [resetHeight]);

    return (
        <>
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Page/>}>
                    <Route index element={<Landing/>} />
                    <Route path="/about" element={<About/>}/>
                    <Route path="/services" element={<Scene3/>}/>
                    <Route path="/career" element={<Career/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<Landing/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;
