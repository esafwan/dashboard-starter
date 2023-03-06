import React from "react";
import {useTranslation} from "react-i18next";
import ButtonHolder from "./../../../components/ButtonHolder";
import MainButton from "./../../../components/buttons/MainButton";

function InputQuery(){
    const {t}=useTranslation();
    return (
        <div className="flex flex-col">
        <textarea id="queryText"
        // value={queryText}
        className="border-0 resize-none h-36 p-5"
        style={{"boxShadow":"none"}}
        // onChange={(e)=>setQueryText(e.target.value)}
        />
        <ButtonHolder>
            <MainButton text={t("explain")} 
            // onClickHandler={handleCreate}
            />
        </ButtonHolder>
    </div>
    );
}

export default InputQuery;