import React,{useState,useEffect,useContext} from "react";
import PersistContext from "./../../../Context/PersistContext";
import {useTranslation} from "react-i18next";

function InputQuery({setQuery,submitQuery,setOutputLang}){
    const {t}=useTranslation();
    // const {writePlaceholder}=useContext(PersistContext);
    // const [placeholder,setPlaceholder]=useState(t("Write Placeholder"));
    const handleCreate=()=>{
        const queryText=document.getElementById("queryText").value;
        // setOutputLang(document.getElementById("outputLang").value);
        if(queryText){
            setQuery(queryText);
            submitQuery();
        }
    }
    return (
        <div className="h-full">
            <div className="text-4xl font-bold">{t("write")}</div>
            <div className="flex flex-col p-5 mt-12 border border-black border-dashed rounded-md">
                <textarea id="queryText"
                defaultValue={t("Write Placeholder")}
                className="border-0 resize-none h-36"
                style={{"boxShadow":"none"}}/>
                <div className="mt-2 flex justify-end items-center">
                    {/* <label>
                        <span className="text-xs sm:mx-2">{t("Output Language")} : </span>
                        <select className="text-xs" id="outputLang">
                            <option value="en">English</option>
                            <option value="ar">Arabic</option>
                        </select>
                    </label> */}
                    <button className="h-9 items-center rounded-md border
                    border-transparent bg-slate-900 mx-4 px-4 py-2 text-sm font-medium 
                    text-white hover:bg-slate-700 focus:outline-none focus:ring-2 
                    focus:ring-brand-500 focus:ring-offset-2"
                    onClick={handleCreate}>
                        {t("create")}</button>
                </div>
            </div>
        </div>
    );
}

export default InputQuery;