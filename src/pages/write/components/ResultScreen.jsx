import React from "react";
import {useTranslation} from "react-i18next";

function ResultScreen({text,setResponseText}){
    const {t}=useTranslation();
    const handleModify=()=>{
        setResponseText("")
    }
    return (
        <div className="h-full">
            <div className="text-4xl font-bold flex flex-row justify-between">
                <span>{t("response")}</span>
                <button className="h-9 items-center rounded-md border
                    border-transparent bg-slate-900 px-4 py-2 text-sm font-medium 
                    text-white hover:bg-slate-700 focus:outline-none focus:ring-2 
                    focus:ring-brand-500 focus:ring-offset-2"
                    onClick={handleModify}>
                    {t("Modify")}
                </button>
            </div>
            <div className="flex flex-col p-5 mt-12 border border-black border-dashed rounded-md">
                <span contentEditable
                role="textbox"
                className="outline-none">
                    {text}
                </span>
            </div>
        </div>
    );
}

export default ResultScreen;