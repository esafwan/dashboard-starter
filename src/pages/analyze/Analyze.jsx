import React,{useState,useContext, useEffect} from "react";
import PersistContext from "./../../Context/PersistContext";
import {useTranslation} from "react-i18next";
import InputQuery from "./components/InputQuery";
import ResultScreen from "./components/ResultScreen";
import LoadingScreen from "./../../components/LoadingScreen";
import MainButton from "./../../components/buttons/MainButton";
import CopyButton from "./../../components/buttons/CopyButton";
import {analytics} from "./../../firebase";
import { logEvent } from "firebase/analytics";
function Analyze(){
    const {t}=useTranslation();
    const {analyzeResponse,setAnalyzeResponse}=useContext(PersistContext);
    const [loading,setLoading]=useState(false);
    const resetHandler=()=>setAnalyzeResponse("");
    const submitAnalyze=(analyzeText)=>{
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
        fetch("https://ml-text-ai.herokuapp.com/suggest",options)
        .then((res)=>res.json())
        .then((data)=>{
            logEvent(analytics,"analyze",{query:analyzeText});
            console.log(data);
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
                {
                    Object.values(analyzeResponse).map((suggestions,index)=>
                    (<div key={index}>
                    {/* <div className="p-2 self-end">
                        <CopyButton text={suggestions.txt}/>
                    </div> */}
                    <ResultScreen
                    text={suggestions.txt}
                    setAnalyzeResponse={setAnalyzeResponse}/>
                    </div>))
                }
                </>}
                {(!loading && !analyzeResponse) && <InputQuery 
                    submitAnalyze={submitAnalyze} />}
             </div>
        </div>
    );
}

export default Analyze;