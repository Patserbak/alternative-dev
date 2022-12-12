import './login.scss';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../authContext/authContext';
import { useNavigate } from 'react-router-dom';


const Login = (): JSX.Element => {

    const navigate = useNavigate();
    const { user, loginGoogle } = useContext(AuthContext);

    const loginToGoogle = () => {
        loginGoogle();
    }

    useEffect(() => {
        if (user !== null) {
            navigate("/");
        }
    }, []);

    return (
        <>
            {user === null
                &&
                <div className="login">
                    <button className="login__button" onClick={() => loginToGoogle()}>
                        @Mark
                    </button>
                </div>
            }
        </>
    );
}

export default Login;
