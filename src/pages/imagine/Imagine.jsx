import React,{useState} from "react";
import {useTranslation} from "react-i18next";
import InputQuery from "./components/InputQuery";
import ResultScreen from "./components/ResultScreen";
import LoadingScreen from "./../../components/LoadingScreen";

function Imagine(){
    const {t}=useTranslation();
    const [loading,setLoading]=useState(false);
    const [responseImage,setResponseImage]=useState(false);
    let query=undefined;
    const setQuery=(text)=>query=text;
    const submitQuery=()=>{
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic dGVzdDE6dGVzdDFfcGFzcw==");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "https://ml-text-ai.herokuapp.com");
        const data={
            data:query,
            imagine:true,
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
        //     setLoading(false);
        //     console.log(responseText);
        // })
        // .catch((err)=>console.log(err));
        setTimeout(()=>{
            setResponseImage("https://oaidalleapiprodscus.blob.core.windows.net/private/org-fmI5EsPbDCd7eyl5ffN1BlLK/user-uEHTX2iQvptP0NFA2fTTQUCe/img-HekdGlJthOQ4LlN63uR3EMMR.png?st=2023-03-02T06%3A34%3A12Z&se=2023-03-02T08%3A34%3A12Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-02T05%3A23%3A16Z&ske=2023-03-03T05%3A23%3A16Z&sks=b&skv=2021-08-06&sig=l1BTDKkeKWgSaCpFz0WhpwesrgzZRHJ0NJMehZYKgP8%3D");
            setLoading(false);
        },5000);
    }

    if(loading)
        return <LoadingScreen text={`${t("Imagining")}...`}/>
    else if(responseImage)
        return <ResultScreen url={responseImage}/>
    return(
        <div>
            <InputQuery setQuery={setQuery} submitQuery={submitQuery}/>
        </div>
    );
}

export default Imagine;