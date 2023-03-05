import React,{useState,useContext, useEffect} from "react";
import PersistContext from "./../../Context/PersistContext";
import {useTranslation} from "react-i18next";
import InputQuery from "./components/InputQuery";
import Modal from "./../../components/Modal";
import LoadingScreen from "./../../components/LoadingScreen";
import {analytics} from "./../../firebase";
import { logEvent } from "firebase/analytics";
function Analyze(){
    const {t}=useTranslation();
    const {analyzeResponse,setAnalyzeResponse}=useContext(PersistContext);
    const [loading,setLoading]=useState(false);
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
    if(loading)
        return <LoadingScreen text={`${t("analyzing")}...`}/>
    return(
        <>
            {analyzeResponse && 
                <Modal
                    title={t("Analyze")}
                    display="fixed" 
                    clearData={setAnalyzeResponse}>
                    <p>Tone : {analyzeResponse["Tone"]}</p>
                    <p>Quality : {analyzeResponse["Quality"]}</p>
                    <p>Grammar : {analyzeResponse["Grammar"]}</p>
                </Modal>}
            {/* {responseText && window.alert(responseText)} */}
            <InputQuery submitAnalyze={submitAnalyze} />
        </>
        
    );
}

export default Analyze;