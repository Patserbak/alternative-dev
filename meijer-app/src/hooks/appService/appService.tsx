import { useState } from 'react';
import './appService.scss';
import PhoneRight from '../phoneRight/phoneRight';

interface AppServiceProps {
    classNameAdded: string;
}

const AppService = ({classNameAdded = ''}: AppServiceProps): JSX.Element => {

    const [phoneActive, setPhoneActive] = useState<Boolean>(false);

    return (
        <div className={`appService ${classNameAdded}`}>
            <div className="appService__textWrapper">
                <h2>App development</h2>
                <span>Is a hybrid solution better then a native solution for your organisation?</span><br/><span>We can help you with building an App suited for your goals.</span> 
            </div>
        </div>
    );
}

export default AppService;
