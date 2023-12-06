import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const provider = new GoogleAuthProvider()
export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginByGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const userUpdate = (name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,photoURL:photo
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe
        }
    }, [])

    const allAuthInfo = { user, loading, createNewUser, loginUser, loginByGoogle, logOutUser, userUpdate }
    return (
        <AuthContext.Provider value={allAuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;