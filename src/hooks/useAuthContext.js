import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = ()=>{
    const context =useContext(AuthContext)
    if (!context) {
        throw Error(" use AuthContext must be inside an AuthContext provider")
    }

    return context
}