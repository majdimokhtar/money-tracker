import { useState,useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useSignUp =()=>{
    const [isCancelled,setIsCancelled]= useState(false)
    const [error,setError]=useState(null)
    const [isPending , setIsPending]=useState(false)
    const {dispatch} = useAuthContext()
    
    const signUp = async (email,password,displayName)=>{
    setError(null)
    setIsPending(true)
    try {
        //signup user
        const res =await projectAuth.createUserWithEmailAndPassword(email,password)
        
        if (!res) {
            throw new Error("could not complete sign up")
        }
        // display name to user
        await res.user.updateProfile({displayName})
        //dispatch login
        dispatch({type:"LOGIN",payload:res.user})
        //update state
        if (!isCancelled) {
        setIsPending(false)
        setError(null)
        }
    } catch (err) {
        if (!isCancelled) {
        console.log(err.message)
        setError(err.message)
        setIsPending(false)
        }
    }
    }
    useEffect(() => {
        return ()=>setIsCancelled(true)
       }, [])

    return {error,isPending,signUp}
}