import React,{useState,useEffect,useContext} from "react";
import PersistContext from "./../../../Context/PersistContext";
import {useTranslation} from "react-i18next";
import ButtonHolder from "./../../../components/ButtonHolder";
import MainButton from "./../../../components/buttons/MainButton";

function InputQuery({submitQuery}){
    const {t}=useTranslation();
    const {language,writeQuery,setWriteQuery}=useContext(PersistContext);
    const [queryText,setQueryText]=useState(writeQuery);
    useEffect(()=>{
        setTimeout(()=>{
            setQueryText(writeQuery);
        });
    },[language]);
    function handleCreate(){
        if(queryText){
            setWriteQuery(queryText);
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
                <MainButton text={t("create")} onClickHandler={handleCreate}/>
            </ButtonHolder>
        </div>
    );
}

export default InputQuery;