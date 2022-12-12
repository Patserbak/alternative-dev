import './landing.scss';
import { useContext } from 'react';
import { AuthContext } from '../authContext/authContext';

const Landing = (): JSX.Element => {

    const { user } = useContext(AuthContext);

    return (
        <div className="landing">
            <h1>User print</h1>
            <div className="landing__user">
                <div>{JSON.stringify(user, null, 4)}</div>
            </div>
        </div>
    );
}

export default Landing;
