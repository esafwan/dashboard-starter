import React from "react";
import {useTranslation} from "react-i18next";

function InputQuery({submitAnalyze}){
    const {t}=useTranslation();
    const handleAnalyze=()=>{
        const analyzeText=document.getElementById("analyzeText").value;
        if(analyzeText){
            submitAnalyze(analyzeText);
        }
    }
    return (
        <div className="h-full overflow-hidden">
            <div className="text-4xl font-bold">{t("analyze")}</div>
            <div className="flex flex-col p-5 mt-12 border border-black border-dashed rounded-md">
                <textarea id="analyzeText"
                value={t("Analyze Placeholder")}
                className="border-0 resize-none h-36"
                style={{"boxShadow":"none"}}/>
                <div className="mt-2 flex justify-end">
                    <button className="h-9 items-center rounded-md border float-right
                    border-transparent bg-slate-900 px-4 py-2 text-sm font-medium 
                    text-white hover:bg-slate-700 focus:outline-none focus:ring-2 
                    focus:ring-brand-500 focus:ring-offset-2"
                    onClick={handleAnalyze}
                    >
                        {t("analyze")}</button>
                </div>
            </div>
        </div>
    );
}

export default InputQuery;