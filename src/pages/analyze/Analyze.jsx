import React,{useState,useContext} from "react";
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
    const [currentPage,setCurrentPage]=useState(1);
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
            setAnalyzeResponse(Object.values(data));
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

    function pageIncreaseHandler(){
        if(currentPage+1<=analyzeResponse.length)
            setCurrentPage((prevState)=>prevState+1);
    }

    function pageDecreaseHandler(){
        if(currentPage-1 > 0)
            setCurrentPage((prevState)=>prevState-1);
    }

    return (
        <div className="flex flex-col overflow-hidden h-full">
            <div className="flex justify-between">
                <div className="text-2xl font-bold tracking-wide text-slate-900">{t("Suggest")}</div>
                {(!loading && analyzeResponse) && <MainButton text={t("Modify")} onClickHandler={resetHandler}/>}
            </div>
            {!loading && analyzeResponse && (
                <div className="flex justify-end mt-12 text-slate-500">
                    {`${currentPage} of ${analyzeResponse.length} suggestions`}
                    <button onClick={pageDecreaseHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M15 6l-6 6l6 6"></path>
                        </svg>
                    </button>
                    <button className="border-l-2" onClick={pageIncreaseHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9 6l6 6l-6 6"></path>
                        </svg>
                    </button>
                </div>)}


             <div className={`flex flex-col border border-black border-dashed rounded-md border-slate-200 ${analyzeResponse?"mt-4":"mt-12"}`}>
                {loading && <LoadingScreen text={`${t("writing")}...`}/>}
                {(!loading && analyzeResponse) && 
                (<>
                     <div className="p-2 self-end">
                         <CopyButton text={analyzeResponse[currentPage-1].txt}/>
                    </div>
                    <ResultScreen text={analyzeResponse[currentPage-1].txt}/>
                </>)
                }
                {(!loading && !analyzeResponse) && <InputQuery 
                    submitAnalyze={submitAnalyze} />}
             </div>
        </div>
    );
}

export default Analyze;