import React from "react";
import {useTranslation} from "react-i18next";

function InputQuery(){
    const {t}=useTranslation();
    return (
        <div className="h-full">
            <div className="text-4xl font-bold">{t("explain")}</div>
            <div className="flex flex-col p-5 mt-12 border border-black border-dashed rounded-md">
                <textarea id="explainText"
                // defaultValue={t("Explain Placeholder")}
                className="border-0 resize-none h-36"
                style={{"boxShadow":"none"}}/>
                <div className="mt-2 flex justify-end items-center">
                    <button className="h-9 items-center rounded-md border
                    border-transparent bg-slate-900 mx-4 px-4 py-2 text-sm font-medium 
                    text-white hover:bg-slate-700 focus:outline-none focus:ring-2 
                    focus:ring-brand-500 focus:ring-offset-2"
                    >
                        {t("explain")}</button>
                </div>
            </div>
        </div>
    );
}

export default InputQuery;