import {createContext,useState} from "react";
import {useTranslation} from "react-i18next";

const PersistContext=createContext();

export const PersistProvider=({children})=>{
    const {t}=useTranslation();
    const [writeResponseText,setWriteResponseText]=useState("");
    const [analyzeText,setAnalyzeText]=useState(t("Analyze Placeholder"));
    const [analyzeResponse,setAnalyzeResponse]=useState(undefined); //object
    const [imagineQuery,setImagineQuery]=useState(t("Imagine Placeholder"));
    const [imagineResponseUrl,setImagineResponseUrl]=useState("");
    return (<PersistContext.Provider value={{
        writeResponseText,
        setWriteResponseText,
        analyzeText,
        setAnalyzeText,
        analyzeResponse,
        setAnalyzeResponse,
        imagineQuery,
        setImagineQuery,
        imagineResponseUrl,
        setImagineResponseUrl
    }}>
        {children}
    </PersistContext.Provider>);
}

export default PersistContext;