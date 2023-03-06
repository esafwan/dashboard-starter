import {useState} from "react";
import {useTranslation} from "react-i18next";
const CopyButton=({text})=>{
    const {t}=useTranslation();
    const [copied,setCopied]=useState(false);
    function onCopy(){
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(()=>{
            setCopied(false);
        },2000)
    }
    return(
        <button className="bg-gray-100 p-2 flex flex-row rounded-md text-sm hover:bg-gray-200"
                onClick={onCopy}>
                    {!copied && (<>
                        {t("Copy")}
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-copy" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                            <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                        </svg></>)}
                    {copied && (<>
                        {t("Copied")}
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clipboard-check" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                        <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                        <path d="M9 14l2 2l4 -4"></path>
                        </svg>
                    </>)}
        </button>
    );
};

export default CopyButton;