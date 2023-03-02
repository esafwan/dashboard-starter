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
            <div className="mt-12 flex flex-row justify-end">
                <button className="bg-gray-100 p-2 mx-5 flex flex-row rounded-md text-sm hover:bg-gray-200"
                onClick={()=>navigator.clipboard.writeText(text)}>
                    {t("Copy")}
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clipboard-check" width="21" height="21" viewBox="0 0 24 24" strokeWidth="1.25" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                        <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                        <path d="M9 14l2 2l4 -4"></path>
                    </svg>
                </button>
                <button className="bg-gray-100 p-2 flex flex-row rounded-md text-sm hover:bg-gray-200">
                    {t("Share")}
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-share-3" width="21" height="21" viewBox="0 0 24 24" strokeWidth="1.25" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z"></path>
                    </svg>
                </button>
            </div>
            <div className="flex flex-col p-5 mt-4 border border-black border-dashed rounded-md">
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