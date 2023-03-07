import {createContext,useState,useEffect,useContext} from "react";
import {auth} from "./../firebase";

const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [user,setUser]=useState();
    const [userLoading,setUserLoading]=useState(true);
    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged((user)=>{
            setUser(user);
            setUserLoading(false);
        });
        return unsubscribe;
    },[]);

    return !userLoading && (<AuthContext.Provider
    value={{user}}>
        {children}
    </AuthContext.Provider>);
}

export const useAuth=()=>useContext(AuthContext);

export default AuthContext;