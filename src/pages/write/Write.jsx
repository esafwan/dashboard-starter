import React,{useState,useContext} from "react";
import {useTranslation} from "react-i18next";
import PersistContext from "./../../Context/PersistContext";
import InputQuery from "./components/InputQuery";
import ResultScreen from "./components/ResultScreen";
import LoadingScreen from "./../../components/LoadingScreen";

// import firebase from "firebase/app";
// import "firebase/analytics";

// const firebaseConfig = {

//     apiKey: "AIzaSyA54AYIqvuMY0rYnbVIPi_5V5nGHNpu0uU",
  
//     authDomain: "text-ai-dev-f90ef.firebaseapp.com",
  
//     projectId: "text-ai-dev-f90ef",
  
//     storageBucket: "text-ai-dev-f90ef.appspot.com",
  
//     messagingSenderId: "802835550907",
  
//     appId: "1:802835550907:web:bbd61c56df3b8276f60f9e",
  
//     measurementId: "G-XCCFHH0HFZ"
  
//   };

// firebase.initializeApp(firebaseConfig);
// const analytics=firebase.analytics();

import {analytics} from "./../../firebase";
import { logEvent } from "firebase/analytics";
function Write(){
    const {t}=useTranslation();
    const {writeResponseText,setWriteResponseText}=useContext(PersistContext);
    const [loading,setLoading]=useState(false);
    let query=undefined;
    const setQuery=(text)=>query=text;
    const submitQuery=(outputLang)=>{
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic dGVzdDE6dGVzdDFfcGFzcw==");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "https://ml-text-ai.herokuapp.com");
        const data={
            data:query,
            input_lang:"en",
            output_lang:outputLang
        }
        const options={
            method:"POST",
            headers:myHeaders,
            body:JSON.stringify(data),
            redirect:"follow"
        }
        fetch("https://ml-text-ai.herokuapp.com/magic",options)
        .then((res)=>res.json())
        .then((data)=>{
            logEvent(analytics,"write",{query:"test"});
            setWriteResponseText(data.txt);
            setLoading(false);
        })
        .catch((err)=>console.log(err));
        // setTimeout(()=>{
        //     setWriteResponseText(`Congratulations on your outstanding performance this past quarter! Your hard work and dedication have been exemplary and have had a positive impact on the entire team.`);
        //     setLoading(false);
        // },5000);
    }
    if(loading)
        return <LoadingScreen text={`${t("writing")}...`}/>
    else if(writeResponseText)
        return <ResultScreen text={writeResponseText} setResponseText={setWriteResponseText}/>
    return (<div className="overflow-hidden">
        <InputQuery setQuery={setQuery} submitQuery={submitQuery}/>
    </div>);
}

export default Write;