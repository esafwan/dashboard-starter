import React from "react";
import {useTranslation} from "react-i18next";

function ResultScreen({text}){
    const {t}=useTranslation();
    return (
        <div className="h-full">
            <div className="text-4xl font-bold">{t("response")}</div>
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