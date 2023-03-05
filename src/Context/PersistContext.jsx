import {createContext,useEffect,useState} from "react";
import {useTranslation} from "react-i18next";

const PersistContext=createContext();

export const PersistProvider=({children})=>{

    if(!localStorage.getItem("language"))
        localStorage.setItem("language","en");

    const {t}=useTranslation();
    const [language,setLanguage]=useState(localStorage.getItem("language"));
    const [writeResponseText,setWriteResponseText]=useState("");
    // const [analyzeText,setAnalyzeText]=useState(t("Analyze Placeholder"));
    const [analyzeResponse,setAnalyzeResponse]=useState(undefined); //object
    // const [imagineQuery,setImagineQuery]=useState(t("Imagine Placeholder"));
    const [imagineResponseUrl,setImagineResponseUrl]=useState("");
    // useEffect(()=>{
    //     setWritePlaceholder(t("Write Placeholder"));
    //     console.log("re render");
    // },[language])
    return (<PersistContext.Provider value={{
        language,
        setLanguage,
        // writePlaceholder,
        // writeResponseText,
        setWriteResponseText,
        // analyzeText,
        // setAnalyzeText,
        analyzeResponse,
        setAnalyzeResponse,
        // imagineQuery,
        // setImagineQuery,
        imagineResponseUrl,
        setImagineResponseUrl
    }}>
        {children}
    </PersistContext.Provider>);
}

export default PersistContext;