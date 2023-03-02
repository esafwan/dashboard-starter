import React from "react";
import {useTranslation} from "react-i18next";
import ShareButton from "./../../../components/buttons/ShareButton";

function ResultScreen({url,setImagineResponseUrl}){
    const {t}=useTranslation();
    return(
        <div className="h-full">
            <div className="text-4xl font-bold flex flex-row justify-between">
                <span>{t("response")}</span>
                <button className="h-9 items-center rounded-md border
                    border-transparent bg-slate-900 px-4 py-2 text-sm font-medium 
                    text-white hover:bg-slate-700 focus:outline-none focus:ring-2 
                    focus:ring-brand-500 focus:ring-offset-2"
                    onClick={()=>setImagineResponseUrl("")}>
                    {t("Modify")}
                </button>
            </div>
            <div className="mt-12 md:mx-auto md:w-4/5 md:h-4/5 flex flex-col">
                <span className="w-max self-end">
                    <ShareButton/>
                </span>
                <div className="flex flex-col p-4 mt-4 border border-black border-dashed rounded-md">
                    <img src={url} className="w-full h-full"/>
                </div>
            </div>
        </div>
    );
}

export default ResultScreen;