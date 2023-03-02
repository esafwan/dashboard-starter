import {createContext,useState} from "react";

const PersistContext=createContext();

export const PersistProvider=({children})=>{
    const [writeResponseText,setWriteResponseText]=useState("");
    const [analyzeText,setAnalyzeText]=useState("A quick brown fox jumped over a ledge");
    const [analyzeResponse,setAnalyzeResponse]=useState(undefined); //object
    const [imagineQuery,setImagineQuery]=useState("A person walking in rain, pastel painting");
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