import React,{useState,useContext} from "react";
import PersistContext from "./../../Context/PersistContext";
import {useTranslation} from "react-i18next";
import InputQuery from "./components/InputQuery";
import ResultScreen from "./components/ResultScreen";
import LoadingScreen from "./../../components/LoadingScreen";

function Imagine(){
    const {t}=useTranslation();
    const {imagineQuery,setImagineQuery,imagineResponseUrl,setImagineResponseUrl}=useContext(PersistContext);
    const [loading,setLoading]=useState(false);
    // const [responseImage,setResponseImage]=useState(false);
    // let query=undefined;
    // const setQuery=(text)=>query=text;
    const submitQuery=()=>{
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic dGVzdDE6dGVzdDFfcGFzcw==");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "https://ml-text-ai.herokuapp.com");
        const data={
            "data":imagineQuery,
            "input_lang":"en",
            "output_lang":"en",
            "imagine":true
        }
        const options={
            method:"POST",
            headers:myHeaders,
            body:JSON.stringify(data),
            redirect:"follow"
        }
        fetch("https://ml-text-ai.herokuapp.com/v2/magic",options)
        .then((res)=>res.json())
        .then((data)=>{
            setImagineResponseUrl(data["image"])
            setLoading(false);
        })
        .catch((err)=>console.log(err));
        // setTimeout(()=>{
        //     setImagineResponseUrl("https://oaidalleapiprodscus.blob.core.windows.net/private/org-fmI5EsPbDCd7eyl5ffN1BlLK/user-uEHTX2iQvptP0NFA2fTTQUCe/img-XfEsljXhg3eQWjOdpC4zMFX2.png?st=2023-03-02T07%3A58%3A45Z&se=2023-03-02T09%3A58%3A45Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-02T04%3A33%3A35Z&ske=2023-03-03T04%3A33%3A35Z&sks=b&skv=2021-08-06&sig=1pq6jIw7VEy5PYgLfvPKG11WjE/1Q8%2Bhj3ybNfBW45w%3D");
        //     setLoading(false);
        // },5000);
    }

    if(loading)
        return <LoadingScreen text={`${t("Imagining")}...`}/>
    else if(imagineResponseUrl)
        return <ResultScreen url={imagineResponseUrl} setImagineResponseUrl={setImagineResponseUrl}/>
    return <InputQuery imagineQuery={imagineQuery} setQuery={setImagineQuery} submitQuery={submitQuery}/>
}

export default Imagine;