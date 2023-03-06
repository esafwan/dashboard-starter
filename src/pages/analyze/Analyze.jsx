import React,{useState,useContext, useEffect} from "react";
import PersistContext from "./../../Context/PersistContext";
import {useTranslation} from "react-i18next";
import InputQuery from "./components/InputQuery";
import LoadingScreen from "./../../components/LoadingScreen";
import {analytics} from "./../../firebase";
import { logEvent } from "firebase/analytics";
function Analyze(){
    const {t}=useTranslation();
    const {analyzeResponse,setAnalyzeResponse}=useContext(PersistContext);
    const [loading,setLoading]=useState(false);
    const resetHandler=()=>setAnalyzeResponse("");
    const submitQuery=(analyzeText)=>{
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic dGVzdDE6dGVzdDFfcGFzcw==");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "https://ml-text-ai.herokuapp.com");
        const data={
            "data":analyzeText,
            "input_lang":"en",
            "output_lang":"en"
        }
        const options={
            method:"POST",
            headers:myHeaders,
            body:JSON.stringify(data),
            redirect:"follow"
        }
        fetch("https://ml-text-ai.herokuapp.com/analyze",options)
        .then((res)=>res.json())
        .then((data)=>{
            logEvent(analytics,"analyze",{query:analyzeText});
            setAnalyzeResponse(data);
            setLoading(false);
        })
        .catch((err)=>console.log(err));
        // setTimeout(()=>{
        //     logEvent(analytics,"analyze",{query:analyzeText});
        //     setAnalyzeResponse({
        //         "Tone": "Positive",
        //         "Quality": "Informative",
        //         "Grammar": 9
        //     });
        //     setLoading(false);
        // },1000);
    }
    return (
        <div className="flex flex-col overflow-hidden h-full">
            <div className="flex justify-between">
                <div className="text-2xl font-bold tracking-wide text-slate-900">{t("Suggest")}</div>
                {(!loading && analyzeResponse) && <MainButton text={t("Modify")} onClickHandler={resetHandler}/>}
            </div>
             <div className={"flex flex-col border border-black border-dashed rounded-md border-slate-200 mt-12"}>
                {loading && <LoadingScreen text={`${t("writing")}...`}/>}
                {(!loading && analyzeResponse) && 
                <>
                    <div className="p-2 self-end">
                        <CopyButton text={analyzeResponse}/>
                    </div>
                    <ResultScreen
                    text={analyzeResponse}
                    setResponseText={setAnalyzeResponse}/>
                </>}
                {(!loading && !analyzeResponse) && <InputQuery 
                    submitQuery={submitQuery} />}
             </div>
        </div>
    );
}

export default Analyze;