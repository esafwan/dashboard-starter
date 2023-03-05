import React,{useState} from "react";
import {useTranslation} from "react-i18next";
import ButtonHolder from "./../../../components/ButtonHolder";
import MainButton from "./../../../components/buttons/MainButton";

function InputQuery({submitQuery}){
    const {t}=useTranslation();
    // const {writePlaceholder}=useContext(PersistContext);
    // const [placeholder,setPlaceholder]=useState(t("Write Placeholder"));
    const [queryText,setQueryText]=useState(t("Write Placeholder"));
    function handleCreate(){
        // const queryText=document.getElementById("queryText").value;
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
                <MainButton text={t("create")} onClickHandler={handleCreate}/>
            </ButtonHolder>
        </div>
    );
}

export default InputQuery;