import './career.scss';
import Header from '../header/header';
import Icon from '../icon/icon';
import { setDarkTheme, setLightTheme } from '../../util/util.module';
import { useEffect, useRef, useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';

const Career = (): JSX.Element => {

    setLightTheme();

    return (
        <>
            <Header classNameAdded="" />
            <div className="career">
                <Icon classNameAdded="" />
            </div>
        </>
    );
}

export default Career;
