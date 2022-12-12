import { useState, useEffect, createContext } from 'react';
import { auth } from '../auth/auth';
import { User } from "firebase/auth";
import { signInWithRedirect, getRedirectResult, signOut, GoogleAuthProvider, UserCredential } from "firebase/auth";

interface AuthContextInterface {
    user: User | null;
    loginGoogle: () => void;
    logOutGoogle: () => void;
}

interface AuthProviderProps {
    children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
}

export const AuthContext = createContext<AuthContextInterface>(
    {
        user: null,
        loginGoogle: () => { },
        logOutGoogle: () => { },
    }
);

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(auth.currentUser);
    const [loading, setLoading] = useState(true)

    getRedirectResult(auth).then((result: UserCredential | null) => {
        if (result !== null) {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            setUser(user);
        }
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log("Error: " + error);
    });

    const loginGoogle = (): void => {
        if (user === null) {
            let provider = new GoogleAuthProvider();
            signInWithRedirect(auth, provider);
        }
    }

    const logOutGoogle = (): void => {
        signOut(auth);
        setUser(null);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
        })

        return unsubscribe
    }, []);

    const value: AuthContextInterface = {
        user: user,
        loginGoogle: loginGoogle,
        logOutGoogle: loginGoogle,
    }

    return (
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;