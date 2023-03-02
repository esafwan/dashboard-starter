import React,{useState} from "react";
import {useTranslation} from "react-i18next";
import InputQuery from "./components/InputQuery";
import Modal from "./components/Modal";
import LoadingScreen from "./../../components/LoadingScreen";

function Analyze(){
    let analyzeText="";
    const {t}=useTranslation();
    const [loading,setLoading]=useState(false);
    const [responseText,setResponseText]=useState("");
    const setAnalyzeText=(text)=>analyzeText=text;
    const submitAnalyze=()=>{
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic dGVzdDE6dGVzdDFfcGFzcw==");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "https://ml-text-ai.herokuapp.com");
        const data={
            data:`Analyze below text. Return json with the following: 1. Tone, 2. Quality, 3.Grammar with a score out of 10 \n
            ${analyzeText}`,
            input_lang:"en",
            output_lang:"en"
        }
        const options={
            method:"POST",
            headers:myHeaders,
            body:JSON.stringify(data),
            redirect:"follow"
        }
        // fetch("https://ml-text-ai.herokuapp.com/magic",options)
        // .then((res)=>res.text())
        // .then((text)=>{
        //     setResponseText(text);
        //     setLoading(false);
        //     console.log(text);
        // })
        // .catch((err)=>console.log(err));
        setTimeout(()=>{
            setResponseText(`<br>{<br>    &quot;Tone&quot;: &quot;Inspiring&quot;, <br>    &quot;Quality&quot;: &quot;Positive&quot;,<br>    &quot;Grammar&quot;: 9.5<br>}`);
            setLoading(false);
        },1000);
    }
    if(loading)
        return <LoadingScreen text={`${t("analyzing")}...`}/>
    // else if(responseText)
    //     return (<Modal display="block">{responseText}</Modal>);
    return(
        <>
            {responseText && <Modal display="fixed">{responseText}</Modal>}
            {/* {responseText && window.alert(responseText)} */}
            <InputQuery submitAnalyze={submitAnalyze} setAnalyzeText={setAnalyzeText}/>
        </>
        
    );
}

export default Analyze;