import React,{useState,useContext,useEffect} from "react";
import PersistContext from "./../../../Context/PersistContext";
import {useTranslation} from "react-i18next";
import ButtonHolder from "./../../../components/ButtonHolder";
import MainButton from "./../../../components/buttons/MainButton";

function InputQuery({submitQuery}){
    const {language}=useContext(PersistContext);
    const {t}=useTranslation();
    const [queryText,setQueryText]=useState(t("Imagine Placeholder"));
    useEffect(()=>{
        setTimeout(()=>{
            setQueryText(t("Imagine Placeholder"))
        });
    },[language]);
    const handleImagine=()=>{
        if(queryText){
            submitQuery(queryText);
        }
    }
    
    return (
        <div className="flex flex-col">
            <textarea id="queryText"
            value={queryText}
            className="border-0 resize-none h-36 p-5"
            style={{"boxShadow":"none"}}
            onChange={(e)=>setQueryText(e.target.value)}/>
            <ButtonHolder>
                <MainButton text={t("Imagine")} onClickHandler={handleImagine}/>
            </ButtonHolder>
        </div>
    );
}

export default InputQuery;