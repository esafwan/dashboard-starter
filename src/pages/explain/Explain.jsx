import React from "react";
import {useTranslation} from "react-i18next";
import InputQuery from "./components/InputQuery";

function Explain(){
    const {t}=useTranslation();
    return (
        <div className="flex flex-col overflow-hidden h-full">
            <div className="flex justify-between">
                <div className="text-2xl font-bold tracking-wide text-slate-900">{t("explain")}</div>
                {/* {(!loading && writeResponseText) && <MainButton text={t("Modify")} onClickHandler={resetHandler}/>} */}
            </div>
             <div className={"flex flex-col border border-black border-dashed rounded-md border-slate-200 mt-12"}>
                {/* {loading && <LoadingScreen text={`${t("writing")}...`}/>}
                {(!loading && writeResponseText) && 
                <>
                    <div className="p-2 self-end">
                        <CopyButton text={writeResponseText}/>
                    </div>
                    <ResultScreen
                    text={writeResponseText}
                    setResponseText={setWriteResponseText}/>
                </>}
                {(!loading && !writeResponseText) && <InputQuery 
                    submitQuery={submitQuery} />} */}
                <InputQuery/>
             </div>
        </div>
    );
}

export default Explain;