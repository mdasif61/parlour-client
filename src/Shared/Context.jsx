import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import axios from "axios";

const auth=getAuth(app)
export const AuthContext=createContext(null)

const Context = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)


    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser=(name)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
        })
    }

    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)

            if(currentUser){
                axios.post('http://localhost:5000/jwt',currentUser?.email)
            .then(data=>{
                localStorage.setItem('jwt-token', data.data.token)
                setLoading(false)
            })
            }
            else{
                localStorage.removeItem('jwt-token')
            }

            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])

    const info={
        user,
        loading,
        createUser,
        signIn,
        updateUser,
        logOut
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;