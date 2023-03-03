import React,{useRef,useLayoutEffect, useEffect} from "react";
import {useTranslation} from "react-i18next";
import CopyButton from "./../../../components/buttons/CopyButton";
import ShareButton from "./../../../components/buttons/ShareButton";

function ResultScreen({text,setResponseText,outputLang}){
    console.log(outputLang);
    const MIN_TEXTAREA_HEIGHT=35;
    const {t}=useTranslation();
    const textareaRef = useRef(null);
    const onChange=(event)=>setResponseText(event.target.value);
    const handleModify=()=>{
        setResponseText("")
    }

    useEffect(()=>{
        textareaRef.current.style.height="inherit";
        textareaRef.current.style.height=`${Math.max(textareaRef.current.scrollHeight,MIN_TEXTAREA_HEIGHT)}px`;
    },[text]);

    return (
        <div className="h-full w-full overflow-hidden">
            <div className="text-4xl font-bold flex flex-row justify-between ">
                <span>{t("response")}</span>
                <button className="h-9 items-center rounded-md border
                    border-transparent bg-slate-900 px-3 py-2 text-sm font-medium 
                    text-white hover:bg-slate-700 focus:outline-none focus:ring-2 
                    focus:ring-brand-500 focus:ring-offset-2"
                    onClick={handleModify}>
                    {t("Modify")}
                </button>
            </div>
            <div className="mt-12 flex flex-row justify-end">
                <CopyButton text={text}/>
                <ShareButton/>
            </div>
            <div className="flex flex-col mt-4 border border-black border-dashed rounded-md" dir={outputLang==="ar"?"rtl":"ltr"}>
                <textarea
                onChange={onChange}
                ref={textareaRef}
                style={{
                    minHeight:MIN_TEXTAREA_HEIGHT,
                    boxShadow:"none"
                }}
                className="resize-none border-0 outline-none"
                value={text}/>
            </div>
        </div>
    );
}

export default ResultScreen;