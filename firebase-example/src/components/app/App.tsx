import React from 'react';
import './app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../scrollToTop/scrollToTop';
import Page from '../page/page';
import Landing from '../landing/landing';
import AuthProvider from '../authContext/authContext';
import AuthRoute from '../authRoute/authRoute';
import Login from '../login/login';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Page />}>
            <Route index element={<AuthRoute><Landing /></AuthRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<AuthRoute><Landing /></AuthRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
