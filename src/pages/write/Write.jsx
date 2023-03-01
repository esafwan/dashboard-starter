import React,{useState} from "react";
import InputQuery from "./components/InputQuery";
import ResultScreen from "./components/ResultScreen";
import LoadingScreen from "./../../components/LoadingScreen";

function Write(){
    const [loading,setLoading]=useState(false);
    const [responseText,setResponseText]=useState(false);
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
        //     console.log(responseText);
        // })
        // .catch((err)=>console.log(err));
        setTimeout(()=>{
            setResponseText(`<br><br>What is the government doing to protect citizens during the COVID-19 pandemic?<br><br>The government is taking a number of measures to protect citizens during the COVID-19 pandemic. These include providing guidance on physical distancing, implementing travel restrictions, encouraging people to wear face coverings, and increasing testing and contact tracing capabilities. The government is also providing economic support to individuals and businesses, including emergency relief payments and loan programs. In addition, the government is taking steps to ensure that essential services remain available and accessible, and is providing additional funding for health care providers and research into treatments and vaccines.`);
            setLoading(false);
        },5000);
    }
    if(loading)
        return <LoadingScreen text="Writing ..."/>
    else if(responseText)
        return <ResultScreen text={responseText}/>
    return (<div className="overflow-hidden">
        <InputQuery setQuery={setQuery} submitQuery={submitQuery}/>
    </div>);
}

export default Write;