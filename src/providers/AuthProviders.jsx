import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

 
export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
        
<<<<<<< HEAD
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
=======
>>>>>>> 11751dc87089a848288f7d08d29d89c83f365fe5
    }

    const authInfo = {
        user ,
        createUser,
        signIn
    } 

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;