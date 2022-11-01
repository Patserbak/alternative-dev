import React from 'react';
import './page.scss';
import { Outlet } from 'react-router-dom';

const Page = (): JSX.Element => {
    return (
        <div className="page">
            <Outlet/>
        </div>
    );
}

export default Page;
