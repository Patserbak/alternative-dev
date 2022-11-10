import React from 'react';
import './app.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ScrollToTop from '../scrollToTop/scrollToTop';
import Page from '../page/page';
import Landing from '../landing/landing';
import About from '../about/about';
import Career from '../career/career';
import Contact from '../contact/contact';
import Services from '../services/services';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
