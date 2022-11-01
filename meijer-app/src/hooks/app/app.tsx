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
                    <Route path="/services" element={<ServicePage/>}/>
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
