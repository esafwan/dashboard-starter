import {createContext,useState} from "react";
import {useTranslation} from "react-i18next";

const PersistContext=createContext();

export const PersistProvider=({children})=>{

    if(!localStorage.getItem("language"))
        localStorage.setItem("language","en");

    

    const [language,setLanguage]=useState(localStorage.getItem("language"));
    const [writeResponseText,setWriteResponseText]=useState("");
    const [analyzeResponse,setAnalyzeResponse]=useState(undefined); //object
    const [imagineResponseUrl,setImagineResponseUrl]=useState("");

    const {t}=useTranslation();
    const [writeQuery,setWriteQuery]=useState(t("Write Placeholder"));
    const [suggestQuery,setSuggestQuery]=useState(t("Analyze Placeholder"));
    const [imagineQuery,setImagineQuery]=useState(t("Imagine Placeholder"));

    return (<PersistContext.Provider value={{
        language,
        setLanguage,
        writeResponseText,
        setWriteResponseText,
        analyzeResponse,
        setAnalyzeResponse,
        imagineResponseUrl,
        setImagineResponseUrl,
        writeQuery,
        setWriteQuery,
        suggestQuery,
        setSuggestQuery,
        imagineQuery,
        setImagineQuery
    }}>
        {children}
    </PersistContext.Provider>);
}

export default PersistContext;