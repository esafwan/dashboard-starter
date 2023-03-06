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

function Imagine(){
    const {t}=useTranslation();
    const {imagineResponseUrl,setImagineResponseUrl}=useContext(PersistContext);
    const [loading,setLoading]=useState(false);
    
    const resetHandler=()=>setImagineResponseUrl("");

    const submitQuery=(imagineQuery)=>{
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
            logEvent(analytics,"imagine",{query:imagineQuery});
            setImagineResponseUrl(data["image"])
            setLoading(false);
        })
        .catch((err)=>console.log(err));
        // setTimeout(()=>{
        //     logEvent(analytics,"imagine",{query:imagineQuery});
        //     setImagineResponseUrl("https://oaidalleapiprodscus.blob.core.windows.net/private/org-fmI5EsPbDCd7eyl5ffN1BlLK/user-uEHTX2iQvptP0NFA2fTTQUCe/img-94ZE5ynUJIQYKFYtyuxFb64n.png?st=2023-03-03T10%3A04%3A28Z&se=2023-03-03T12%3A04%3A28Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-03T00%3A12%3A57Z&ske=2023-03-04T00%3A12%3A57Z&sks=b&skv=2021-08-06&sig=XdZR9wyrUZiqrri%2BZOQbQ40OuW/TEn6IgKDe%2Bmyap4E%3D");
        //     setLoading(false);
        // },5000);
    }

    return (
        <div className="flex flex-col overflow-hidden h-full">
            <div className="flex justify-between">
                <div className="text-2xl font-bold tracking-wide text-slate-900">{t("Imagine")}</div>
                {(!loading && imagineResponseUrl) && <MainButton text={t("Modify")} onClickHandler={resetHandler}/>}
            </div>
             <div className={"flex flex-col border border-black border-dashed rounded-md border-slate-200 mt-12"}>
                {loading && <LoadingScreen text={`${t("Imagining")}...`}/>}
                {(!loading && imagineResponseUrl) && 
                <>
                    <div className="p-2 self-end">
                        <CopyButton text={imagineResponseUrl}/>
                    </div>
                    <ResultScreen
                    url={imagineResponseUrl}/>
                </>}
                {(!loading && !imagineResponseUrl) && <InputQuery 
                    submitQuery={submitQuery} />}
             </div>
        </div>
    );
}

export default Imagine;