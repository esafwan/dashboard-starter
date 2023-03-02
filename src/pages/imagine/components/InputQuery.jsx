import React from "react";
import {useTranslation} from "react-i18next";

function InputQuery({setQuery,submitQuery}){
    const {t}=useTranslation();
    const handleImagine=()=>{
        const queryText=document.getElementById("queryText").value;
        // queryText && setQuery(queryText) && submitQuery();
        if(queryText){
            setQuery(queryText);
            submitQuery();
        }
    }
    return (
        <div className="h-full">
            <div className="text-4xl font-bold">{t("Imagine")}</div>
            <div className="flex flex-col p-5 mt-12 border border-black border-dashed rounded-md">
                <textarea id="queryText"
                defaultValue="The nation wants to know"
                className="border-0 resize-none h-36"
                style={{"boxShadow":"none"}}/>
                <div className="mt-2">
                    <button className="h-9 items-center rounded-md border float-right
                    border-transparent bg-slate-900 px-4 py-2 text-sm font-medium 
                    text-white hover:bg-slate-700 focus:outline-none focus:ring-2 
                    focus:ring-brand-500 focus:ring-offset-2"
                    onClick={handleImagine}>
                        {t("Imagine")}</button>
                </div>
            </div>
        </div>
    );
}

export default InputQuery;