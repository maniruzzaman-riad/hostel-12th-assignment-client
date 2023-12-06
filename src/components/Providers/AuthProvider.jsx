import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useMealsPublic from "../Hooks/useMealsPublic";

const provider = new GoogleAuthProvider()
export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const axiosPublic = useMealsPublic()
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

    const userUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                // to do :
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                    }
                })
            } else {
                // to do something
                localStorage.removeItem('access-token')
            }
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