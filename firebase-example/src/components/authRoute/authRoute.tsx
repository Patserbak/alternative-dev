import { useContext } from 'react';
import { AuthContext } from '../authContext/authContext';
import { Navigate } from 'react-router-dom';

interface AuthRouteProviderProps {
    children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
}

const AuthRoute = ({children}: AuthRouteProviderProps): JSX.Element => {

    const { user } = useContext(AuthContext);

    return (
        <>
            {user !== null ? children : <Navigate to="/login" />}
        </>
    )
}

export default AuthRoute;