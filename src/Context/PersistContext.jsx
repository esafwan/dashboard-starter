import {createContext,useState} from "react";

const PersistContext=createContext();

export const PersistProvider=({children})=>{

    if(!localStorage.getItem("language"))
        localStorage.setItem("language","en");

    
    const [user,setUser]=useState(true);
    const [language,setLanguage]=useState(localStorage.getItem("language"));
    const [writeResponseText,setWriteResponseText]=useState("");
    const [analyzeResponse,setAnalyzeResponse]=useState(undefined); //object
    const [imagineResponseUrl,setImagineResponseUrl]=useState("");

    return (<PersistContext.Provider value={{
        user,
        setUser,
        language,
        setLanguage,
        writeResponseText,
        setWriteResponseText,
        analyzeResponse,
        setAnalyzeResponse,
        imagineResponseUrl,
        setImagineResponseUrl
    }}>
        {children}
    </PersistContext.Provider>);
}

export default PersistContext;