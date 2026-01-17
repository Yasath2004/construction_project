import { createContext, useState } from "react";

export const authContext = createContext(null);
export const authprovider = ({children})=>{
    const userinfo = localStorage.getItem('userInfo');
    const [user,setuser]= useState(userinfo);

    const login =(user)=>{
        setuser(user)
    }

    const logout =()=>{
        localStorage.removeItem('userInfo');
        setuser(null)

    }
    
    return{
        <AuthContext.Provider={{
            user,
            login,
            logout
        }}>
        </AuthContext.Provider>
    }

}