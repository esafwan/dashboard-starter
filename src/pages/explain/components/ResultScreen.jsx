import React from "react";
import {useTranslation} from "react-i18next";

function ResultScreen(){
    const {t}=useTranslation();
    return(
        <div className="h-full w-full overflow-hidden">
            <div className="text-4xl font-bold flex flex-row justify-between ">
                <span>{t("explain")}</span>
            </div>
            <div className="flex flex-col mt-4 border border-black border-dashed rounded-md">
                We are still under development.
            </div>
        </div>
    );
}

export default ResultScreen;